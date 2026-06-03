# MySQL 数据类型 → TypeScript 类型映射

> MySQL 8.x 全部数据类型与 TypeScript 类型的完整映射参考表。

---

## 1. 数值类型（Numeric Types）

| MySQL 类型 | 存储 bytes | 范围 / 说明 | TypeScript 类型 | 示例值 | 备注 |
|-----------|-----------|------------|----------------|--------|------|
| `TINYINT` | 1 | -128 ~ 127（有符号），0 ~ 255（无符号） | `number` | `127` | 小整数，常用于布尔标记（0/1） |
| `TINYINT UNSIGNED` | 1 | 0 ~ 255 | `number` | `255` | 无符号小整数 |
| `SMALLINT` | 2 | -32768 ~ 32767 | `number` | `30000` | 中等范围整数 |
| `SMALLINT UNSIGNED` | 2 | 0 ~ 65535 | `number` | `65535` | |
| `MEDIUMINT` | 3 | -8388608 ~ 8388607 | `number` | `8388607` | |
| `MEDIUMINT UNSIGNED` | 3 | 0 ~ 16777215 | `number` | `16777215` | |
| `INT` / `INTEGER` | 4 | -2147483648 ~ 2147483647 | `number` | `100000` | 标准整数，最常用 |
| `INT UNSIGNED` | 4 | 0 ~ 4294967295 | `number` | `4294967295` | |
| `BIGINT` | 8 | -2⁶³ ~ 2⁶³-1 | `number` \| `string` | `"9007199254740999"` | 超过 JS `Number.MAX_SAFE_INTEGER`（2⁵³-1）时建议用 `string` |
| `BIGINT UNSIGNED` | 8 | 0 ~ 2⁶⁴-1 | `number` \| `string` | `"18446744073709551615"` | 同上，超出安全整数范围需 `string` |
| `FLOAT` | 4 | 单精度浮点，约 7 位有效数字 | `number` | `3.14` | 近似值，不适合精确计算 |
| `FLOAT(p)` | 4 或 8 | p ≤ 24 用 4 字节，否则 8 | `number` | `3.14159` | |
| `DOUBLE` / `DOUBLE PRECISION` | 8 | 双精度浮点，约 15 位有效数字 | `number` | `3.14159265358979` | 近似值 |
| `DECIMAL(M,D)` / `NUMERIC(M,D)` | 变长 | 精确值，M 总位数，D 小数位 | `number` \| `string` | `"99999999.9999"` | 金融场景推荐用 `string` 避免精度丢失，或使用 `bigint` + 自定义解析 |
| `BIT(M)` | ~M/8 | 位字段，1~64 位 | `Buffer` \| `number` | `Buffer.from([0b1010])` | M=1~64，读取时为 Buffer；M≤32 可转 number |
| `BOOL` / `BOOLEAN` | 1 | `TINYINT(1)` 的别名 | `number` \| `boolean` | `1` / `true` | MySQL 内部存为 0/1；TypeScript 中建议映射为 `number`（0\|1），ORM 可自动转为 `boolean` |

### 数值类型映射建议

```typescript
// 推荐做法：类型别名增强语义
type TinyInt = number;          // 0~255 或 -128~127
type SmallInt = number;         // -32768~32767
type MediumInt = number;        // -8388608~8388607
type Int = number;              // 标准整数
type BigInt = number | string;  // 超安全范围时用 string
type Decimal = number | string; // 精确数值，金融场景用 string
type Float = number;            // 近似浮点
type Double = number;           // 近似双精度
type Boolean = 0 | 1;           // MySQL BOOL 实际存储
```

---

## 2. 日期与时间类型（Date and Time Types）

