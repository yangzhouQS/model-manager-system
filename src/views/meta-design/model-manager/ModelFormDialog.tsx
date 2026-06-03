import { defineComponent, reactive, watch, computed, ref } from 'vue'
import type { PropType } from 'vue'
import { ElMessage } from 'element-plus'
import './ModelFormDialog.less'

// 导入模型关系缩略图
import listEditImg from '../images/行编辑页面.png'
import masterDetailImg from '../images/主从页面.png'
import treeTableImg from '../images/树表页面.png'
import treeCardImg from '../images/树卡页面.png'

/** 模型关系选项 */
export type ModelRelation = 'LIST_EDIT' | 'MASTER_DETAIL' | 'TREE_TABLE' | 'TREE_CARD'

/** 实体结构选项 */
export type EntityStructure = 'SINGLE' | 'EXTENDED_SINGLE' | 'MASTER_CHILD' | 'MASTER_CHILD_GRANDCHILD'

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
  /** 分组 */
  groupName: string
  /** 模型关系 */
  modelRelation: ModelRelation
  /** 实体结构 */
  entityStructure: EntityStructure
  /** 横向拓展单表数量 */
  extendedTableCount: number
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
    groupName: '默认分组',
    modelRelation: 'LIST_EDIT',
    entityStructure: 'SINGLE',
    extendedTableCount: 0,
    childCount: 0,
    grandchildCount: 0,
    features: [],
  }
}

/** 所属模块选项 */
const moduleOptions = [
  { value: '入库登记', label: '入库登记' },
  { value: '出库登记', label: '出库登记' },
  { value: '采购计划', label: '采购计划' },
  { value: '供应计划', label: '供应计划' },
  { value: '库存管理模块', label: '库存管理模块' },
]

/** 分组选项 */
const groupOptions = [
  { value: '计划管理', label: '计划管理' },
  { value: '现场管理', label: '现场管理' },
  { value: '账务', label: '账务' },
  { value: '核算', label: '核算' },
  { value: '默认分组', label: '默认分组' },
]

/** 模型关系选项配置 */
const modelRelationOptions: { value: ModelRelation; label: string; image: string; description: string }[] = [
  {
    value: 'LIST_EDIT',
    label: '列表视图',
    image: listEditImg,
    description: '表格直接行内编辑，多用于基础资料维护',
  },
  {
    value: 'MASTER_DETAIL',
    label: '主子明细视图',
    image: masterDetailImg,
    description: '上方主表单、下方明细表格，适用于订单、入库等单据业务',
  },
  {
    value: 'TREE_TABLE',
    label: '树形列表视图',
    image: treeTableImg,
    description: '左侧分类树，右侧数据列表，按树形维度筛选数据',
  },
  {
    value: 'TREE_CARD',
    label: '树形卡片视图',
    image: treeCardImg,
    description: '左侧树形导航，右侧卡片式表单，多用于档案查看维护',
  },
]

/**
 * 根据模型关系确定可用的实体结构选项
 * - LIST_EDIT: 标准单表、横向拓展单表
 * - MASTER_DETAIL: 全四种
 * - TREE_TABLE / TREE_CARD: 标准单表、横向拓展单表、一主多子
 */
function getAvailableStructures(modelRelation: ModelRelation): EntityStructure[] {
  switch (modelRelation) {
    case 'LIST_EDIT':
      return ['SINGLE', 'EXTENDED_SINGLE']
    case 'MASTER_DETAIL':
      return ['SINGLE', 'EXTENDED_SINGLE', 'MASTER_CHILD', 'MASTER_CHILD_GRANDCHILD']
    case 'TREE_TABLE':
    case 'TREE_CARD':
      return ['SINGLE', 'EXTENDED_SINGLE', 'MASTER_CHILD']
    default:
      return ['SINGLE']
  }
}

