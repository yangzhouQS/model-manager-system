import type { ModelRelation, EntityStructure, MetadataFeature } from './ModelFormDialog'

/** localStorage 存储键 */
export const STORAGE_KEY = 'meta-design:models'

/** 模型状态 */
export type ModelStatus = 'draft' | 'published'

/** 存储的模型数据结构 */
export interface StoredModel {
  /** 唯一标识 */
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
  /** 模型状态 */
  status: ModelStatus
  /** 创建时间（ISO 格式） */
  createTime: string
  /** 更新时间（ISO 格式） */
  updateTime: string
}

/** 从 localStorage 读取模型列表 */
export function getModels(): StoredModel[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as StoredModel[]
  } catch {
    return []
  }
}

/** 将模型列表写入 localStorage */
function saveModels(models: StoredModel[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(models))
}

/** 新增模型 */
export function addModel(data: {
  modelCode: string
  displayName: string
  module: string
  groupName: string
  modelRelation: ModelRelation
  entityStructure: EntityStructure
  extendedTableCount: number
  childCount: number
  grandchildCount: number
  features: MetadataFeature[]
}): StoredModel {
  const models = getModels()
  const now = new Date().toISOString()
  const newModel: StoredModel = {
    id: `model_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    ...data,
    status: 'draft',
    createTime: now,
    updateTime: now,
  }
  models.unshift(newModel)
  saveModels(models)
  return newModel
}

/** 更新模型 */
export function updateModel(
  id: string,
  data: {
    modelCode: string
    displayName: string
    module: string
    groupName: string
    modelRelation: ModelRelation
    entityStructure: EntityStructure
    extendedTableCount: number
    childCount: number
    grandchildCount: number
    features: MetadataFeature[]
  },
): StoredModel | null {
  const models = getModels()
  const index = models.findIndex((m) => m.id === id)
  if (index === -1) return null
  models[index] = {
    ...models[index],
    ...data,
    updateTime: new Date().toISOString(),
  }
  saveModels(models)
  return models[index]
}

/** 删除模型 */
export function deleteModel(id: string): boolean {
  const models = getModels()
  const filtered = models.filter((m) => m.id !== id)
  if (filtered.length === models.length) return false
  saveModels(filtered)
  return true
}
