import { defineComponent, reactive, watch, computed } from 'vue'
import type { PropType } from 'vue'
import { ElMessage } from 'element-plus'
import './ModelFormDialog.less'

// 导入模型关系缩略图
import rowEditImg from '../images/行编辑页面.png'
import masterDetailImg from '../images/主从页面.png'
import treeTableImg from '../images/树表页面.png'
import treeCardImg from '../images/树卡页面.png'

/** 模型关系选项 */
export type ModelRelation = 'row-edit' | 'master-detail' | 'tree-table' | 'tree-card'

/** 实体结构选项 */
export type EntityStructure = 'single' | 'master-child' | 'master-child-grandchild'

/** 元数据特性选项 */
export type MetadataFeature =
  | 'tree'
  | 'archive'
  | 'document'
  | 'approval'
  | 'business-flow'
  | 'pull-order'
  | 'cloud-native'

/** 模型表单数据 */
export interface ModelFormData {
  id: string
  /** 模型编码 */
  modelCode: string
  /** 显示名称 */
  displayName: string
  /** 所属模块 */
  module: string
  /** 名称空间 */
  namespace: string
  /** 模型关系 */
  modelRelation: ModelRelation
  /** 实体结构 */
  entityStructure: EntityStructure
  /** 子实体数量 */
  childCount: number
  /** 孙实体数量 */
  grandchildCount: number
  /** 元数据特性列表 */
  features: MetadataFeature[]
}

/** 创建空的表单数据 */
export function createEmptyModelForm(): ModelFormData {
  return {
    id: '',
    modelCode: '',
    displayName: '',
    module: '',
    namespace: '',
    modelRelation: 'row-edit',
    entityStructure: 'single',
    childCount: 0,
    grandchildCount: 0,
    features: [],
  }
}

/** 模型关系选项配置 */
const modelRelationOptions: { value: ModelRelation; label: string; image: string }[] = [
  { value: 'row-edit', label: '行编辑页面', image: rowEditImg },
  { value: 'master-detail', label: '主从页面', image: masterDetailImg },
  { value: 'tree-table', label: '树表页面', image: treeTableImg },
  { value: 'tree-card', label: '树卡页面', image: treeCardImg },
]

/**
 * 根据模型关系确定可用的实体结构选项
 * - 行编辑: 仅 single
 * - 主从: single, master-child, master-child-grandchild
 * - 树表/树卡: single, master-child
 */
function getAvailableStructures(modelRelation: ModelRelation): EntityStructure[] {
  switch (modelRelation) {
    case 'row-edit':
      return ['single']
    case 'master-detail':
      return ['single', 'master-child', 'master-child-grandchild']
    case 'tree-table':
    case 'tree-card':
      return ['single', 'master-child']
    default:
      return ['single']
  }
}

/** 实体结构选项配置 */
const entityStructureConfig: Record<EntityStructure, { label: string; tag: string; showChildInput: boolean; showGrandchildInput: boolean }> = {
  single: {
    label: '单主结构元数据',
    tag: '一主',
    showChildInput: false,
    showGrandchildInput: false,
  },
  'master-child': {
    label: '主子结构元数据',
    tag: '一主',
    showChildInput: true,
    showGrandchildInput: false,
  },
  'master-child-grandchild': {
    label: '主子孙结构元数据',
    tag: '一主',
    showChildInput: true,
    showGrandchildInput: true,
  },
}

/** 元数据特性选项配置 */
const featureOptions: { value: MetadataFeature; label: string }[] = [
  { value: 'tree', label: '树结构特性' },
  { value: 'archive', label: '档案特性' },
  { value: 'document', label: '单据特性' },
  { value: 'approval', label: '审批流特性' },
  { value: 'business-flow', label: '业务流特性' },
  { value: 'pull-order', label: '拉单特性' },
  { value: 'cloud-native', label: '云原生特性' },
]

