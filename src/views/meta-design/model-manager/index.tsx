import { defineComponent, ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import ModelFormDialog from './ModelFormDialog'
import type { ModelFormData } from './ModelFormDialog'
import { createEmptyModelForm } from './ModelFormDialog'
import { getModels, addModel, updateModel, deleteModel } from './storage'
import type { StoredModel } from './storage'
import './index.less'

/** 模型关系中文映射 */
const modelRelationMap: Record<string, string> = {
  LIST_EDIT: '列表视图',
  MASTER_DETAIL: '主子明细视图',
  TREE_TABLE: '树形列表视图',
  TREE_CARD: '树形卡片视图',
}

/** 实体结构中文映射 */
const entityStructureMap: Record<string, string> = {
  SINGLE: '标准单表',
  EXTENDED_SINGLE: '横向拓展单表',
  MASTER_CHILD: '一主多子',
  MASTER_CHILD_GRANDCHILD: '主子孙',
}

/** 模型状态中文映射 */
const statusMap: Record<string, { label: string; type: string }> = {
  draft: { label: '未发布', type: 'info' },
  published: { label: '已发布', type: 'success' },
}

export default defineComponent({
  name: 'ModelManagerPage',
  setup() {
    const router = useRouter()
    const loading = ref(false)
    const dialogVisible = ref(false)
    const dialogTitle = ref('快速向导')
    const currentModelData = ref<ModelFormData>(createEmptyModelForm())

    const queryParams = reactive({
      modelCode: '',
      displayName: '',
    })

    const tableData = ref<StoredModel[]>([])

    /** 从 localStorage 加载数据 */
    function loadData() {
      loading.value = true
      try {
        tableData.value = getModels()
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      loadData()
    })

    /** 查询（本地过滤） */
    function handleQuery() {
      loading.value = true
      setTimeout(() => {
        const all = getModels()
        const code = queryParams.modelCode.trim().toLowerCase()
        const name = queryParams.displayName.trim().toLowerCase()
        tableData.value = all.filter((item) => {
          if (code && !item.modelCode.toLowerCase().includes(code)) return false
          if (name && !item.displayName.toLowerCase().includes(name)) return false
          return true
        })
        loading.value = false
        ElMessage.success('查询成功')
      }, 300)
    }

    /** 重置 */
    function handleReset() {
      queryParams.modelCode = ''
      queryParams.displayName = ''
      loadData()
    }

    /** 新增 */
    function handleAdd() {
      dialogTitle.value = '快速向导'
      currentModelData.value = createEmptyModelForm()
      dialogVisible.value = true
    }

    /** 编辑 */
    function handleEdit(row: StoredModel) {
      dialogTitle.value = '快速向导'
      currentModelData.value = {
        id: row.id,
        modelCode: row.modelCode,
        displayName: row.displayName,
        module: row.module,
        groupName: row.groupName,
        modelRelation: row.modelRelation,
        entityStructure: row.entityStructure,
        extendedTableCount: row.extendedTableCount,
        childCount: row.childCount,
        grandchildCount: row.grandchildCount,
        features: [...row.features] as ModelFormData['features'],
      }
      dialogVisible.value = true
    }

    /** 跳转模型设计页面 */
    function handleDesign(row: StoredModel) {
      router.push(`/meta-design/model-design/${row.id}`)
    }

    /** 删除 */
    function handleDelete(row: StoredModel) {
      ElMessageBox.confirm(`确认删除模型「${row.displayName}」吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          deleteModel(row.id)
          loadData()
          ElMessage.success('删除成功')
        })
        .catch(() => {
          // 取消删除
        })
    }

    /** 弹窗表单提交回调 */
    function handleFormSubmit(formData: ModelFormData) {
      if (formData.id) {
        // 编辑模式：更新已有数据
        updateModel(formData.id, {
          modelCode: formData.modelCode,
          displayName: formData.displayName,
          module: formData.module,
          groupName: formData.groupName,
          modelRelation: formData.modelRelation,
          entityStructure: formData.entityStructure,
          extendedTableCount: formData.extendedTableCount,
          childCount: formData.childCount,
          grandchildCount: formData.grandchildCount,
          features: [...formData.features],
        })
        ElMessage.success('编辑成功')
      } else {
        // 新增模式：添加新数据
        addModel({
          modelCode: formData.modelCode,
          displayName: formData.displayName,
          module: formData.module,
          groupName: formData.groupName,
          modelRelation: formData.modelRelation,
          entityStructure: formData.entityStructure,
          extendedTableCount: formData.extendedTableCount,
          childCount: formData.childCount,
          grandchildCount: formData.grandchildCount,
          features: [...formData.features],
        })
        ElMessage.success('新增成功')
      }
      loadData()
    }

    /** 格式化时间显示 */
    function formatTime(iso: string) {
      if (!iso) return ''
      const d = new Date(iso)
      const pad = (n: number) => String(n).padStart(2, '0')
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
    }

    return () => (
      <div class="model-manager-page">
        {/* 搜索区域 */}
        <el-card class="search-card">
          <el-form inline>
            <el-form-item label="模型编码">
              <el-input
                v-model={queryParams.modelCode}
                placeholder="请输入模型编码"
                clearable
              />
            </el-form-item>
            <el-form-item label="显示名称">
              <el-input
                v-model={queryParams.displayName}
                placeholder="请输入显示名称"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" onClick={handleQuery}>
                查询
              </el-button>
              <el-button onClick={handleReset}>重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>

        {/* 表格区域 */}
        <el-card class="table-card">
          {{
            header: () => (
              <div class="card-header">
                <span>模型列表</span>
                <el-button type="primary" icon="Plus" onClick={handleAdd}>
                  新增模型
                </el-button>
              </div>
            ),
            default: () => (
              <el-table
                v-loading={loading.value}
                data={tableData.value}
                border
                stripe
                style={{ width: '100%' }}
              >
                <el-table-column prop="displayName" label="显示名称" min-width={120} />
                <el-table-column prop="modelCode" label="模型编码" min-width={140} />
                <el-table-column prop="module" label="所属模块" min-width={120} />
                <el-table-column prop="groupName" label="分组" min-width={100} />
                <el-table-column prop="modelRelation" label="模型关系" width={130} align="center">
                  {{
                    default: ({ row }: { row: StoredModel }) => (
                      <el-tag>{modelRelationMap[row.modelRelation] || row.modelRelation}</el-tag>
                    ),
                  }}
                </el-table-column>
                <el-table-column prop="entityStructure" label="实体结构" width={130} align="center">
                  {{
                    default: ({ row }: { row: StoredModel }) => (
                      <span>{entityStructureMap[row.entityStructure] || row.entityStructure}</span>
                    ),
                  }}
                </el-table-column>
                <el-table-column prop="status" label="状态" width={100} align="center">
                  {{
                    default: ({ row }: { row: StoredModel }) => {
                      const s = statusMap[row.status] || { label: row.status, type: 'info' }
                      return <el-tag type={s.type as 'info' | 'success'}>{s.label}</el-tag>
                    },
                  }}
                </el-table-column>
                <el-table-column prop="updateTime" label="更新时间" width={180}>
                  {{
                    default: ({ row }: { row: StoredModel }) => (
                      <span>{formatTime(row.updateTime)}</span>
                    ),
                  }}
                </el-table-column>
                <el-table-column label="操作" width={240} fixed="right" align="center">
                  {{
                    default: ({ row }: { row: StoredModel }) => (
                      <div class="action-buttons">
                        <el-button type="primary" link onClick={() => handleEdit(row)}>
                          编辑
                        </el-button>
                        <el-button type="warning" link onClick={() => handleDesign(row)}>
                          设计
                        </el-button>
                        <el-button type="danger" link onClick={() => handleDelete(row)}>
                          删除
                        </el-button>
                      </div>
                    ),
                  }}
                </el-table-column>
              </el-table>
            ),
          }}
        </el-card>

        {/* 新增/编辑弹窗（独立组件） */}
        <ModelFormDialog
          visible={dialogVisible.value}
          onUpdate:visible={(val: boolean) => { dialogVisible.value = val }}
          title={dialogTitle.value}
          modelData={currentModelData.value}
          onSubmit={handleFormSubmit}
        />
      </div>
    )
  },
})
