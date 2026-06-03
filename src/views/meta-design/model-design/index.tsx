/**
 * ModelDesignPage — 模型设计页面主体
 *
 * 功能：
 * - 顶部：返回按钮 + 模型标题
 * - 模型基本信息卡片（可折叠）
 * - 数据源选择器（导入字段到当前激活的实体）
 * - 动态字段配置表格（支持 SINGLE / EXTENDED_SINGLE / MASTER_CHILD / MASTER_CHILD_GRANDCHILD）
 * - 实体关联关系配置（多实体时显示）
 * - 保存按钮（持久化到 localStorage）
 */
import { defineComponent, onMounted, ref, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getModels } from '../model-manager/storage'
import { getModelDesign, saveModelDesign } from '../model-manager/storage'
import type { StoredModel } from '../model-manager/storage'
import type { ModelField, EntityFieldConfig, ModelDesignData, EntityRelation, EntityType } from './types'
import { getEntityConfigs } from './types'
import DataSourceSelector from './DataSourceSelector'
import FieldConfigTable from './FieldConfigTable'
import EntityRelationConfig from './EntityRelationConfig'
import './index.less'

/** 实体标签页分组类型 */
interface EntityTabGroup {
  label: string
  entityType: EntityType
  tabs: EntityTabItem[]
}

/** 实体标签页项 */
interface EntityTabItem {
  key: string
  label: string
  index: number
  entityType: EntityType
}

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
      relations: [],
      updateTime: '',
    })

    /** 当前激活的实体索引（用于导入字段的目标） */
    const activeEntityIndex = ref(0)

    /** 实体标签页列表 */
    const entityTabs = computed<EntityTabItem[]>(() =>
      designData.entities.map((e, i) => ({
        key: e.entityKey,
        label: e.entityName,
        index: i,
        entityType: e.entityType,
      })),
    )

    /** 实体标签页分组（用于 MASTER_CHILD / MASTER_CHILD_GRANDCHILD 的分组展示） */
    const entityTabGroups = computed<EntityTabGroup[]>(() => {
      const structure = modelData.value?.entityStructure || ''
      // EXTENDED_SINGLE 和 SINGLE 不分组
      if (structure === 'SINGLE' || structure === 'EXTENDED_SINGLE') {
        return []
      }

      const groups: EntityTabGroup[] = []
      const typeLabels: Record<EntityType, string> = {
        main: '主表',
        child: '子表',
        grandchild: '孙表',
      }

      // 按 entityType 分组
      const groupMap = new Map<EntityType, EntityTabItem[]>()
      for (const tab of entityTabs.value) {
        const items = groupMap.get(tab.entityType) || []
        items.push(tab)
        groupMap.set(tab.entityType, items)
      }

      // 按顺序输出分组：main → child → grandchild
      const order: EntityType[] = ['main', 'child', 'grandchild']
      for (const type of order) {
        const items = groupMap.get(type)
        if (items && items.length > 0) {
          groups.push({
            label: typeLabels[type],
            entityType: type,
            tabs: items,
          })
        }
      }

      return groups
    })

    /** 是否使用分组标签页展示 */
    const useGroupedTabs = computed(() => entityTabGroups.value.length > 0)

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
        // 兼容旧数据：补充 entityType 和 parentEntityKey
        for (const entity of designData.entities) {
          if (!entity.entityType) {
            entity.entityType = 'main'
          }
          if (!entity.parentEntityKey) {
            entity.parentEntityKey = ''
          }
        }
      } else {
        // 首次进入：根据模型结构生成实体配置
        designData.entities = getEntityConfigs({
          entityStructure: found.entityStructure,
          extendedTableCount: found.extendedTableCount,
          childCount: found.childCount || 0,
          grandchildCount: found.grandchildCount || 0,
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

    /** 更新关联关系 */
    function handleUpdateRelations(newRelations: EntityRelation[]) {
      designData.relations = newRelations
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
                    {/* 多实体标签页 */}
                    {entityTabs.value.length > 1 && !useGroupedTabs.value && (
                      /* 平铺标签页（EXTENDED_SINGLE） */
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

                    {useGroupedTabs.value && (
                      /* 分组标签页（MASTER_CHILD / MASTER_CHILD_GRANDCHILD） */
                      <div class="entity-tabs entity-tabs--grouped">
                        {entityTabGroups.value.map((group, gIndex) => (
                          <div key={group.entityType} class="entity-tabs__group">
                            {/* 组标题 */}
                            <div class="entity-tabs__group-label">{group.label}</div>
                            {/* 组内标签 */}
                            <div class="entity-tabs__group-items">
                              {group.tabs.map((tab) => (
                                <div
                                  key={tab.key}
                                  class={[
                                    'entity-tabs__item',
                                    `entity-tabs__item--${tab.entityType}`,
                                    { 'entity-tabs__item--active': tab.index === activeEntityIndex.value },
                                  ]}
                                  onClick={() => handleTabChange(tab.index)}
                                >
                                  {/* 子表/孙表层级圆点 */}
                                  {tab.entityType !== 'main' && (
                                    <span class={`entity-tabs__dot entity-tabs__dot--${tab.entityType}`} />
                                  )}
                                  <span class="entity-tabs__label">{tab.label}</span>
                                  <span class="entity-tabs__count">
                                    {designData.entities[tab.index]?.fields.length || 0}
                                  </span>
                                </div>
                              ))}
                            </div>
                            {/* 组间分隔线（非最后一组） */}
                            {gIndex < entityTabGroups.value.length - 1 && (
                              <div class="entity-tabs__divider" />
                            )}
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

            {/* 实体关联关系配置（仅多实体时显示） */}
            {entityTabs.value.length > 1 && (
              <el-card class="relation-config-card" shadow="never">
                {{
                  header: () => (
                    <div class="relation-config-card__header">
                      <span>
                        <el-icon><el-icon-link /></el-icon>
                        实体关联关系
                      </span>
                      <el-tag size="small" type="info">
                        {designData.relations.length} 条关联
                      </el-tag>
                    </div>
                  ),
                  default: () => (
                    <EntityRelationConfig
                      entities={designData.entities}
                      relations={designData.relations}
                      onUpdate:relations={handleUpdateRelations}
                    />
                  ),
                }}
              </el-card>
            )}
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
