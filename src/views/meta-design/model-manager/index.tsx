import { defineComponent, ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import ModelFormDialog from './ModelFormDialog'
import type { ModelFormData } from './ModelFormDialog'
import { createEmptyModelForm } from './ModelFormDialog'
import './index.less'

/** 模型数据项 */
interface ModelItem {
  id: string
  name: string
  code: string
  tableName: string
  description: string
  status: '0' | '1'
  createTime: string
  updateTime: string
}

export default defineComponent({
  name: 'ModelManagerPage',
  setup() {
    const loading = ref(false)
    const dialogVisible = ref(false)
    const dialogTitle = ref('新增模型')
    const currentModelData = ref<ModelFormData>(createEmptyModelForm())

    const queryParams = reactive({
      name: '',
      code: '',
      status: '',
    })

    const tableData = ref<ModelItem[]>([
      {
        id: '1',
        name: '用户模型',
        code: 'user_model',
        tableName: 'sys_user',
        description: '系统用户数据模型',
        status: '1',
        createTime: '2026-01-01 00:00:00',
        updateTime: '2026-01-01 00:00:00',
      },
      {
        id: '2',
        name: '角色模型',
        code: 'role_model',
        tableName: 'sys_role',
        description: '系统角色数据模型',
        status: '1',
        createTime: '2026-01-02 00:00:00',
        updateTime: '2026-01-02 00:00:00',
      },
      {
        id: '3',
        name: '菜单模型',
        code: 'menu_model',
        tableName: 'sys_menu',
        description: '系统菜单数据模型',
        status: '0',
        createTime: '2026-01-03 00:00:00',
        updateTime: '2026-01-03 00:00:00',
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
      queryParams.name = ''
      queryParams.code = ''
      queryParams.status = ''
      handleQuery()
    }

    /** 新增 */
    function handleAdd() {
      dialogTitle.value = '新增模型'
      currentModelData.value = createEmptyModelForm()
      dialogVisible.value = true
    }

    /** 编辑 */
    function handleEdit(row: ModelItem) {
      dialogTitle.value = '编辑模型'
      currentModelData.value = {
        id: row.id,
        name: row.name,
        code: row.code,
        tableName: row.tableName,
        description: row.description,
        status: row.status,
      }
      dialogVisible.value = true
    }

    /** 删除 */
    function handleDelete(row: ModelItem) {
      ElMessageBox.confirm(`确认删除模型「${row.name}」吗？`, '提示', {
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
            ...formData,
            updateTime: new Date().toLocaleString(),
          }
        }
        ElMessage.success('编辑成功')
      } else {
        // 新增模式：添加新数据
        tableData.value.push({
          ...formData,
          id: String(Date.now()),
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
            <el-form-item label="模型名称">
              <el-input
                v-model={queryParams.name}
                placeholder="请输入模型名称"
                clearable
              />
            </el-form-item>
            <el-form-item label="模型编码">
              <el-input
                v-model={queryParams.code}
                placeholder="请输入模型编码"
                clearable
              />
            </el-form-item>
            <el-form-item label="状态">
              <el-select
                v-model={queryParams.status}
                placeholder="请选择状态"
                style={{ width: '200px' }}
                clearable
              >
                <el-option label="启用" value="1" />
                <el-option label="禁用" value="0" />
              </el-select>
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
                <el-table-column prop="name" label="模型名称" min-width={120} />
                <el-table-column prop="code" label="模型编码" min-width={140} />
                <el-table-column prop="tableName" label="关联表名" min-width={140} />
                <el-table-column
                  prop="description"
                  label="描述"
                  min-width={180}
                  show-overflow-tooltip
                />
                <el-table-column prop="status" label="状态" width={100} align="center">
                  {{
                    default: ({ row }: { row: ModelItem }) => (
                      <el-tag type={row.status === '1' ? 'success' : 'danger'}>
                        {row.status === '1' ? '启用' : '禁用'}
                      </el-tag>
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