| MySQL 类型 | 存储 bytes | 格式 / 范围 | TypeScript 类型 | 示例值 | 备注 |
|-----------|-----------|------------|----------------|--------|------|
| `DATE` | 3 | `YYYY-MM-DD`，1000-01-01 ~ 9999-12-31 | `string` \| `Date` | `"2026-06-01"` | 纯日期，无时间部分；推荐 `string`（ISO 格式） |
| `TIME` | 3 | `HH:MM:SS` 或 `HHH:MM:SS`，-838:59:59 ~ 838:59:59 | `string` | `"14:30:00"` | 可表示时间差（超过 24 小时） |
| `DATETIME` | 8 | `YYYY-MM-DD HH:MM:SS`，1000-01-01 00:00:00 ~ 9999-12-31 23:59:59 | `string` \| `Date` | `"2026-06-01 14:30:00"` | 日期+时间，无时区信息；推荐 `string` |
| `TIMESTAMP` | 4 | `YYYY-MM-DD HH:MM:SS`，1970-01-01 00:00:01 ~ 2038-01-19 03:14:07 UTC | `string` \| `Date` | `"2026-06-01T06:30:00Z"` | 自动时区转换，存储为 UTC；范围受限于 32 位；推荐 `string`（ISO 8601） |
| `YEAR` | 1 | `YYYY`，1901 ~ 2155 | `number` | `2026` | 年份 |
| `YEAR(4)` | 1 | 4 位年份 | `number` | `2026` | MySQL 8.0 中 YEAR 等价于 YEAR(4) |
| `YEAR(2)` | 1 | 2 位年份（已废弃） | `number` | `26` | MySQL 8.0 已移除支持 |

### 日期时间类型映射建议

```typescript
// 推荐做法：使用 branded type 或类型别名
type DateString = string;       // 'YYYY-MM-DD' 格式
type TimeString = string;       // 'HH:MM:SS' 格式
type DateTimeString = string;   // 'YYYY-MM-DD HH:MM:SS' 格式
type TimestampString = string;  // ISO 8601 格式 'YYYY-MM-DDTHH:MM:SS.sssZ'
type Year = number;             // 1901~2155

// 或者使用 Date 对象（ORM 自动转换时）
// 注意：JSON 序列化 Date 时会转为 ISO 字符串
```

---

## 3. 字符串类型（String Types）

| MySQL 类型 | 存储 | 范围 / 说明 | TypeScript 类型 | 示例值 | 备注 |
|-----------|------|------------|----------------|--------|------|
| `CHAR(M)` | M 字节（定长） | 0~255 字符 | `string` | `"hello"` | 定长字符串，不足补空格；适合 MD5、UUID 等固定长度 |
| `VARCHAR(M)` | 变长 | 0~65535 字节（受行大小限制） | `string` | `"hello world"` | 变长字符串，最常用 |
| `BINARY(M)` | M 字节（定长） | 0~255 字节 | `Buffer` | `Buffer.from([...])` | 定长二进制字符串 |
| `VARBINARY(M)` | 变长 | 0~65535 字节 | `Buffer` | `Buffer.from([...])` | 变长二进制字符串 |
| `TINYBLOB` | 变长 | 最大 255 字节 | `Buffer` | `Buffer.from([...])` | 微型二进制大对象 |
| `BLOB` | 变长 | 最大 64KB | `Buffer` | `Buffer.from([...])` | 二进制大对象 |
| `MEDIUMBLOB` | 变长 | 最大 16MB | `Buffer` | `Buffer.from([...])` | 中型二进制大对象 |
| `LONGBLOB` | 变长 | 最大 4GB | `Buffer` | `Buffer.from([...])` | 大型二进制大对象 |
| `TINYTEXT` | 变长 | 最大 255 字符 | `string` | `"short text"` | 微型文本 |
| `TEXT` | 变长 | 最大 64KB 字符 | `string` | `"longer text..."` | 文本，常用于备注、描述 |
| `MEDIUMTEXT` | 变长 | 最大 16MB 字符 | `string` | `"very long text..."` | 中型文本 |
| `LONGTEXT` | 变长 | 最大 4GB 字符 | `string` | `"extremely long..."` | 大型文本 |
| `ENUM('val1','val2',...)` | 1~2 字节 | 最多 65535 个成员 | `string` | `"val1"` | 枚举字符串；TypeScript 中可用联合类型 `'val1' \| 'val2'` |
| `SET('val1','val2',...)` | 1~8 字节 | 最多 64 个成员 | `string` \| `string[]` | `"val1,val2"` | 字符串集合；多值以逗号分隔；TS 中建议 `string[]` |

