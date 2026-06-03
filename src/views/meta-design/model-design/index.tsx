/**
 * ModelDesignPage — 模型设计页面主体
 *
 * 功能：
 * - 顶部：返回按钮 + 模型标题
 * - 模型基本信息卡片（可折叠）
 * - 数据源选择器（导入字段到当前激活的实体）
 * - 动态字段配置表格（主表 + 横向拓展表）
 * - 保存按钮（持久化到 localStorage）
 */
import { defineComponent, onMounted, ref, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getModels } from '../model-manager/storage'
import { getModelDesign, saveModelDesign } from '../model-manager/storage'
import type { StoredModel } from '../model-manager/storage'
import type { ModelField, EntityFieldConfig, ModelDesignData } from './types'
import { getEntityConfigs } from './types'
import DataSourceSelector from './DataSourceSelector'
import FieldConfigTable from './FieldConfigTable'
import './index.less'

export default defineComponent({
  name: 'ModelDesignPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const modelId = route.params.id as string

    // ==================== 模型基本信息 ====================
    const modelData = ref<StoredModel | null>(null)
    const infoCollapsed = ref(true)

    // ==================== 设计数据 ====================
    const designData = reactive<ModelDesignData>({
      modelId,
      selectedDbName: '',
      selectedTableName: '',
      entities: [],
      updateTime: '',
    })

    /** 当前激活的实体索引（用于导入字段的目标） */
    const activeEntityIndex = ref(0)

    /** 实体标签页列表 */
    const entityTabs = computed(() =>
      designData.entities.map((e, i) => ({
        key: e.entityKey,
        label: e.entityName,
        index: i,
      })),
    )

    /** 当前激活的实体 */
    const activeEntity = computed(() =>
      designData.entities[activeEntityIndex.value] ?? null,
    )

    // ==================== 初始化 ====================
    onMounted(() => {
      // 加载模型基本信息
      const models = getModels()
      const found = models.find((m) => m.id === modelId)
      if (!found) return
      modelData.value = found

      // 加载或初始化设计数据
      const saved = getModelDesign(modelId)
      if (saved) {
        Object.assign(designData, saved)
      } else {
        // 首次进入：根据模型结构生成实体配置
        designData.entities = getEntityConfigs({
          entityStructure: found.entityStructure,
          extendedTableCount: found.extendedTableCount,
        })
      }
    })

    // ==================== 事件处理 ====================

    /** 返回模型列表 */
    function handleBack() {
      router.push('/meta-design/model-manager')
    }

    /** 切换基本信息折叠 */
    function toggleInfoCollapse() {
      infoCollapsed.value = !infoCollapsed.value
    }

    /** 切换激活的实体标签 */
    function handleTabChange(index: number) {
      activeEntityIndex.value = index
    }

    /** 从数据源导入字段到当前激活的实体 */
    function handleImportFields(fields: ModelField[], tableName: string) {
      const entity = designData.entities[activeEntityIndex.value]
      if (!entity) return

      // 合并导入：已有字段保留，新字段追加（按 fieldName 去重）
      const existingNames = new Set(entity.fields.map((f) => f.fieldName))
      const newFields = fields.filter((f) => !existingNames.has(f.fieldName))
      entity.fields = [...entity.fields, ...newFields]
      entity.sourceTableName = tableName

      if (newFields.length < fields.length) {
        ElMessage.info(`已过滤 ${fields.length - newFields.length} 个重复字段，导入 ${newFields.length} 个新字段`)
      }
    }

    /** 更新实体的字段列表 */
    function handleUpdateFields(entityIndex: number, newFields: ModelField[]) {
      if (designData.entities[entityIndex]) {
        designData.entities[entityIndex].fields = newFields
      }
    }

    /** 保存设计数据 */
    function handleSave() {
      saveModelDesign({ ...designData })
      ElMessage.success('保存成功')
    }

    /** 计算所有实体的总字段数 */
    const totalFieldCount = computed(() =>
      designData.entities.reduce((sum, e) => sum + e.fields.length, 0),
    )

    return () => (
      <div class="model-design-page">
        {/* 顶部导航 */}
        <div class="model-design-header">
          <div class="model-design-header__left">
            <el-button onClick={handleBack} icon="ArrowLeft" size="small">
              返回列表
            </el-button>
            <span class="model-design-header__title">
              模型设计 — {modelData.value?.displayName || '加载中...'}
            </span>
            {modelData.value && (
              <el-tag
                type={modelData.value.status === 'draft' ? 'info' : 'success'}
                size="small"
              >
                {modelData.value.status === 'draft' ? '未发布' : '已发布'}
              </el-tag>
            )}
          </div>
          <div class="model-design-header__right">
            <el-tag type="info" size="small">
              共 {totalFieldCount.value} 个字段
            </el-tag>
            <el-button
              type="primary"
              onClick={handleSave}
              icon="Check"
              size="small"
              disabled={!modelData.value}
            >
              保存设计
            </el-button>
          </div>
        </div>

        {modelData.value ? (
          <div class="model-design-body">
            {/* 模型基本信息卡片 */}
            <el-card class="model-info-card" shadow="never">
              {{
                header: () => (
                  <div class="model-info-card__header" onClick={toggleInfoCollapse}>
                    <span class="model-info-card__header-title">
                      <el-icon><el-icon-info-filled /></el-icon>
                      模型基本信息
                    </span>
                    <el-button
                      link
                      type="primary"
                      size="small"
                      onClick={(e: Event) => { e.stopPropagation(); toggleInfoCollapse() }}
                    >
                      {infoCollapsed.value ? '展开' : '收起'}
                      <el-icon
                        class="model-info-card__toggle-icon"
                        style={{ transform: infoCollapsed.value ? 'rotate(0deg)' : 'rotate(180deg)' }}
                      >
                        <el-icon-arrow-down />
                      </el-icon>
                    </el-button>
                  </div>
                ),
                default: () => (
                  <div
                    class={[
                      'model-info-card__content',
                      { 'model-info-card__content--collapsed': infoCollapsed.value },
                    ]}
                  >
                    <el-descriptions column={3} border size="small">
                      <el-descriptions-item label="模型编码">
                        <span class="model-info-card__code">{modelData.value!.modelCode}</span>
                      </el-descriptions-item>
                      <el-descriptions-item label="显示名称">{modelData.value!.displayName}</el-descriptions-item>
                      <el-descriptions-item label="所属模块">{modelData.value!.module}</el-descriptions-item>
                      <el-descriptions-item label="分组">{modelData.value!.groupName}</el-descriptions-item>
                      <el-descriptions-item label="模型关系">{modelData.value!.modelRelation}</el-descriptions-item>
                      <el-descriptions-item label="实体结构">{modelData.value!.entityStructure}</el-descriptions-item>
                    </el-descriptions>
                  </div>
                ),
              }}
            </el-card>

            {/* 数据源选择器 */}
            <el-card class="data-source-card" shadow="never">
              {{
                header: () => (
                  <div class="data-source-card__header">
                    <span>
                      <el-icon><el-icon-connection /></el-icon>
                      数据源导入
                      {activeEntity.value && (
                        <el-tag size="small" type="warning" style={{ marginLeft: '8px' }}>
                          导入到：{activeEntity.value.entityName}
                        </el-tag>
                      )}
                    </span>
                  </div>
                ),
                default: () => (
                  <DataSourceSelector onImport={handleImportFields} />
                ),
              }}
            </el-card>

            {/* 实体标签页 + 字段配置表格 */}
            <el-card class="field-design-card" shadow="never">
              {{
                header: () => (
                  <div class="field-design-card__header">
                    <span>
                      <el-icon><el-icon-grid /></el-icon>
                      字段配置
                    </span>
                  </div>
                ),
                default: () => (
                  <div class="field-design-card__body">
                    {/* 多实体标签页（仅 EXTENDED_SINGLE 时显示） */}
                    {entityTabs.value.length > 1 && (
                      <div class="entity-tabs">
                        {entityTabs.value.map((tab) => (
                          <div
                            key={tab.key}
                            class={[
                              'entity-tabs__item',
                              { 'entity-tabs__item--active': tab.index === activeEntityIndex.value },
                            ]}
                            onClick={() => handleTabChange(tab.index)}
                          >
                            <span class="entity-tabs__label">{tab.label}</span>
                            <span class="entity-tabs__count">
                              {designData.entities[tab.index]?.fields.length || 0}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 当前实体的字段配置表格 */}
                    {activeEntity.value && (
                      <FieldConfigTable
                        entityName={activeEntity.value.entityName}
                        fields={activeEntity.value.fields}
                        onUpdate:fields={(newFields: ModelField[]) =>
                          handleUpdateFields(activeEntityIndex.value, newFields)
                        }
                      />
                    )}
                  </div>
                ),
              }}
            </el-card>
          </div>
        ) : (
          <div class="model-design-empty">
            <el-empty description="未找到模型数据，请返回列表重新选择" />
          </div>
        )}
      </div>
    )
  },
})
