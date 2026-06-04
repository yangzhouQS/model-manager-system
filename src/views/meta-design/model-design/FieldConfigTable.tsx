/**
 * FieldConfigTable — 可编辑字段配置表格组件
 *
 * 功能：
 * - 展示一个实体的字段列表，支持内联编辑
 * - 支持添加/删除/上移/下移字段
 * - 支持从数据源导入字段
 */
import { defineComponent, type PropType } from 'vue'
import { ElMessage } from 'element-plus'
import { Grid } from '@element-plus/icons-vue'
import type { ModelField } from './types'
import { TS_TYPE_OPTIONS, createEmptyField, generateFieldId } from './types'
import './FieldConfigTable.less'

export default defineComponent({
  name: 'FieldConfigTable',
  props: {
    /** 实体显示名称，如 主表、拓展表1 */
    entityName: {
      type: String as PropType<string>,
      required: true,
    },
    /** 字段列表 */
    fields: {
      type: Array as PropType<ModelField[]>,
      required: true,
    },
  },
  emits: {
    /** 字段列表更新 */
    'update:fields': (_fields: ModelField[]) => true,
  },
  setup(props, { emit }) {
    /** 通知父组件字段更新 */
    function updateFields(newFields: ModelField[]) {
      emit('update:fields', newFields)
    }

    /** 添加空字段 */
    function handleAddField() {
      const newFields = [...props.fields, createEmptyField()]
      updateFields(newFields)
    }

    /** 删除字段 */
    function handleDeleteField(index: number) {
      const newFields = [...props.fields]
      newFields.splice(index, 1)
      updateFields(newFields)
    }

    /** 上移字段 */
    function handleMoveUp(index: number) {
      if (index === 0) return
      const newFields = [...props.fields]
      const temp = newFields[index]
      newFields[index] = newFields[index - 1]
      newFields[index - 1] = temp
      updateFields(newFields)
    }

    /** 下移字段 */
    function handleMoveDown(index: number) {
      if (index === props.fields.length - 1) return
      const newFields = [...props.fields]
      const temp = newFields[index]
      newFields[index] = newFields[index + 1]
      newFields[index + 1] = temp
      updateFields(newFields)
    }

    /** 更新单个字段属性 */
    function updateFieldProp(index: number, key: keyof ModelField, value: string | boolean) {
      const newFields = [...props.fields]
      newFields[index] = { ...newFields[index], [key]: value }
      updateFields(newFields)
    }

    /** 复制字段 */
    function handleCopyField(index: number) {
      const source = props.fields[index]
      const copied: ModelField = {
        ...source,
        id: generateFieldId(),
        fieldName: source.fieldName + '_copy',
      }
      const newFields = [...props.fields]
      newFields.splice(index + 1, 0, copied)
      updateFields(newFields)
      ElMessage.success('字段已复制')
    }

    return () => (
      <div class="field-config-table">
        <div class="field-config-table__header">
          <span class="field-config-table__title">
            <el-icon class="field-config-table__icon"><Grid /></el-icon>
            {props.entityName} — 字段配置
          </span>
          <div class="field-config-table__actions">
            <el-tag type="info" size="small" class="field-config-table__count">
              共 {props.fields.length} 个字段
            </el-tag>
            <el-button type="primary" size="small" onClick={handleAddField} icon="Plus">
              添加字段
            </el-button>
          </div>
        </div>

        {props.fields.length === 0 ? (
          <el-empty description="暂无字段，请添加字段或从数据源导入" image-size={60} />
        ) : (
          <el-table
            data={props.fields}
            border
            size="small"
            class="field-config-table__table"
            row-key="id"
            stripe
          >
            {/* 序号 */}
            <el-table-column type="index" label="#" width={50} align="center" />

            {/* 字段名 */}
            <el-table-column label="字段名" min-width={140}>
              {{
                default: ({ row, $index }: { row: ModelField; $index: number }) => (
                  <el-input
                    modelValue={row.fieldName}
                    onUpdate:modelValue={(val: string) => updateFieldProp($index, 'fieldName', val)}
                    placeholder="fieldName"
                    size="small"
                    class="field-config-table__input"
                  />
                ),
              }}
            </el-table-column>

            {/* 字段别名 */}
            <el-table-column label="别名" min-width={120}>
              {{
                default: ({ row, $index }: { row: ModelField; $index: number }) => (
                  <el-input
                    modelValue={row.fieldAlias}
                    onUpdate:modelValue={(val: string) => updateFieldProp($index, 'fieldAlias', val)}
                    placeholder="fieldAlias"
                    size="small"
                    class="field-config-table__input"
                  />
                ),
              }}
            </el-table-column>

            {/* 原始类型 */}
            <el-table-column label="SQL类型" width={130}>
              {{
                default: ({ row }: { row: ModelField }) => (
                  <span class="field-config-table__raw-type">{row.rawType || '-'}</span>
                ),
              }}
            </el-table-column>

            {/* TS类型 */}
            <el-table-column label="TS类型" width={130}>
              {{
                default: ({ row, $index }: { row: ModelField; $index: number }) => (
                  <el-select
                    modelValue={row.tsType}
                    onUpdate:modelValue={(val: string) => updateFieldProp($index, 'tsType', val)}
                    size="small"
                    class="field-config-table__select"
                  >
                    {TS_TYPE_OPTIONS.map((opt) => (
                      <el-option key={opt.value} label={opt.label} value={opt.value} />
                    ))}
                  </el-select>
                ),
              }}
            </el-table-column>

            {/* 显示名称 */}
            <el-table-column label="显示名称" min-width={120}>
              {{
                default: ({ row, $index }: { row: ModelField; $index: number }) => (
                  <el-input
                    modelValue={row.displayName}
                    onUpdate:modelValue={(val: string) => updateFieldProp($index, 'displayName', val)}
                    placeholder="显示名称"
                    size="small"
                    class="field-config-table__input"
                  />
                ),
              }}
            </el-table-column>

            {/* 默认值 */}
            <el-table-column label="默认值" width={110}>
              {{
                default: ({ row, $index }: { row: ModelField; $index: number }) => (
                  <el-input
                    modelValue={row.defaultValue}
                    onUpdate:modelValue={(val: string) => updateFieldProp($index, 'defaultValue', val)}
                    placeholder="默认值"
                    size="small"
                    class="field-config-table__input"
                  />
                ),
              }}
            </el-table-column>

            {/* 主键标记 */}
            <el-table-column label="主键" width={60} align="center">
              {{
                default: ({ row }: { row: ModelField }) => (
                  row.primaryKey
                    ? <el-tag type="danger" size="small">PK</el-tag>
                    : <span class="field-config-table__dash">-</span>
                ),
              }}
            </el-table-column>

            {/* 来源标记 */}
            <el-table-column label="来源" width={80} align="center">
              {{
                default: ({ row }: { row: ModelField }) => (
                  row.source === 'database'
                    ? <el-tag type="success" size="small">数据库</el-tag>
                    : <el-tag type="info" size="small">手动</el-tag>
                ),
              }}
            </el-table-column>

            {/* 注释 */}
            <el-table-column label="注释" min-width={120}>
              {{
                default: ({ row }: { row: ModelField }) => (
                  <span class="field-config-table__comment" title={row.comment}>
                    {row.comment || '-'}
                  </span>
                ),
              }}
            </el-table-column>

            {/* 操作 */}
            <el-table-column label="操作" width={140} align="center" fixed="right">
              {{
                default: ({ $index }: { $index: number }) => (
                  <div class="field-config-table__ops">
                    <el-button
                      link
                      size="small"
                      onClick={() => handleMoveUp($index)}
                      disabled={$index === 0}
                      icon="Top"
                      title="上移"
                    />
                    <el-button
                      link
                      size="small"
                      onClick={() => handleMoveDown($index)}
                      disabled={$index === props.fields.length - 1}
                      icon="Bottom"
                      title="下移"
                    />
                    <el-button
                      link
                      size="small"
                      onClick={() => handleCopyField($index)}
                      icon="CopyDocument"
                      title="复制"
                    />
                    <el-button
                      link
                      type="danger"
                      size="small"
                      onClick={() => handleDeleteField($index)}
                      icon="Delete"
                      title="删除"
                    />
                  </div>
                ),
              }}
            </el-table-column>
          </el-table>
        )}
      </div>
    )
  },
})
