import { defineComponent, reactive, watch } from 'vue'
import type { PropType } from 'vue'
import { ElMessage } from 'element-plus'
import './ModelFormDialog.less'

/** 模型表单数据 */
export interface ModelFormData {
  id: string
  name: string
  code: string
  tableName: string
  description: string
  status: '0' | '1'
}

/** 创建空的表单数据 */
export function createEmptyModelForm(): ModelFormData {
  return {
    id: '',
    name: '',
    code: '',
    tableName: '',
    description: '',
    status: '1',
  }
}

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
      default: '新增模型',
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

    /** 监听 modelData 变化，同步到内部表单 */
    watch(
      () => props.modelData,
      (newVal) => {
        Object.assign(formModel, newVal)
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

    /** 表单校验并提交 */
    function handleSubmit() {
      if (!formModel.name.trim()) {
        ElMessage.warning('请输入模型名称')
        return
      }
      if (!formModel.code.trim()) {
        ElMessage.warning('请输入模型编码')
        return
      }
      emit('submit', { ...formModel })
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
        width="600px"
        destroy-on-close
        onClose={handleClose}
      >
        <el-form label-width="100px" class="model-form">
          <el-form-item label="模型名称" required>
            <el-input
              v-model={formModel.name}
              placeholder="请输入模型名称"
              maxlength={50}
              show-word-limit
            />
          </el-form-item>
          <el-form-item label="模型编码" required>
            <el-input
              v-model={formModel.code}
              placeholder="请输入模型编码（英文+下划线）"
              maxlength={100}
              show-word-limit
              disabled={!!props.modelData?.id}
            />
          </el-form-item>
          <el-form-item label="关联表名">
            <el-input
              v-model={formModel.tableName}
              placeholder="请输入关联数据库表名"
              maxlength={100}
              show-word-limit
            />
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-model={formModel.description}
              type="textarea"
              rows={3}
              placeholder="请输入模型描述"
              maxlength={200}
              show-word-limit
            />
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model={formModel.status}>
              <el-radio value="1">启用</el-radio>
              <el-radio value="0">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        {{
          footer: () => (
            <div class="dialog-footer">
              <el-button onClick={handleClose}>取消</el-button>
              <el-button type="primary" onClick={handleSubmit}>
                确定
              </el-button>
            </div>
          ),
        }}
      </el-dialog>
    )
  },
})

export default ModelFormDialog