/** 实体结构选项配置 */
const entityStructureConfig: Record<EntityStructure, { label: string; tag: string; showExtendedInput: boolean; showChildInput: boolean; showGrandchildInput: boolean }> = {
  SINGLE: {
    label: '标准单表',
    tag: '单表',
    showExtendedInput: false,
    showChildInput: false,
    showGrandchildInput: false,
  },
  EXTENDED_SINGLE: {
    label: '横向拓展单表',
    tag: '拓展',
    showExtendedInput: true,
    showChildInput: false,
    showGrandchildInput: false,
  },
  MASTER_CHILD: {
    label: '一主多子',
    tag: '一主',
    showExtendedInput: false,
    showChildInput: true,
    showGrandchildInput: false,
  },
  MASTER_CHILD_GRANDCHILD: {
    label: '主子孙',
    tag: '一主',
    showExtendedInput: false,
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
    const modelCodeError = ref('')

    /** 校验模型编码 */
    function validateModelCode() {
      const val = formModel.modelCode
      if (!val.trim()) {
        modelCodeError.value = '请输入模型编码'
      } else if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(val)) {
        modelCodeError.value = '由英文、数字和下划线组成，且以英文开头'
      } else {
        modelCodeError.value = ''
      }
    }

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
          modelCodeError.value = ''
        }
      },
    )

    /** 监听模型编码输入实时校验 */
    watch(() => formModel.modelCode, validateModelCode)

    /** 监听模型编码输入实时校验 */
    watch(() => formModel.modelCode, validateModelCode)

    /** 模型关系切换时，自动修正实体结构选项 */
    watch(
      () => formModel.modelRelation,
      () => {
        const available = availableStructures.value
        if (!available.includes(formModel.entityStructure)) {
          formModel.entityStructure = available[0]
        }
        // 重置子/孙数量
        resetChildCounts()
      },
    )

    /** 实体结构切换时，重置不需要的字段 */
    watch(
      () => formModel.entityStructure,
      () => {
        resetChildCounts()
      },
    )

    /** 根据当前实体结构重置子/孙数量 */
    function resetChildCounts() {
      const config = entityStructureConfig[formModel.entityStructure]
      if (!config.showExtendedInput) {
        formModel.extendedTableCount = 0
      }
      if (!config.showChildInput) {
        formModel.childCount = 0
      }
      if (!config.showGrandchildInput) {
        formModel.grandchildCount = 0
      }
    }

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
    const previewDisplayName = computed(() => formModel.displayName || '显示名称')
    const previewName = computed(() => formModel.modelCode || '模型编码')

    /** 当前选中的模型关系选项（用于显示描述） */
    const currentRelationOption = computed(() =>
      modelRelationOptions.find((opt) => opt.value === formModel.modelRelation),
    )

    /** 表单校验并提交 */
    function handleSubmit() {
      if (!formModel.modelCode.trim()) {
        ElMessage.warning('请输入模型编码')
        return
      }
      if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(formModel.modelCode)) {
        ElMessage.warning('模型编码由英文、数字和下划线组成，且以英文开头')
        return
      }
      if (!formModel.displayName.trim()) {
        ElMessage.warning('请输入显示名称')
        return
      }
      if (!formModel.module) {
        ElMessage.warning('请选择所属模块')
        return
      }
      if (!formModel.groupName.trim()) {
        ElMessage.warning('请输入分组')
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
                </div>

                {/* 预览卡片 */}
                <div class="preview-card">
                  <div class="preview-card__icon">
                    <span class="preview-card__icon-text">{formModel.displayName?.charAt(0) || '显'}</span>
                  </div>
                  <div class="preview-card__title">
                    <span class="preview-card__display-name">{previewDisplayName.value}</span>
                    <span class="preview-card__name">({previewName.value})</span>
                  </div>

                  <div class="preview-card__attrs">
                    <div class="preview-attr">
                      <span class="preview-attr__label">所属模块：</span>
                      <span class="preview-attr__value">{formModel.module || '库存管理模块'}</span>
                    </div>
                    <div class="preview-attr">
                      <span class="preview-attr__label">分组：</span>
                      <span class="preview-attr__value">{formModel.groupName || '默认分组'}</span>
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
                    <el-form-item label="模型编码" required error={modelCodeError.value}>
                      <el-input
                        v-model={formModel.modelCode}
                        placeholder="请输入模型编码，如 receive_demo"
                        maxlength={100}
                        onBlur={validateModelCode}
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
                      <el-select
                        v-model={formModel.module}
                        placeholder="请选择所属模块"
                        style={{ width: '100%' }}
                      >
                        {moduleOptions.map((opt) => (
                          <el-option key={opt.value} label={opt.label} value={opt.value} />
                        ))}
                      </el-select>
                    </el-form-item>
                    <el-form-item label="分组" required>
                      <el-select
                        v-model={formModel.groupName}
                        placeholder="请选择分组"
                        style={{ width: '100%' }}
                      >
                        {groupOptions.map((opt) => (
                          <el-option key={opt.value} label={opt.label} value={opt.value} />
                        ))}
                      </el-select>
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
                    {/* 场景释义描述 */}
                    {currentRelationOption.value && (
                      <div class="model-relation-description">
                        {currentRelationOption.value.description}
                      </div>
                    )}
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

                              {/* 横向拓展单表数量输入框 */}
                              {config.showExtendedInput && (
                                <>
                                  <el-input-number
                                    v-model={formModel.extendedTableCount}
                                    min={0}
                                    max={99}
                                    size="small"
                                    class="entity-structure-item__input"
                                    disabled={!isSelected}
                                    controls={false}
                                    placeholder="数量"
                                  />
                                  <span class="entity-structure-item__tag">表</span>
                                </>
                              )}

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
