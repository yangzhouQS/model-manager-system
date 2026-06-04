/**
 * EntityRelationConfig — 实体关联关系配置组件
 *
 * 功能：
 * - 配置实体之间的等值关联关系（字段A = 字段B）
 * - 支持多个关联字段对
 * - 字段下拉显示 TS 类型
 * - 选择源字段后自动过滤兼容的目标字段
 * - 不兼容时显示红色警告
 */
import { defineComponent, type PropType } from 'vue'
import { ElMessage } from 'element-plus'
import { Link, Right } from '@element-plus/icons-vue'
import type { EntityRelation, RelationFieldPair, EntityFieldConfig, ModelField } from './types'
import { generateFieldId, areTypesCompatible } from './types'
import './EntityRelationConfig.less'

export default defineComponent({
  name: 'EntityRelationConfig',
  props: {
    /** 实体列表（用于下拉选择） */
    entities: {
      type: Array as PropType<EntityFieldConfig[]>,
      required: true,
    },
    /** 关联关系列表 */
    relations: {
      type: Array as PropType<EntityRelation[]>,
      required: true,
    },
  },
  emits: {
    /** 关联关系更新 */
    'update:relations': (_relations: EntityRelation[]) => true,
  },
  setup(props, { emit }) {
    /** 通知父组件关联关系更新 */
    function updateRelations(newRelations: EntityRelation[]) {
      emit('update:relations', newRelations)
    }

    /** 添加新的关联关系 */
    function handleAddRelation() {
      if (props.entities.length < 2) {
        ElMessage.warning('至少需要两个实体才能创建关联关系')
        return
      }
      const newRelation: EntityRelation = {
        id: `rel_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        sourceEntityKey: props.entities[0].entityKey,
        targetEntityKey: props.entities[1]?.entityKey || '',
        fieldPairs: [{ sourceFieldName: '', targetFieldName: '' }],
      }
      updateRelations([...props.relations, newRelation])
    }

    /** 删除关联关系 */
    function handleDeleteRelation(index: number) {
      const newRelations = [...props.relations]
      newRelations.splice(index, 1)
      updateRelations(newRelations)
    }

    /** 更新关联关系的实体选择 */
    function updateRelationEntity(index: number, key: 'sourceEntityKey' | 'targetEntityKey', value: string) {
      const newRelations = [...props.relations]
      newRelations[index] = { ...newRelations[index], [key]: value }
      // 切换实体时清空字段对
      newRelations[index].fieldPairs = [{ sourceFieldName: '', targetFieldName: '' }]
      updateRelations(newRelations)
    }

    /** 添加字段对 */
    function handleAddFieldPair(relationIndex: number) {
      const newRelations = [...props.relations]
      const relation = { ...newRelations[relationIndex] }
      relation.fieldPairs = [...relation.fieldPairs, { sourceFieldName: '', targetFieldName: '' }]
      newRelations[relationIndex] = relation
      updateRelations(newRelations)
    }

    /** 删除字段对 */
    function handleDeleteFieldPair(relationIndex: number, pairIndex: number) {
      const newRelations = [...props.relations]
      const relation = { ...newRelations[relationIndex] }
      relation.fieldPairs = relation.fieldPairs.filter((_, i) => i !== pairIndex)
      newRelations[relationIndex] = relation
      updateRelations(newRelations)
    }

    /** 更新字段对 */
    function updateFieldPair(
      relationIndex: number,
      pairIndex: number,
      key: 'sourceFieldName' | 'targetFieldName',
      value: string,
    ) {
      const newRelations = [...props.relations]
      const relation = { ...newRelations[relationIndex] }
      relation.fieldPairs = relation.fieldPairs.map((pair, i) =>
        i === pairIndex ? { ...pair, [key]: value } : pair,
      )
      newRelations[relationIndex] = relation
      updateRelations(newRelations)
    }

    /** 获取实体的字段列表（含 TS 类型信息） */
    function getFields(entityKey: string): ModelField[] {
      const entity = props.entities.find((e) => e.entityKey === entityKey)
      return entity ? entity.fields.filter((f) => f.fieldName) : []
    }

    /** 获取源字段选中后，兼容的目标字段列表 */
    function getCompatibleTargetFields(
      sourceEntityKey: string,
      sourceFieldName: string,
      targetEntityKey: string,
    ): ModelField[] {
      const targetFields = getFields(targetEntityKey)
      if (!sourceFieldName) return targetFields

      // 找到源字段的 TS 类型
      const sourceFields = getFields(sourceEntityKey)
      const sourceField = sourceFields.find((f) => f.fieldName === sourceFieldName)
      if (!sourceField) return targetFields

      // 过滤兼容的目标字段
      return targetFields.filter((tf) => areTypesCompatible(sourceField.tsType, tf.tsType))
    }

    /** 检查字段对类型是否兼容 */
    function isPairCompatible(
      sourceEntityKey: string,
      sourceFieldName: string,
      targetEntityKey: string,
      targetFieldName: string,
    ): { compatible: boolean; sourceType: string; targetType: string } {
      if (!sourceFieldName || !targetFieldName) return { compatible: true, sourceType: '', targetType: '' }

      const sourceFields = getFields(sourceEntityKey)
      const targetFields = getFields(targetEntityKey)
      const sourceField = sourceFields.find((f) => f.fieldName === sourceFieldName)
      const targetField = targetFields.find((f) => f.fieldName === targetFieldName)

      if (!sourceField || !targetField) return { compatible: true, sourceType: '', targetType: '' }

      return {
        compatible: areTypesCompatible(sourceField.tsType, targetField.tsType),
        sourceType: sourceField.tsType,
        targetType: targetField.tsType,
      }
    }

    return () => (
      <div class="entity-relation-config">
        <div class="entity-relation-config__header">
          <span class="entity-relation-config__title">
            <el-icon><Link /></el-icon>
            实体关联关系
          </span>
          <el-button
            type="primary"
            size="small"
            onClick={handleAddRelation}
            icon="Plus"
            disabled={props.entities.length < 2}
          >
            添加关联
          </el-button>
        </div>

        {props.relations.length === 0 ? (
          <el-empty
            description="暂无关联关系，请添加实体间的字段关联"
            image-size={50}
          />
        ) : (
          <div class="entity-relation-config__list">
            {props.relations.map((relation, rIndex) => (
              <div key={relation.id} class="relation-item">
                <div class="relation-item__header">
                  <span class="relation-item__label">
                    关联 {rIndex + 1}
                  </span>
                  <el-button
                    link
                    type="danger"
                    size="small"
                    onClick={() => handleDeleteRelation(rIndex)}
                    icon="Delete"
                  >
                    删除
                  </el-button>
                </div>

                <div class="relation-item__entities">
                  <el-select
                    modelValue={relation.sourceEntityKey}
                    onUpdate:modelValue={(val: string) => updateRelationEntity(rIndex, 'sourceEntityKey', val)}
                    size="small"
                    class="relation-item__entity-select"
                    placeholder="源实体"
                  >
                    {props.entities.map((e) => (
                      <el-option key={e.entityKey} label={e.entityName} value={e.entityKey} />
                    ))}
                  </el-select>

                  <span class="relation-item__arrow">
                    <el-icon><Right /></el-icon>
                  </span>

                  <el-select
                    modelValue={relation.targetEntityKey}
                    onUpdate:modelValue={(val: string) => updateRelationEntity(rIndex, 'targetEntityKey', val)}
                    size="small"
                    class="relation-item__entity-select"
                    placeholder="目标实体"
                  >
                    {props.entities.map((e) => (
                      <el-option key={e.entityKey} label={e.entityName} value={e.entityKey} />
                    ))}
                  </el-select>
                </div>

                {/* 字段对列表 */}
                <div class="relation-item__pairs">
                  <div class="relation-item__pairs-header">
                    <span class="relation-item__pairs-title">字段映射</span>
                    <el-button
                      link
                      type="primary"
                      size="small"
                      onClick={() => handleAddFieldPair(rIndex)}
                      icon="Plus"
                    >
                      添加字段对
                    </el-button>
                  </div>

                  {relation.fieldPairs.map((pair, pIndex) => {
                    const compatibility = isPairCompatible(
                      relation.sourceEntityKey,
                      pair.sourceFieldName,
                      relation.targetEntityKey,
                      pair.targetFieldName,
                    )

                    return (
                      <div
                        key={pIndex}
                        class={[
                          'field-pair',
                          { 'field-pair--incompatible': !compatibility.compatible },
                        ]}
                      >
                        {/* 源字段选择 */}
                        <el-select
                          modelValue={pair.sourceFieldName}
                          onUpdate:modelValue={(val: string) => updateFieldPair(rIndex, pIndex, 'sourceFieldName', val)}
                          size="small"
                          class="field-pair__select"
                          placeholder="源字段"
                          filterable
                        >
                          {getFields(relation.sourceEntityKey).map((field) => (
                            <el-option
                              key={field.fieldName}
                              label={`${field.fieldName} (${field.tsType})`}
                              value={field.fieldName}
                            />
                          ))}
                        </el-select>

                        <span class="field-pair__eq">=</span>

                        {/* 目标字段选择（过滤兼容类型） */}
                        <el-select
                          modelValue={pair.targetFieldName}
                          onUpdate:modelValue={(val: string) => updateFieldPair(rIndex, pIndex, 'targetFieldName', val)}
                          size="small"
                          class="field-pair__select"
                          placeholder="目标字段"
                          filterable
                        >
                          {getCompatibleTargetFields(
                            relation.sourceEntityKey,
                            pair.sourceFieldName,
                            relation.targetEntityKey,
                          ).map((field) => (
                            <el-option
                              key={field.fieldName}
                              label={`${field.fieldName} (${field.tsType})`}
                              value={field.fieldName}
                            />
                          ))}
                        </el-select>

                        {/* 类型兼容性提示 */}
                        {!compatibility.compatible && (
                          <span class="field-pair__warning">
                            ⚠️ {compatibility.sourceType} ≠ {compatibility.targetType}
                          </span>
                        )}

                        <el-button
                          link
                          type="danger"
                          size="small"
                          onClick={() => handleDeleteFieldPair(rIndex, pIndex)}
                          icon="Delete"
                          disabled={relation.fieldPairs.length <= 1}
                          title="删除字段对"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
})
