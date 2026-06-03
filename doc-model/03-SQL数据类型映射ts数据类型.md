## SQL数据类型映射 typescript数据类型

| SQL数据类型 | 对应 MySQL 类型 | TypeScript 类型 | 本项目中的使用场景                |
| ----------- | --------------- | --------------- | --------------------------------- |
| `varchar`   | `VARCHAR(N)`    | `string`        | 单据编号、供应商名称、车牌号等    |
| `bigint`    | `BIGINT`        | `string`        | 供应商ID、主表ID等外键引用        |
| `int`       | `INT`           | `number`        | 审批状态、打印次数、确认量类型    |
| `decimal`   | `DECIMAL(28,4)` | `number`        | 净重、毛重、扣率等精确数值        |
| `datetime`  | `DATETIME`      | `string`        | 创建时间、更新时间                |
| `date`      | `DATE`          | `string`        | 单据日期                          |
| `tinyint`   | `TINYINT`       | `boolean`       | 废弃标记（0/1）、启用状态（0/1）  |
| `text`      | `TEXT`          | `string`        | 模型描述、备注                    |
| `longtext`  | `LONGTEXT`      | `string`        | 配置内容（`config_content` JSON） |



``` 
const dataTypeMap = new Map()
dataTypeMap.set('DECIMAL', 'Number')
dataTypeMap.set('DATETIME', 'DateTime')
dataTypeMap.set('INT', 'Number')
dataTypeMap.set('TINYINT', 'Boolean')
dataTypeMap.set('DOUBLE', 'Number')
dataTypeMap.set('BIGINT', 'String')
dataTypeMap.set('TEXT', 'String')
dataTypeMap.set('LONGTEXT', 'String')
dataTypeMap.set('VARCHAR', 'String')
```