### 字符串类型映射建议

```typescript
// ENUM 映射为联合类型（推荐）
type Status = 'pending' | 'approved' | 'rejected';

// SET 映射为数组（推荐）
type Permissions = ('read' | 'write' | 'delete')[];

// BLOB 映射
type BlobData = Buffer;         // Node.js 环境
type BlobData = ArrayBuffer;    // 浏览器环境
```

---

## 4. JSON 类型

| MySQL 类型 | 存储 | 说明 | TypeScript 类型 | 示例值 | 备注 |
|-----------|------|------|----------------|--------|------|
| `JSON` | 变长 | 原生 JSON 类型，最大约 1GB | `Record<string, any>` \| 自定义接口 | `{"key": "value"}` | MySQL 5.7+ 支持；自动验证 JSON 格式；支持 `JSON_PATH` 查询 |

### JSON 类型映射建议

```typescript
// 推荐做法：定义具体接口
interface UserConfig {
  theme: 'light' | 'dark';
  pageSize: number;
  filters: Array<{
    field: string;
    operator: string;
    value: unknown;
  }>;
}

// 或使用泛型
type JsonColumn<T> = T;

// 未知结构时
type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
```

---

## 5. 空间类型（Spatial / Geometry Types）

> MySQL 8.0 支持的空间数据类型，基于 OpenGIS 规范。

