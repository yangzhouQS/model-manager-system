import { defineComponent, ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import ModelFormDialog from './ModelFormDialog'
import type { ModelFormData } from './ModelFormDialog'
import { createEmptyModelForm } from './ModelFormDialog'
import './index.less'

/** 模型数据项（表格展示用） */
interface ModelItem {
  id: string
  modelCode: string
  displayName: string
  module: string
  groupName: string
  modelRelation: string
  entityStructure: string
  extendedTableCount: number
  childCount: number
  grandchildCount: number
  features: string[]
  createTime: string
  updateTime: string
}

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

export default defineComponent({
  name: 'ModelManagerPage',
  setup() {
    const loading = ref(false)
    const dialogVisible = ref(false)
    const dialogTitle = ref('快速向导')
    const currentModelData = ref<ModelFormData>(createEmptyModelForm())

    const queryParams = reactive({
      modelCode: '',
      displayName: '',
    })

    const tableData = ref<ModelItem[]>([
      {
        id: '1',
        modelCode: 'receive_demo',
        displayName: '测试名称',
        module: '入库登记',
        groupName: '默认分组',
        modelRelation: 'LIST_EDIT',
        entityStructure: 'SINGLE',
        extendedTableCount: 0,
        childCount: 0,
        grandchildCount: 0,
        features: [],
        createTime: '2026-01-01 00:00:00',
        updateTime: '2026-01-01 00:00:00',
      },
      {
        id: '2',
        modelCode: 'user_model',
        displayName: '用户模型',
        module: '采购计划',
        groupName: '计划管理',
        modelRelation: 'MASTER_DETAIL',
        entityStructure: 'MASTER_CHILD',
        extendedTableCount: 0,
        childCount: 3,
        grandchildCount: 0,
        features: ['approval'],
        createTime: '2026-02-01 00:00:00',
        updateTime: '2026-02-01 00:00:00',
      },
      {
        id: '3',
        modelCode: 'order_model',
        displayName: '订单模型',
        module: '出库登记',
        groupName: '现场管理',
        modelRelation: 'TREE_TABLE',
        entityStructure: 'MASTER_CHILD',
        extendedTableCount: 0,
        childCount: 2,
        grandchildCount: 0,
        features: ['document', 'business-flow'],
        createTime: '2026-03-01 00:00:00',
        updateTime: '2026-03-01 00:00:00',
      },
    ])

    /** 查询 */
    function handleQuery() {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        ElMessage.success('查询成功')
      }, 500)
    }

    /** 重置 */
    function handleReset() {
      queryParams.modelCode = ''
      queryParams.displayName = ''
      handleQuery()
    }

    /** 新增 */
    function handleAdd() {
      dialogTitle.value = '快速向导'
      currentModelData.value = createEmptyModelForm()
      dialogVisible.value = true
    }

    /** 编辑 */
    function handleEdit(row: ModelItem) {
      dialogTitle.value = '快速向导'
      currentModelData.value = {
        id: row.id,
        modelCode: row.modelCode,
        displayName: row.displayName,
        module: row.module,
        groupName: row.groupName,
        modelRelation: row.modelRelation as ModelFormData['modelRelation'],
        entityStructure: row.entityStructure as ModelFormData['entityStructure'],
        extendedTableCount: row.extendedTableCount,
        childCount: row.childCount,
        grandchildCount: row.grandchildCount,
        features: [...row.features] as ModelFormData['features'],
      }
      dialogVisible.value = true
    }

    /** 删除 */
    function handleDelete(row: ModelItem) {
      ElMessageBox.confirm(`确认删除模型「${row.displayName}」吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          tableData.value = tableData.value.filter((item) => item.id !== row.id)
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
        const index = tableData.value.findIndex((item) => item.id === formData.id)
        if (index !== -1) {
          tableData.value[index] = {
            ...tableData.value[index],
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
            updateTime: new Date().toLocaleString(),
          }
        }
        ElMessage.success('编辑成功')
      } else {
        // 新增模式：添加新数据
        tableData.value.push({
          id: String(Date.now()),
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
          createTime: new Date().toLocaleString(),
          updateTime: new Date().toLocaleString(),
        })
        ElMessage.success('新增成功')
      }
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
                    default: ({ row }: { row: ModelItem }) => (
                      <el-tag>{modelRelationMap[row.modelRelation] || row.modelRelation}</el-tag>
                    ),
                  }}
                </el-table-column>
                <el-table-column prop="entityStructure" label="实体结构" width={130} align="center">
                  {{
                    default: ({ row }: { row: ModelItem }) => (
                      <span>{entityStructureMap[row.entityStructure] || row.entityStructure}</span>
                    ),
                  }}
                </el-table-column>
                <el-table-column prop="createTime" label="创建时间" width={180} />
                <el-table-column label="操作" width={180} fixed="right" align="center">
                  {{
                    default: ({ row }: { row: ModelItem }) => (
                      <div class="action-buttons">
                        <el-button type="primary" link onClick={() => handleEdit(row)}>
                          编辑
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
          v-model={dialogVisible.value}
          title={dialogTitle.value}
          modelData={currentModelData.value}
          onSubmit={handleFormSubmit}
        />
      </div>
    )
  },
})
