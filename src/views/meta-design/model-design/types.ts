/**
 * 模型设计页面 — 类型定义与常量
 */

/** 单个模型字段配置 */
export interface ModelField {
  /** 唯一标识 */
  id: string
  /** 字段名（小驼峰，可自定义） */
  fieldName: string
  /** 字段别名 */
  fieldAlias: string
  /** SQL 原始类型，如 VARCHAR(255)、BIGINT(20) */
  rawType: string
  /** 映射后的 TS 类型：string / number / boolean / DateTime */
  tsType: string
  /** 默认值 */
  defaultValue: string
  /** 显示名称 */
  displayName: string
  /** 是否主键 */
  primaryKey: boolean
  /** 是否允许为空 */
  allowNull: boolean
  /** 字段注释 */
  comment: string
}

/** 实体字段配置（对应一个表/实体） */
export interface EntityFieldConfig {
  /** 实体标识，如 main / ext_0 / ext_1 */
  entityKey: string
  /** 实体显示名称，如 主表 / 拓展表1 */
  entityName: string
  /** 关联的数据库表名（可选，从数据源导入时填充） */
  sourceTableName: string
  /** 字段列表 */
  fields: ModelField[]
}

/** 模型设计数据（持久化到 localStorage） */
export interface ModelDesignData {
  /** 模型 ID */
  modelId: string
  /** 选中的数据库名 */
  selectedDbName: string
  /** 选中的表名 */
  selectedTableName: string
  /** 各实体的字段配置 */
  entities: EntityFieldConfig[]
  /** 更新时间 */
  updateTime: string
}

/** 数据库信息（从 mock 数据提取） */
export interface DatabaseInfo {
  /** 数据库名称 */
  dbName: string
}

/** 表信息 */
export interface TableInfo {
  /** 表名称 */
  name: string
}

/** 表字段原始信息（来自 mock 数据） */
export interface RawTableField {
  /** 字段名 */
  name: string
  /** TS 类型 */
  type: string
  /** SQL 原始类型 */
  rawType: string
  /** 是否允许为空 */
  allowNull: boolean
  /** 默认值 */
  defaultValue: string | null
  /** 是否主键 */
  primaryKey: boolean
  /** 字段注释 */
  comment: string
}

// ========================
// SQL → TS 类型映射
// ========================

/**
 * 从 SQL rawType 中提取基础类型名
 * 例如 "VARCHAR(255)" → "VARCHAR"，"BIGINT(20)" → "BIGINT"
 */
export function extractBaseType(rawType: string): string {
  const match = rawType.match(/^([A-Z]+)/)
  return match ? match[1] : rawType
}

/**
 * SQL 基础类型 → TS 类型映射
 * BIGINT 映射为 string 以避免 JS Number 精度丢失
 */
export const SQL_TO_TS_MAP: Record<string, string> = {
  VARCHAR: 'string',
  BIGINT: 'string',
  INT: 'number',
  DECIMAL: 'number',
  TINYINT: 'boolean',
  DATETIME: 'DateTime',
  DATE: 'string',
  TEXT: 'string',
}

/** TS 类型选项（用于手动创建字段时的下拉选择） */
export const TS_TYPE_OPTIONS = [
  { value: 'string', label: 'String 字符串' },
  { value: 'number', label: 'Number 数字' },
  { value: 'boolean', label: 'Boolean 布尔' },
  { value: 'DateTime', label: 'DateTime 日期时间' },
]

/**
 * 根据 SQL rawType 推导 TS 类型
 */
export function mapSqlToTsType(rawType: string): string {
  const baseType = extractBaseType(rawType)
  return SQL_TO_TS_MAP[baseType] || 'string'
}

/**
 * 将下划线命名转为小驼峰
 * 例如 "org_id" → "orgId"，"createdAt" 保持不变
 */
export function toCamelCase(name: string): string {
  return name.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase())
}

/**
 * 生成唯一 ID
 */
export function generateFieldId(): string {
  return `field_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

/**
 * 创建空的 ModelField
 */
export function createEmptyField(): ModelField {
  return {
    id: generateFieldId(),
    fieldName: '',
    fieldAlias: '',
    rawType: '',
    tsType: 'string',
    defaultValue: '',
    displayName: '',
    primaryKey: false,
    allowNull: true,
    comment: '',
  }
}

/**
 * 从 RawTableField 转换为 ModelField
 */
export function rawFieldToModelField(raw: RawTableField): ModelField {
  return {
    id: generateFieldId(),
    fieldName: toCamelCase(raw.name),
    fieldAlias: raw.name,
    rawType: raw.rawType,
    tsType: mapSqlToTsType(raw.rawType),
    defaultValue: raw.defaultValue ?? '',
    displayName: raw.comment || raw.name,
    primaryKey: raw.primaryKey,
    allowNull: raw.allowNull,
    comment: raw.comment,
  }
}

/**
 * 根据模型数据生成实体配置列表（第一阶段：仅 SINGLE + EXTENDED_SINGLE）
 */
export function getEntityConfigs(model: {
  entityStructure: string
  extendedTableCount: number
}): EntityFieldConfig[] {
  const entities: EntityFieldConfig[] = []

  // 始终有主表
  entities.push({
    entityKey: 'main',
    entityName: '主表',
    sourceTableName: '',
    fields: [],
  })

  if (model.entityStructure === 'EXTENDED_SINGLE') {
    for (let i = 0; i < model.extendedTableCount; i++) {
      entities.push({
        entityKey: `ext_${i}`,
        entityName: `拓展表${i + 1}`,
        sourceTableName: '',
        fields: [],
      })
    }
  }

  return entities
}