| MySQL 类型 | 说明 | TypeScript 类型 | 备注 |
|-----------|------|----------------|------|
| `GEOMETRY` | 所有空间类型的基类 | `Buffer` \| `GeoJSON.Geometry` | 存储为 WKB（Well-Known Binary）；推荐用 [GeoJSON](https://geojson.org/) 格式 |
| `POINT` | 点（X, Y 坐标） | `Buffer` \| `{ type: 'Point', coordinates: [number, number] }` | 经纬度坐标 |
| `LINESTRING` | 折线（有序点序列） | `Buffer` \| `{ type: 'LineString', coordinates: [number, number][] }` | 路径 |
| `POLYGON` | 多边形 | `Buffer` \| `{ type: 'Polygon', coordinates: [number, number][][] }` | 区域 |
| `MULTIPOINT` | 点集合 | `Buffer` \| `{ type: 'MultiPoint', coordinates: [number, number][] }` | |
| `MULTILINESTRING` | 折线集合 | `Buffer` \| `{ type: 'MultiLineString', coordinates: [number, number][][] }` | |
| `MULTIPOLYGON` | 多边形集合 | `Buffer` \| `{ type: 'MultiPolygon', coordinates: [number, number][][][] }` | |
| `GEOMETRYCOLLECTION` | 几何体集合 | `Buffer` \| `{ type: 'GeometryCollection', geometries: GeoJSON.Geometry[] }` | 混合几何类型 |

### 空间类型映射建议

```typescript
// 推荐使用 @types/geojson
import type { Point, LineString, Polygon, Geometry } from 'geojson';

// MySQL 返回原始 WKB Buffer，需要解析库（如 wellknown、wkx）
// ORM（如 TypeORM）可自动转换为 GeoJSON
```

---

## 6. 特殊类型与修饰符

| MySQL 类型 / 修饰符 | 说明 | TypeScript 类型 | 备注 |
|-------------------|------|----------------|------|
| `SERIAL` | `BIGINT UNSIGNED NOT NULL AUTO_INCREMENT` 的别名 | `number` | 自增主键 |
| `INT(11)` | 显示宽度（不影响存储范围） | `number` | MySQL 8.0.17+ 已废弃显示宽度（除 TINYINT(1)） |
| `TINYINT(1)` | 习惯用于布尔值 | `0 \| 1` \| `boolean` | ORM 通常自动映射为 `boolean` |
| `DECIMAL` 无参数 | 等价于 `DECIMAL(10,0)` | `number` | 整数，10 位有效数字 |
| `FLOAT` 无参数 | 等价于 `FLOAT(4)` 单精度 | `number` | |
| `VARCHAR` 超过 65535 | 自动转为 `TEXT` | `string` | |
| `NULL` | 允许为空 | `T \| null` | TypeScript 中联合 `null` |
| `NOT NULL` | 不允许为空 | `T` | 无需联合 `null` |
| `DEFAULT` | 默认值 | — | TypeScript 中通过 `= defaultValue` 实现 |
| `UNSIGNED` | 无符号修饰 | `number` | TypeScript 无无符号概念，范围约束靠验证 |
| `ZEROFILL` | 前导零填充（已废弃） | `string` | MySQL 8.0.17+ 已废弃；返回值可能为字符串 |
| `CHARACTER SET` / `COLLATE` | 字符集和排序规则 | — | 不影响 TypeScript 类型映射 |

---

## 7. NULL 安全映射规则

| MySQL 列定义 | TypeScript 类型 | 说明 |
|-------------|----------------|------|
| `column INT NOT NULL` | `number` | 确定不为空，直接映射 |
| `column INT` (允许 NULL) | `number \| null` | 联合 `null` 类型 |
| `column VARCHAR(255) NOT NULL` | `string` | 确定不为空 |
| `column VARCHAR(255)` (允许 NULL) | `string \| null` | 联合 `null` 类型 |
| `column JSON NOT NULL` | `T` (具体接口) | 确定 JSON 结构不为空 |
| `column JSON` (允许 NULL) | `T \| null` | JSON 可能为 null |

---

## 8. 综合映射速查表

| MySQL 类别 | MySQL 类型 | 推荐 TypeScript 类型 |
|-----------|-----------|---------------------|
| 布尔 | `BOOL` / `BOOLEAN` / `TINYINT(1)` | `boolean` \| `0 \| 1` |
| 小整数 | `TINYINT` | `number` |
| 中整数 | `SMALLINT` | `number` |
| 整数 | `MEDIUMINT` | `number` |
| 标准整数 | `INT` / `INTEGER` | `number` |
| 大整数 | `BIGINT` | `number` \| `string` |
| 单精度浮点 | `FLOAT` | `number` |
| 双精度浮点 | `DOUBLE` | `number` |
| 精确小数 | `DECIMAL` / `NUMERIC` | `number` \| `string` |
| 位字段 | `BIT` | `Buffer` \| `number` |
| 日期 | `DATE` | `string` |
| 时间 | `TIME` | `string` |
| 日期时间 | `DATETIME` | `string` |
| 时间戳 | `TIMESTAMP` | `string` \| `Date` |
| 年份 | `YEAR` | `number` |
| 定长字符串 | `CHAR` | `string` |
| 变长字符串 | `VARCHAR` | `string` |
| 定长二进制 | `BINARY` | `Buffer` |
| 变长二进制 | `VARBINARY` | `Buffer` |
| 微型文本 | `TINYTEXT` | `string` |
| 文本 | `TEXT` | `string` |
| 中型文本 | `MEDIUMTEXT` | `string` |
| 大文本 | `LONGTEXT` | `string` |
| 微型二进制 | `TINYBLOB` | `Buffer` |
| 二进制 | `BLOB` | `Buffer` |
| 中型二进制 | `MEDIUMBLOB` | `Buffer` |
| 大二进制 | `LONGBLOB` | `Buffer` |
| 枚举 | `ENUM(...)` | `'val1' \| 'val2' \| ...` |
| 集合 | `SET(...)` | `('val1' \| 'val2' \| ...)[]` |
| JSON | `JSON` | `T` (自定义接口) \| `Record<string, any>` |
| 空间-点 | `POINT` | `GeoJSON.Point` \| `Buffer` |
| 空间-线 | `LINESTRING` | `GeoJSON.LineString` \| `Buffer` |
| 空间-面 | `POLYGON` | `GeoJSON.Polygon` \| `Buffer` |
| 空间-多点 | `MULTIPOINT` | `GeoJSON.MultiPoint` \| `Buffer` |
| 空间-多线 | `MULTILINESTRING` | `GeoJSON.MultiLineString` \| `Buffer` |
| 空间-多面 | `MULTIPOLYGON` | `GeoJSON.MultiPolygon` \| `Buffer` |
| 空间-集合 | `GEOMETRYCOLLECTION` | `GeoJSON.GeometryCollection` \| `Buffer` |
| 空间-通用 | `GEOMETRY` | `GeoJSON.Geometry` \| `Buffer` |

---

## 9. TypeORM / NestJS 项目中的实践建议

### 9.1 TypeORM 实体映射示例

```typescript
import { 
  Entity, PrimaryGeneratedColumn, Column, 
  CreateDateColumn, UpdateDateColumn 
} from 'typeorm';

@Entity('q_receive')
export class QReceive {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;                    // BIGINT → number（TypeORM 自动转换）

  @Column({ type: 'varchar', length: 255 })
  order_code: string;            // VARCHAR(255) → string

  @Column({ type: 'date' })
  order_date: string;            // DATE → string ('YYYY-MM-DD')

  @Column({ type: 'decimal', precision: 28, scale: 4 })
  net_quantity: string;          // DECIMAL(28,4) → string（避免精度丢失）

  @Column({ type: 'tinyint', width: 1 })
  is_approved: number;           // TINYINT(1) → number (0|1|2)

  @Column({ type: 'json', nullable: true })
  config_content: Record<string, any> | null;  // JSON → object | null

  @Column({ type: 'enum', enum: ['active', 'inactive', 'archived'] })
  status: 'active' | 'inactive' | 'archived';  // ENUM → 联合类型

  @CreateDateColumn({ type: 'datetime' })
  created_at: string;            // DATETIME → string

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: string;            // TIMESTAMP → string
}
```

### 9.2 DECIMAL 精度处理建议

```typescript
// 方案一：string（推荐，避免精度丢失）
@Column({ type: 'decimal', precision: 28, scale: 4 })
amount: string;                  // "9999999999999999.9999"

// 方案二：number + transformer
import { ValueTransformer } from 'typeorm';

const DecimalTransformer: ValueTransformer = {
  to(value: number): string { return value.toString(); },
  from(value: string): number { return parseFloat(value); }
};

@Column({ type: 'decimal', precision: 28, scale: 4, transformer: DecimalTransformer })
amount: number;                  // 自动转换，但超过安全整数范围会丢失精度
```

### 9.3 BIGINT 处理建议

```typescript
// 方案一：number（ID 在安全范围内时）
@PrimaryGeneratedColumn({ type: 'bigint' })
id: number;

// 方案二：string（超过 Number.MAX_SAFE_INTEGER 时）
@PrimaryGeneratedColumn({ type: 'bigint' })
id: string;

// 方案三：BigInt + transformer
const BigIntTransformer: ValueTransformer = {
  to(value: bigint): string { return value.toString(); },
  from(value: string): bigint { return BigInt(value); }
};

@Column({ type: 'bigint', transformer: BigIntTransformer })
id: bigint;
```

---

## 10. 本项目（V3 低代码模型管理）中使用的类型映射

基于 [`model_fields`](../docs-deepseek/02.SaaS平台低代码系统——模型管理技术方案-v3.md) 中的 `data_type` 枚举定义：

| `model_fields.data_type` 枚举值 | 对应 MySQL 类型 | TypeScript 类型 | 本项目中的使用场景 |
|-------------------------------|----------------|----------------|------------------|
| `varchar` | `VARCHAR(N)` | `string` | 单据编号、供应商名称、车牌号等 |
| `bigint` | `BIGINT` | `number` | 供应商ID、主表ID等外键引用 |
| `int` | `INT` | `number` | 审批状态、打印次数、确认量类型 |
| `decimal` | `DECIMAL(28,4)` / `DECIMAL(28,8)` | `string` | 净重、毛重、扣率等精确数值 |
| `datetime` | `DATETIME` | `string` | 创建时间、更新时间 |
| `date` | `DATE` | `string` | 单据日期 |
| `tinyint` | `TINYINT` | `number` | 废弃标记（0/1）、启用状态（0/1） |
| `text` | `TEXT` | `string` | 模型描述、备注 |
| `longtext` | `LONGTEXT` | `string` | 配置内容（`config_content` JSON） |