const ModelFormDialog = defineComponent({
  name: 'ModelFormDialog',
  props: {
    /** 是否显示弹窗 */
    visible: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    /** 弹窗标题 */
    title: {
      type: String as PropType<string>,
      default: '快速向导',
    },
    /** 表单数据（编辑时传入已有数据） */
    modelData: {
      type: Object as PropType<ModelFormData>,
      default: () => createEmptyModelForm(),
    },
  },
  emits: {
    /** 更新 visible 状态 */
    'update:visible': (_value: boolean) => true,
    /** 提交表单 */
    submit: (_data: ModelFormData) => true,
  },
  setup(props, { emit }) {
    const formModel = reactive<ModelFormData>(createEmptyModelForm())

    /** 当前模型关系下可用的实体结构选项 */
    const availableStructures = computed(() => getAvailableStructures(formModel.modelRelation))

    /** 监听 modelData 变化，同步到内部表单 */
    watch(
      () => props.modelData,
      (newVal) => {
        Object.assign(formModel, {
          ...createEmptyModelForm(),
          ...newVal,
          features: [...(newVal.features || [])],
        })
      },
      { immediate: true, deep: true },
    )

    /** 弹窗关闭时重置表单 */
    watch(
      () => props.visible,
      (visible) => {
        if (!visible) {
          Object.assign(formModel, createEmptyModelForm())
        }
      },
    )

    /** 模型关系切换时，自动修正实体结构选项 */
    watch(
      () => formModel.modelRelation,
      () => {
        const available = availableStructures.value
        if (!available.includes(formModel.entityStructure)) {
          formModel.entityStructure = available[0]
        }
        // 重置子/孙数量
        if (formModel.entityStructure === 'single') {
          formModel.childCount = 0
          formModel.grandchildCount = 0
        } else if (formModel.entityStructure === 'master-child') {
          formModel.grandchildCount = 0
        }
      },
    )

    /** 实体结构切换时，重置不需要的字段 */
    watch(
      () => formModel.entityStructure,
      (newVal) => {
        if (newVal === 'single') {
          formModel.childCount = 0
          formModel.grandchildCount = 0
        } else if (newVal === 'master-child') {
          formModel.grandchildCount = 0
        }
      },
    )

    /** 切换元数据特性 */
    function toggleFeature(feature: MetadataFeature) {
      const idx = formModel.features.indexOf(feature)
      if (idx === -1) {
        formModel.features.push(feature)
      } else {
        formModel.features.splice(idx, 1)
      }
    }

    /** 预览区显示名称 */
    const previewDisplayName = computed(() => formModel.displayName || '测试名称')
    const previewName = computed(() => formModel.modelCode || 'receive_demo')

    /** 表单校验并提交 */
    function handleSubmit() {
      if (!formModel.modelCode.trim()) {
        ElMessage.warning('请输入模型编码')
        return
      }
      if (!formModel.displayName.trim()) {
        ElMessage.warning('请输入显示名称')
        return
      }
      if (!formModel.module.trim()) {
        ElMessage.warning('请输入所属模块')
        return
      }
      if (!formModel.namespace.trim()) {
        ElMessage.warning('请输入名称空间')
        return
      }
      emit('submit', { ...formModel, features: [...formModel.features] })
      handleClose()
    }

    /** 关闭弹窗 */
    function handleClose() {
      emit('update:visible', false)
    }

    return () => (
      <el-dialog
        modelValue={props.visible}
        title={props.title}
        width="960px"
        destroy-on-close
        onClose={handleClose}
        class="model-form-dialog"
      >
        {{
          default: () => (
            <div class="model-form-layout">
              {/* ========== 左侧预览区 ========== */}
              <div class="model-form-layout__preview">
                {/* 顶部标签栏 */}
                <div class="preview-tags">
                  <span class="preview-tag preview-tag--draft">未发布</span>
                  {/* <span class="preview-tag preview-tag--bmf">BMF</span> */}
                </div>

                {/* 预览卡片 */}
                <div class="preview-card">
                  <div class="preview-card__icon">
                    <span class="preview-card__icon-text">测</span>
                  </div>
                  <div class="preview-card__title">
                    <span class="preview-card__display-name">{previewDisplayName.value}</span>
                    <span class="preview-card__name">({previewName.value})</span>
                  </div>

                  <div class="preview-card__attrs">
                    <div class="preview-attr">
                      <span class="preview-attr__label">所属模块：</span>
                      <span class="preview-attr__value">{formModel.module || '数据应用基础'}</span>
                    </div>
                    <div class="preview-attr">
                      <span class="preview-attr__label">名称空间：</span>
                      <span class="preview-attr__value">{formModel.namespace || 'nsdemo'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========== 右侧表单区 ========== */}
              <div class="model-form-layout__form">
                {/* 分组1：基础信息 */}
                <div class="form-section">
                  <div class="form-section__title">基础信息</div>
                  <el-form label-width="100px" class="form-section__body">
                    <el-form-item label="模型编码" required>
                      <el-input
                        v-model={formModel.modelCode}
                        placeholder="请输入模型编码，如 receive_demo"
                        maxlength={100}
                      />
                    </el-form-item>
                    <el-form-item label="显示名称" required>
                      <el-input
                        v-model={formModel.displayName}
                        placeholder="请输入显示名称"
                        maxlength={50}
                      />
                    </el-form-item>
                    <el-form-item label="所属模块" required>
                      <el-input
                        v-model={formModel.module}
                        placeholder="请输入或选择所属模块"
                        maxlength={100}
                      >
                        {{
                          suffix: () => <el-icon class="el-input__icon"><span>🔍</span></el-icon>,
                        }}
                      </el-input>
                    </el-form-item>
                    <el-form-item label="名称空间" required>
                      <el-input
                        v-model={formModel.namespace}
                        placeholder="请输入名称空间"
                        maxlength={100}
                      />
                    </el-form-item>
                  </el-form>
                </div>

                {/* 分组2：模型关系 */}
                <div class="form-section">
                  <div class="form-section__title">模型关系</div>
                  <div class="form-section__body">
                    <div class="model-relation-group">
                      {modelRelationOptions.map((opt) => (
                        <div
                          key={opt.value}
                          class={[
                            'model-relation-item',
                            formModel.modelRelation === opt.value && 'model-relation-item--active',
                          ]}
                          onClick={() => (formModel.modelRelation = opt.value)}
                        >
                          <div class="model-relation-item__thumb">
                            <img
                              src={opt.image}
                              alt={opt.label}
                              class="model-relation-item__image"
                            />
                          </div>
                          <div class="model-relation-item__label">{opt.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 分组3：模型信息设置（联动模型关系） */}
                <div class="form-section">
                  <div class="form-section__title">模型信息设置</div>
                  <div class="form-section__body">
                    <div class="entity-structure-group">
                      {availableStructures.value.map((structKey) => {
                        const config = entityStructureConfig[structKey]
                        const isSelected = formModel.entityStructure === structKey
                        return (
                          <div
                            key={structKey}
                            class={[
                              'entity-structure-item',
                              isSelected && 'entity-structure-item--active',
                            ]}
                            onClick={() => (formModel.entityStructure = structKey)}
                          >
                            <div class="entity-structure-item__content">
                              <el-checkbox
                                modelValue={isSelected}
                                class="entity-structure-item__checkbox"
                              />
                              <span class="entity-structure-item__label">{config.label}</span>
                              <span class="entity-structure-item__tag">{config.tag}</span>

                              {/* 子实体数量输入框 */}
                              {config.showChildInput && (
                                <>
                                  <el-input-number
                                    v-model={formModel.childCount}
                                    min={0}
                                    max={99}
                                    size="small"
                                    class="entity-structure-item__input"
                                    disabled={!isSelected}
                                    controls={false}
                                    placeholder="数量"
                                  />
                                  <span class="entity-structure-item__tag">子</span>
                                </>
                              )}

                              {/* 孙实体数量输入框 */}
                              {config.showGrandchildInput && (
                                <>
                                  <el-input-number
                                    v-model={formModel.grandchildCount}
                                    min={0}
                                    max={99}
                                    size="small"
                                    class="entity-structure-item__input"
                                    disabled={!isSelected}
                                    controls={false}
                                    placeholder="数量"
                                  />
                                  <span class="entity-structure-item__tag">孙</span>
                                </>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* 分组4：元数据特性设置（暂时隐藏） */}
                {false && (
                <div class="form-section">
                  <div class="form-section__title">元数据特性设置</div>
                  <div class="form-section__body">
                    <div class="feature-group">
                      {featureOptions.map((opt) => (
                        <div
                          key={opt.value}
                          class={[
                            'feature-item',
                            formModel.features.includes(opt.value) && 'feature-item--active',
                          ]}
                          onClick={() => toggleFeature(opt.value)}
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          ),
          footer: () => (
            <div class="dialog-footer">
              <el-button onClick={handleClose}>取消</el-button>
              <el-button type="primary" onClick={handleSubmit}>
                确定并设计
              </el-button>
            </div>
          ),
        }}
      </el-dialog>
    )
  },
})

export default ModelFormDialog
