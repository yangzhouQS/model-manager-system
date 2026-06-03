/**
 * 模型设计页面 — Mock 数据查询函数
 *
 * 数据来源：mock-config/table-fields-config.ts
 * 提供数据库列表、表列表、字段列表的查询函数
 */
import { tableFieldsConfig } from '../mock-config/table-fields-config'
import type { DatabaseInfo, TableInfo, RawTableField } from './types'

/** 缓存的数据库名列表 */
let cachedDatabases: DatabaseInfo[] | null = null

/**
 * 获取所有数据库列表
 */
export function getDatabases(): DatabaseInfo[] {
  if (cachedDatabases) return cachedDatabases
  cachedDatabases = tableFieldsConfig.map((db) => ({
    dbName: db.dbName,
  }))
  return cachedDatabases
}

/**
 * 根据数据库名获取表列表
 */
export function getTablesByDb(dbName: string): TableInfo[] {
  const db = tableFieldsConfig.find((d) => d.dbName === dbName)
  if (!db) return []
  return db.tables.map((t) => ({ name: t.name }))
}

/**
 * 根据数据库名和表名获取字段列表
 */
export function getFieldsByTable(dbName: string, tableName: string): RawTableField[] {
  const db = tableFieldsConfig.find((d) => d.dbName === dbName)
  if (!db) return []
  const table = db.tables.find((t) => t.name === tableName)
  if (!table) return []

  return Object.entries(table.fields).map(([name, field]) => ({
    name,
    type: field.type,
    rawType: field.rawType,
    allowNull: field.allowNull,
    defaultValue: field.defaultValue,
    primaryKey: field.primaryKey,
    comment: field.comment,
  }))
}
