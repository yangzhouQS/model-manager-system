import type { ModelRelation, EntityStructure, MetadataFeature } from './ModelFormDialog'
import type { ModelDesignData } from '../model-design/types'

/** localStorage 存储键 */
export const STORAGE_KEY = 'meta-design:models'

/** 模型设计数据存储键 */
export const DESIGN_STORAGE_KEY = 'meta-design:model-design'

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

// ==================== 模型设计数据 CRUD ====================

/** 从 localStorage 读取所有模型设计数据 */
function getAllDesigns(): Record<string, ModelDesignData> {
  try {
    const raw = localStorage.getItem(DESIGN_STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as Record<string, ModelDesignData>
  } catch {
    return {}
  }
}

/** 将所有模型设计数据写入 localStorage */
function saveAllDesigns(designs: Record<string, ModelDesignData>): void {
  localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify(designs))
}

/** 获取指定模型的设计数据 */
export function getModelDesign(modelId: string): ModelDesignData | null {
  const designs = getAllDesigns()
  return designs[modelId] ?? null
}

/** 保存模型设计数据（新增或更新） */
export function saveModelDesign(data: ModelDesignData): void {
  const designs = getAllDesigns()
  designs[data.modelId] = {
    ...data,
    updateTime: new Date().toISOString(),
  }
  saveAllDesigns(designs)
}

/** 删除指定模型的设计数据 */
export function deleteModelDesign(modelId: string): boolean {
  const designs = getAllDesigns()
  if (!(modelId in designs)) return false
  delete designs[modelId]
  saveAllDesigns(designs)
  return true
}
