/**
 * DataSourceSelector — 数据源选择组件
 *
 * 功能：
 * - 级联选择：数据库 → 表
 * - 点击「导入字段」弹出字段选择弹窗
 * - 勾选字段后确认导入
 */
import { defineComponent, ref, watch, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { getDatabases, getTablesByDb, getFieldsByTable } from './mock-data'
import type { ModelField, RawTableField } from './types'
import { rawFieldToModelField } from './types'
import './DataSourceSelector.less'

export default defineComponent({
  name: 'DataSourceSelector',
  emits: {
    /** 导入字段回调 */
    import: (_fields: ModelField[], _tableName: string) => true,
  },
  setup(props, { emit }) {
    const selectedDb = ref('')
    const selectedTable = ref('')
    const dialogVisible = ref(false)
    const checkedFieldNames = ref<string[]>([])

    /** 数据库选项 */
    const dbOptions = computed(() => getDatabases())

    /** 表选项 */
    const tableOptions = computed(() => {
      if (!selectedDb.value) return []
      return getTablesByDb(selectedDb.value)
    })

    /** 当前表的字段列表 */
    const currentFields = computed<RawTableField[]>(() => {
      if (!selectedDb.value || !selectedTable.value) return []
      return getFieldsByTable(selectedDb.value, selectedTable.value)
    })

    /** 全选状态 */
    const isAllChecked = computed(() =>
      currentFields.value.length > 0 && checkedFieldNames.value.length === currentFields.value.length,
    )

    /** 半选状态 */
    const isIndeterminate = computed(() =>
      checkedFieldNames.value.length > 0 && checkedFieldNames.value.length < currentFields.value.length,
    )

    /** 切换数据库时重置表选择 */
    watch(selectedDb, () => {
      selectedTable.value = ''
      checkedFieldNames.value = []
    })

    /** 打开字段选择弹窗 */
    function handleOpenDialog() {
      if (!selectedDb.value) {
        ElMessage.warning('请先选择数据库')
        return
      }
      if (!selectedTable.value) {
        ElMessage.warning('请先选择表')
        return
      }
      checkedFieldNames.value = []
      dialogVisible.value = true
    }

    /** 全选/取消全选 */
    function handleToggleAll() {
      if (isAllChecked.value) {
        checkedFieldNames.value = []
      } else {
        checkedFieldNames.value = currentFields.value.map((f) => f.name)
      }
    }

    /** 确认导入 */
    function handleConfirmImport() {
      if (checkedFieldNames.value.length === 0) {
        ElMessage.warning('请至少选择一个字段')
        return
      }
      const selectedRawFields = currentFields.value.filter((f) =>
        checkedFieldNames.value.includes(f.name),
      )
      const modelFields = selectedRawFields.map(rawFieldToModelField)
      emit('import', modelFields, selectedTable.value)
      dialogVisible.value = false
      ElMessage.success(`成功导入 ${modelFields.length} 个字段`)
    }

    return () => (
      <div class="data-source-selector">
        <div class="data-source-selector__form">
          <el-select
            modelValue={selectedDb.value}
            onUpdate:modelValue={(val: string) => { selectedDb.value = val }}
            placeholder="选择数据库"
            clearable
            style={{ width: '200px' }}
          >
            {dbOptions.value.map((db) => (
              <el-option key={db.dbName} label={db.dbName} value={db.dbName} />
            ))}
          </el-select>

          <el-select
            modelValue={selectedTable.value}
            onUpdate:modelValue={(val: string) => { selectedTable.value = val }}
            placeholder="选择表"
            clearable
            style={{ width: '200px' }}
            disabled={!selectedDb.value}
          >
            {tableOptions.value.map((t) => (
              <el-option key={t.name} label={t.name} value={t.name} />
            ))}
          </el-select>

          <el-button
            type="primary"
            onClick={handleOpenDialog}
            disabled={!selectedTable.value}
            icon="Download"
          >
            导入字段
          </el-button>
        </div>

        {/* 字段选择弹窗 */}
        <el-dialog
          modelValue={dialogVisible.value}
          onUpdate:modelValue={(val: boolean) => { dialogVisible.value = val }}
          title={`选择字段 — ${selectedTable.value}`}
          width="680px"
          destroy-on-close
        >
          {{
            default: () => (
              <div class="field-picker">
                <div class="field-picker__toolbar">
                  <el-checkbox
                    modelValue={isAllChecked.value}
                    indeterminate={isIndeterminate.value}
                    onChange={handleToggleAll}
                  >
                    全选 ({checkedFieldNames.value.length}/{currentFields.value.length})
                  </el-checkbox>
                </div>
                <div class="field-picker__list">
                  {currentFields.value.map((field) => (
                    <div
                      key={field.name}
                      class={[
                        'field-picker__item',
                        checkedFieldNames.value.includes(field.name) && 'field-picker__item--checked',
                      ]}
                      onClick={() => {
                        const idx = checkedFieldNames.value.indexOf(field.name)
                        if (idx === -1) {
                          checkedFieldNames.value = [...checkedFieldNames.value, field.name]
                        } else {
                          checkedFieldNames.value = checkedFieldNames.value.filter((n) => n !== field.name)
                        }
                      }}
                    >
                      <el-checkbox
                        modelValue={checkedFieldNames.value.includes(field.name)}
                        class="field-picker__checkbox"
                      />
                      <div class="field-picker__info">
                        <span class="field-picker__name">{field.name}</span>
                        <span class="field-picker__type">{field.rawType}</span>
                      </div>
                      <span class="field-picker__comment">{field.comment || '-'}</span>
                      {field.primaryKey && <el-tag type="danger" size="small">PK</el-tag>}
                    </div>
                  ))}
                </div>
              </div>
            ),
            footer: () => (
              <div class="dialog-footer">
                <el-button onClick={() => { dialogVisible.value = false }}>取消</el-button>
                <el-button
                  type="primary"
                  onClick={handleConfirmImport}
                  disabled={checkedFieldNames.value.length === 0}
                >
                  确认导入 ({checkedFieldNames.value.length})
                </el-button>
              </div>
            ),
          }}
        </el-dialog>
      </div>
    )
  },
})
