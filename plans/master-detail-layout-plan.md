# 主子明细视图布局 + 数据类型兼容性验证 — 实现计划

## 一、需求概述

### 1.1 主子明细视图布局
支持 `MASTER_CHILD`（一主多子）和 `MASTER_CHILD_GRANDCHILD`（主子孙）两种实体结构：

- **一主多子**：1个主表 + N个子表（N 由用户在创建模型时指定 `childCount`）
- **主子孙**：1个主表 + N个子表 + M个孙表（N、M 分别由 `childCount` 和 `grandchildCount` 指定）

### 1.2 关联关系数据类型兼容性
建立字段关联时，需验证两端字段的数据类型是否兼容：

| 源类型 | 目标类型 | 兼容？ |
|--------|----------|--------|
| string | string   | ✅     |
| number | number   | ✅     |
| number | string   | ✅（隐式转换） |
| string | number   | ❌     |
| boolean | boolean | ✅     |
| DateTime | DateTime | ✅     |
| 其他任意不同类型 | | ❌     |

---

## 二、数据模型变更

### 2.1 EntityFieldConfig 扩展

```typescript
export interface EntityFieldConfig {
  entityKey: string        // main / child_0 / grandchild_0_0
  entityName: string       // 主表 / 子表1 / 孙表1-1
  sourceTableName: string
  fields: ModelField[]
  // ===== 新增字段 =====
  entityType: 'main' | 'child' | 'grandchild'  // 实体层级
  parentEntityKey: string   // 孙表的父实体key，如 child_0
}
```

### 2.2 getEntityConfigs 扩展

```typescript
export function getEntityConfigs(model: {
  entityStructure: string
  extendedTableCount: number
  childCount: number        // 新增
  grandchildCount: number   // 新增
}): EntityFieldConfig[]
```

**生成规则：**

| entityStructure | 生成实体 |
|----------------|---------|
| SINGLE | `[main]` |
| EXTENDED_SINGLE | `[main, ext_0, ext_1, ...]` |
| MASTER_CHILD | `[main, child_0, child_1, ...]` |
| MASTER_CHILD_GRANDCHILD | `[main, child_0, child_1, ..., grandchild_0_0, grandchild_0_1, ..., grandchild_1_0, ...]` |

**MASTER_CHILD_GRANDCHILD 孙表命名规则：**
- `grandchild_{childIndex}_{grandchildIndex}`
- 例如：`grandchild_0_0` = 第1个子表的第1个孙表
- `entityName` = "孙表1-1"

### 2.3 areTypesCompatible 工具函数

```typescript
export function areTypesCompatible(type1: string, type2: string): boolean {
  if (type1 === type2) return true
  // number → string 兼容
  if (type1 === 'number' && type2 === 'string') return true
  // string → number 不兼容
  return false
}
```

---

## 三、UI 变更

### 3.1 实体标签页层级展示

当前标签页是平铺排列，需要改为分组展示：

```
┌─────────────────────────────────────────────┐
│ [主表] 5  │ [子表1] 3  │ [子表2] 4         │  ← 一主多子
└─────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ [主表] 5  │ [子表1] 3  │ [子表2] 4  │ [孙表1-1] 2  │...│  ← 主子孙（平铺+前缀区分）
└──────────────────────────────────────────────────────────┘
```

**实现方式：** 在标签页中通过 `entityType` 添加视觉区分：
- 主表：默认样式
- 子表：带"子"标记
- 孙表：缩进 + 带"孙"标记

### 3.2 关联关系配置增强

**字段下拉选项增强：**
- 每个字段选项显示：`fieldName (tsType)`，如 `orgId (string)`
- 选择源字段后，目标字段下拉自动过滤为兼容类型
- 如果已选的源字段和目标字段类型不兼容，显示红色警告提示

**关联关系卡片显示条件变更：**
- 从"仅 EXTENDED_SINGLE"改为"实体数量 > 1 时均显示"
- 即 MASTER_CHILD 和 MASTER_CHILD_GRANDCHILD 也显示

---

## 四、文件变更清单

| 文件 | 变更内容 |
|------|---------|
| `types.ts` | EntityFieldConfig 增加 entityType/parentEntityKey；getEntityConfigs 支持 4 种结构；新增 areTypesCompatible |
| `EntityRelationConfig.tsx` | 字段下拉显示 TS 类型；类型兼容性过滤和警告 |
| `EntityRelationConfig.less` | 兼容性警告样式 |
| `index.tsx` | 实体标签页层级展示；关联关系卡片条件调整；getEntityConfigs 传入 childCount/grandchildCount |

---

## 五、实施步骤

1. **更新 types.ts** — 数据模型扩展 + areTypesCompatible 工具函数
2. **更新 EntityRelationConfig.tsx** — 字段下拉增强 + 类型兼容性验证
3. **更新 index.tsx** — 实体标签页层级 + 关联卡片条件 + getEntityConfigs 参数
4. **验证构建通过**
