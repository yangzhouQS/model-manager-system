
/*
* 表字段配置
* 表名称："name": "cGd",
* 表字段： fields
* dbName 为数据库名称
*  */
export const tableFieldsConfig = [
	{
		dbName: 'global_mtlp',
		tables: [
			{
				"name": "cGd",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 651452160292352,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织id"
					},
					"name": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "1122323",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工点名称"
					},
					"startTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2017-11-01",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "开工时间"
					},
					"endTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2022-11-01",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "结束时间"
					},
					"gdState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wqewqeqwe",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工点状态"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"oriGdId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接工点id"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接组织id"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 976282950455840,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "xxxxx",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 976282950455840,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "xxxxx",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2021-03-21T22:52:59.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2021-03-21T22:52:59.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 976282950455840,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"isLinkGh": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否关联工号"
					}
				}
			},
			{
				"name": "cGdLinkGh",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 609531394904064,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1254499746297856,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1253635753988608,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "工点主表主键"
					},
					"ghId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 609536013455360,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关联工号id"
					},
					"ghName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "测试工号",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关联工号name"
					},
					"ghFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "609535200268288|609536013455360",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关联工号节点主键链"
					},
					"ghFullName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "西安地铁9号线1|测试工号",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关联工号节点名称链"
					},
					"oriGhId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "null",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接工号id"
					},
					"linkState": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "关联状态"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-19T08:46:31.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-19T08:46:31.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1254499746297856,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					}
				}
			},
			{
				"name": "cGh",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 111,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织id"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1111256354,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"parentId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": -1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "父id"
					},
					"fullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "1111256354",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "节点主键链 11|22"
					},
					"name": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "临时工程",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号名称"
					},
					"fullName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "临时工程",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号节点名称链(桩基|1#)"
					},
					"level": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "树级别"
					},
					"isLeaf": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否为子节点"
					},
					"startTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "开工时间"
					},
					"endTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "结束时间"
					},
					"ghState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号状态"
					},
					"isDelivery": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否是发料工号"
					},
					"isCheck": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否为核算工号"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"oriGhId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "1111256354",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接工号id"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "8110000000007671",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接组织id"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"deliveryId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"deliveryName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"deliveryFullName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"oriVersion": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderNo": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"fullIdEx": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"excelTaskId": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"oriName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"startPile": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "开始桩号"
					},
					"endPile": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "结束桩号"
					},
					"code": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "102013001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号编码"
					},
					"creator": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-10-15T14:40:01.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"reviser": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-10-21T09:28:01.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1902854680097280,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"isDisable": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "是否启用"
					},
					"longitude": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "经度"
					},
					"latitude": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "纬度"
					},
					"projectTypeId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工程分类id"
					},
					"projectTypeName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工程分类name"
					},
					"accountingObjectId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "核算对象id"
					},
					"accountingObjectName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "核算对象name"
					},
					"matchFullName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "映射工号全称"
					}
				}
			},
			{
				"name": "cGhDistance",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 609531394904064,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 991118677667840,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "工号主键"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "张梓浈专用",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"fullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "991118532644864|991118677667840",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号主键链"
					},
					"fullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "大桥66|大桥",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号全称"
					},
					"name": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "大桥",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号名称"
					},
					"length": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1000,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "工号总长度"
					},
					"initLength": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 13,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "初始化长度"
					},
					"initQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "初始完成设计量"
					},
					"ghStart": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "工号起始里程1.2"
					},
					"ghEnd": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 2,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "工号结束里程1.3"
					},
					"distance": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "{\"prefix\":\"ASD\",\"startKm\":1,\"startM\":0,\"stopKm\":2,\"stopM\":0}",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号里程"
					},
					"prefix": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "ASD",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号前缀"
					},
					"currentLength": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 13,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "已施工长度"
					},
					"currentQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "已完成设计量"
					},
					"oriGhId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接工号id"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接组织id"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1340165623411200,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "赵福",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1340165623411200,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "赵福",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-02-27T07:14:12.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-02-27T07:14:12.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 991118677667840,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"distanceStr": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "ASD1+0.00〜ASD2+0.00",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "里程字符串"
					}
				}
			},
			{
				"name": "cLabour",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "复合主键组织机构id"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 115448070424192,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织名称"
					},
					"labourName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "静庄项目经理部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位名称"
					},
					"labourAbbName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "静庄项目经理部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位简称"
					},
					"labourContact": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "联系人"
					},
					"labourPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "{crypto}Jj0/nHP5fPyzGp47QxkhGQ==",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "联系电话"
					},
					"labourOrgCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "统一社会信用代码"
					},
					"labourTypeName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "队伍类别，劳务分包或者……"
					},
					"isBlackList": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否是黑名单"
					},
					"oriLabourId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接用料单位id"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "第三方对接组织id"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "甘肃路桥建设集团有限公司|子公司|静庄项目经理部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 853032049578496,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "常黎娟",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 853032049578496,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "常黎娟",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"matchState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "匹配状态 0 系统添加，1第三方数据 2 匹配后数据"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-06-20T01:08:05.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-06-20T01:08:05.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 115448070424192,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"isDisable": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "是否启用"
					},
					"labourClass": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "组织",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位类型（内部客商、组织客商）"
					},
					"nameInitials": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "JZXMJLB",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "客商名称首字母"
					},
					"abbNameInitials": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "JZXMJLB",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "客商简称首字母"
					},
					"materialTaker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "领料人"
					},
					"materialTakerPhone": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "领料人电话"
					},
					"businessTypeName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "主营类别名称"
					},
					"businessTypeCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "主营类别code"
					}
				}
			},
			{
				"name": "cLabourRelation",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户code"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"labourId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 976965238632960,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "用料单位id"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 971366117347840,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构id"
					},
					"projectId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 971366117347840,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关联组织机构id"
					},
					"projectName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "1#拌合站",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关联组织机构名称"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					}
				}
			},
			{
				"name": "mReceiveOrder",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 441292771463168,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 870137774158336,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "测试1项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2020-08",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "签订日期"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "收料-20200800001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "签订日期"
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2020-08-01",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "入账时间"
					},
					"supplierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "测试供应商100800",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商名称"
					},
					"supplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 586892811629056,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商Id"
					},
					"contractId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同名称"
					},
					"contractCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同Code"
					},
					"purchaseMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购方式"
					},
					"settlementMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "结算方式"
					},
					"invoiceNumber": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发票号"
					},
					"taxDeduction": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否扣税"
					},
					"totalAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1000,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合计金额"
					},
					"orderDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预点单ID 冲预点的时候会存值"
					},
					"orderDataCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预点单号"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "[\"已\",\"二\",\"三\"]",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2020-10-23 15:40:04",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单时间"
					},
					"isAudit": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "审核状态"
					},
					"auditor": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核人"
					},
					"auditDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2020-10-23 15:40:05",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核时间"
					},
					"oriSupplierId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商对接"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "机构对接"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接收料单ID"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRefund": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isRush": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isSummary": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"orderNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "20200800001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"purchaseMethodFullName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"printTimes": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "打印次数"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-10-23T07:40:05.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-10-23T07:40:05.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 870137776935424,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"groupContract": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "集团合同编码"
					},
					"isPushed": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送标记状态"
					},
					"errMag": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送失败原因"
					}
				}
			},
			{
				"name": "mReceiveOrderItem",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 441292771463168,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 870137774936576,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 870137774158336,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键"
					},
					"itemDataType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "选材来源"
					},
					"itemDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 606706095157248,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "来源ID"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 606706095157248,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "盘条",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "HPB300Φ14mm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "AAA",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主单位"
					},
					"classId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 606705025028099,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别id"
					},
					"classFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "606705025028096|606705025028097|606705025028098|606705025028099",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别主键链"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 100,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "数量"
					},
					"taxRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 13,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税率"
					},
					"taxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "不含税单价"
					},
					"taxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1000,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "不含税金额"
					},
					"taxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 11.3,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "含税单价"
					},
					"taxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1130,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "含税金额"
					},
					"taxAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 130,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税额"
					},
					"bookPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账面价"
					},
					"bookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1000,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账面金额"
					},
					"difference": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "差额"
					},
					"itemBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "H20201023154005UkOe",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "条码"
					},
					"storeRoomId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 686007214092288,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目ID"
					},
					"storeRoomName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "主要材料",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目"
					},
					"storeRoomFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "原材料|主要材料",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目全称"
					},
					"manufacturer": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "生产厂商"
					},
					"batchNo": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "炉批号"
					},
					"storageRoom": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地"
					},
					"itemRemark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息varchar主键"
					},
					"oriClassId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别varchar主键"
					},
					"oriCommonId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息其他预留主键sV_Col5"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的主键"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRefund": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isRush": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "状态（普通模式下冲红或冲预点状态标记）1(冲红) 2(冲预点)"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-10-23T07:40:05.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-10-23T07:40:05.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 870137774936576,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					}
				}
			},
			{
				"name": "qCodeList",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1246478699601408,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键"
					},
					"departmentId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构id"
					},
					"planItemId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1225270560981120,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "批次计划id"
					},
					"delivyTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2022-04-07 09:40:10",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "出库时间"
					},
					"status": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "货物状态"
					},
					"weight": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 3.223,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "出库总重量"
					},
					"totalPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 13304.54,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "金额"
					},
					"trackingNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "B129063000093",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "物流单号"
					},
					"platNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "鄂APS143",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "车牌号"
					},
					"driver": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "王智",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "司机"
					},
					"contact": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "18672471039",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "联系方式"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "fmf",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2022-04-08",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单日期"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"isConfirm": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "确认收货"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方组织机构"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方单据主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1132559099466752,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "fmf",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1132559099466752,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "fmf",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"printTimes": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "打印次数"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-08T00:47:40.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-08T00:47:40.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1246478699601408,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"address": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "收货地址"
					},
					"stackingId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "B122328063",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "码单号id"
					}
				}
			},
			{
				"name": "qCodeListItem",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1246478699601408,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "单据主键id"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1246478712290816,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键"
					},
					"productId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 795673922253312,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "产品id材料id"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "钢筋混凝土用热轧带肋钢筋直条",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "22.0",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计量单位"
					},
					"scheduleAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 3.223,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "需求数量"
					},
					"weightAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 3.223,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "入库数量"
					},
					"unitPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 4120,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单价"
					},
					"totalPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 13304.54,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "总价"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方组织机构主键"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方单据主键"
					},
					"oriGhId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方工号主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1132559099466752,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "fmf",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1132559099466752,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "fmf",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-08T00:47:41.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-08T00:47:41.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1246478712290816,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					}
				}
			},
			{
				"name": "qDelivery",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1928960756290560,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "新运公司武汉地铁12号线",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2025-07",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据日期"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "发料-20250700012",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据编号"
					},
					"orderOrigin": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 2,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据来源 或者0代表磅单1代表pda"
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "业务类型 或者0代表调入 1代表收料"
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "类型默认值（0）1冲红2补录3退料4普通"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "中铁一局集团有限公司管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2025-07-11",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单日期"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表备注"
					},
					"printTimes": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "打印次数"
					},
					"plateNumber": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "车牌号"
					},
					"labourId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1928999913648151,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位编号"
					},
					"labourName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "河南惠辉建筑工程有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位名称"
					},
					"ghId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 2083953334014465,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "工号主键"
					},
					"ghFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "2083953334014476|2083953334014475|2083953334014473|2083953334014465",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号主键链"
					},
					"ghFullName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "大临工程|城铁铺轨基地|机铺铺轨基地|机铺铺轨基地1【青菱站机铺主基地】",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号全称"
					},
					"ghName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "机铺铺轨基地1【青菱站机铺主基地】",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号名称"
					},
					"exitTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2025-07-11 14:14:04",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "出场时间"
					},
					"isRed": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否冲红（0）"
					},
					"isAudit": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核（默认为0）"
					},
					"auditor": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核人"
					},
					"auditDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核时间"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接组织机构"
					},
					"oriLabourId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "99fde530-9f78-4400-bd1f-7d6740ae7209",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "【常用用料单位】预留"
					},
					"oriGhId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "24da0d5142cf4957a2708d82e01de30b",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号第三方id"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "中铁一局集团有限公司管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "中铁一局集团有限公司管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"longitude": {
						"type": "Number",
						"rawType": "DECIMAL(18,6)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"latitude": {
						"type": "Number",
						"rawType": "DECIMAL(18,6)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2025-07-11",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"allotId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"sortOrderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "20250700012",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"deliveryType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"rdsId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isRds": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否是直进直出"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-07-11T06:22:57.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-07-11T06:22:57.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"concretePlanId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "混凝土计划通知单id"
					},
					"concretePlanCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "混凝土计划通知单编号"
					},
					"isToProduction": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否为生产组织发料单"
					},
					"insertFrom": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "区分对接数据"
					},
					"deliveryQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "发料总量(四局混凝土发料单用)"
					},
					"originalOrderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "原单据Id"
					},
					"originalOrderCode": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "原单据编号"
					},
					"gqId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工区id"
					},
					"gqName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工区名称"
					},
					"isVoid": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否作废"
					},
					"scrapReason": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "报废原因"
					},
					"methodHandle": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "废材处理方式"
					},
					"teamLeader": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "队长姓名"
					},
					"teamId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1928999913648151,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "队伍id"
					},
					"teamName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "河南惠辉建筑工程有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "队伍名称"
					},
					"deductType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "代扣款类型 0不扣款 1  代购扣款"
					},
					"receiveOriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "直收直发分解后收料oriOrderId"
					},
					"affirm": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "半成品过磅复称标记"
					},
					"oriSemiId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "原过磅复称orderId"
					},
					"recoveryName": {
						"type": "String",
						"rawType": "VARCHAR(521)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "回收单位名称"
					},
					"secondaryNum": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "二次发料次数"
					},
					"extendId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "引用发料扩展表主键"
					},
					"isApproved": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审批状态"
					},
					"supplementReason": {
						"type": "String",
						"rawType": "VARCHAR(1000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "补录原因"
					},
					"colVarchar_500No_01": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-01"
					},
					"colVarchar_500No_02": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-02"
					},
					"colVarchar_500No_03": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-03"
					},
					"colVarchar_500No_04": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-04"
					},
					"colVarchar_50No_01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar_50No_02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"materialTaker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "领料人"
					},
					"approvedState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "审批状态：无需审批0,审批完成1,审批终止2,审批中4"
					},
					"deliveryNo": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "送货单号"
					},
					"materialType": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "全部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"oriDeliveryId": {
						"type": "String",
						"rawType": "VARCHAR(125)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "第三方送货单id"
					},
					"contractId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同id"
					},
					"contractName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同名称"
					},
					"contractCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同Code"
					},
					"materialTakerPhone": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "领料人电话"
					},
					"stockbinFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"stockbinName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"stockbinId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"oriStockbinId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"message": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "日志信息"
					},
					"isMatched": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "匹配状态"
					},
					"failNum": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "自动匹配失败次数"
					},
					"failReason": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "匹配失败原因"
					},
					"colTinyint1No01": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-01"
					},
					"colTinyint1No02": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-02"
					},
					"colTinyint1No03": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-03"
					},
					"colTinyint1No04": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-04"
					},
					"deliveryMethod": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "送货方式"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colInt11No03": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-03"
					},
					"colInt11No04": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-04"
					},
					"colInt11No05": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-05"
					},
					"disatance": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号的小里程"
					},
					"colVarchar50No03": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "扩展字段50-3"
					},
					"colVarchar50No04": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "扩展字段50-4"
					},
					"planCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计划编号"
					},
					"planType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计划类型"
					},
					"planId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "计划id"
					},
					"deductReason": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "扣款原因"
					},
					"waybillCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "运单编号"
					},
					"waybillId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "运单id"
					},
					"supplementaryType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "1：商品混凝土"
					},
					"supplementaryMethod": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "1：商混运单补录 2：拌合站运单补录"
					}
				}
			},
			{
				"name": "qDeliveryExtend",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1541880705085952,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 843830043193856,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "梁渊博测试项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2023-06",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据日期"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "混凝土-20230600001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据编号"
					},
					"orderOrigin": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 2,
						"rawDefaultValue": "2",
						"primaryKey": false,
						"comment": "单据来源 0磅单,1代表[app,weapp], 2PC"
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 60,
						"rawDefaultValue": "60",
						"primaryKey": false,
						"comment": "业务类型 10发料,20调出,30外调,40PC报废,50磅单废旧物资出库,60砼签收,70钢筋签收,-1*(serviceType+1)退出库"
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": "4",
						"primaryKey": false,
						"comment": "操作类型 1冲红2补录3退料4普通"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2023-05-30",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单日期"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表备注"
					},
					"plateNumber": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "甘MM6050",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "车牌号"
					},
					"labourId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1242443490874371,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位编号"
					},
					"labourName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "常常常2",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位名称"
					},
					"teamId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1242443490874371,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "队伍id"
					},
					"teamName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "常常常2",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "队伍名称"
					},
					"ghId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 986811034791936,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号主键"
					},
					"ghFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "986811034791936",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号主键链"
					},
					"ghFullName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号全称"
					},
					"ghName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号名称"
					},
					"exitTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2023-05-30 17:22:40",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "出场时间"
					},
					"isRed": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否冲红"
					},
					"isAudit": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "提交"
					},
					"auditor": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交人"
					},
					"auditDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2023-05-30 17:24:34",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交时间"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接组织机构"
					},
					"oriLabourId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "【常用用料单位】预留"
					},
					"oriGhId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号第三方id"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2023-05-30",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"deliveryType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-05-30T09:24:35.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-05-30T09:24:34.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1541880707806211,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"colVarchar_500No_01": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-01"
					},
					"colVarchar_500No_02": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-02"
					},
					"colVarchar_500No_03": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-03"
					},
					"colVarchar_500No_04": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-04"
					},
					"materialTaker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "领料人"
					},
					"materialTakerPhone": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "领料人电话"
					},
					"deliveryId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表id"
					}
				}
			},
			{
				"name": "qDeliveryGpy",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 971366117347840,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1529093659750912,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1529077322043904,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表主键"
					},
					"gpyRemark": {
						"type": "String",
						"rawType": "VARCHAR(512)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"gpyPhotoUrl": {
						"type": "String",
						"rawType": "VARCHAR(512)",
						"allowNull": true,
						"defaultValue": "10001/common/mquantity/weight/971366117347840/20230512/25a3f9de2df84e6c8337c7c07e9ff8aa.jpg",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "照片路径"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(512)",
						"allowNull": true,
						"defaultValue": "25a3f9de-2df8-4e6c-8337-c7c07e9ff8aa",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传前id"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(512)",
						"allowNull": true,
						"defaultValue": "99904a68-5c92-45f1-8ab9-6f03f420a77f",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"externalUploadState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对外第三方对接上传状态"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-05-12T07:49:16.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-05-12T07:49:16.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1529093659750912,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"gpyType": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "高拍仪照片类型"
					},
					"fileStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 2,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "文件处理状态0:待处理,1:处理中,2:处理完成,3:处理失败"
					},
					"ossKey": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "10001/common/mquantity/weight/971366117347840/20230512/25a3f9de2df84e6c8337c7c07e9ff8aa.jpg",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "转存oss文件key"
					},
					"checkState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "巡检状态"
					},
					"fileType": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "文件类型"
					},
					"size": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "文件大小"
					}
				}
			},
			{
				"name": "qDeliveryMoreMaterial",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 664148376276992,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 664148374228992,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587557737304576,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 606706095157250,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0003",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "盘条",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "HPB300Φ6.5mm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主单位"
					},
					"auxiliaryUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "辅单位"
					},
					"classId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1625258619279360,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别id"
					},
					"classFullId": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别fullId"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接ORgId"
					},
					"itemBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "P20200106145226Saay",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据条形码"
					},
					"receivePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "收料单价"
					},
					"netQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "最终净值（决定是取地磅称重还是手填的净值）"
					},
					"conversionRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "转化率"
					},
					"deductRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扣率"
					},
					"deductQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扣吨"
					},
					"auxiliaryNetQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "辅单位净重"
					},
					"mainNetQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "净重主单位"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"isAccounted": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账状态"
					},
					"accountor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账人"
					},
					"accountDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账时间"
					},
					"accountOrderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账单的主键"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息varchar主键"
					},
					"oriClassId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别varchar主键"
					},
					"oriCommonId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息其他预留主键sV_Col5"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的主键"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"sortCode": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRed": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"submitDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2020-01-06",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"listSale": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"itemDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"externalUploadState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "hello world",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"oriItemRedId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲红材料原始id"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-01-06T06:53:35.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-01-06T11:43:40.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 664290955972608,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"summaryId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发料汇总id"
					},
					"isVoid": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否作废"
					},
					"returnQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "退发料量"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "库存量"
					},
					"rawOrderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "原发料单号"
					},
					"rawId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "原发料id"
					},
					"technicalRequest": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "技术要求"
					},
					"receiveAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "金额，单价乘出库数量"
					},
					"transMete": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "本车方量"
					},
					"weightCheckOffset": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "复核偏差"
					},
					"materialSpec": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料规格"
					},
					"colVarchar_50No_01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar_50No_02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"colVarchar_50No_03": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-03"
					},
					"colVarchar_50No_04": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-04"
					},
					"colBigint_20No_01": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-01"
					},
					"colBigint_20No_02": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-02"
					},
					"itemContractId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1625422996256768,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "合同id"
					},
					"itemContractCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "合同-00037",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "合同编号"
					},
					"reason": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "明细冲红原因"
					},
					"redRemark": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "明细冲红备注"
					},
					"ratioNo": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "新版配比编号"
					},
					"taxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "不含税单价"
					},
					"taxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "含税单价"
					},
					"deliveryPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "发料单价"
					},
					"deliverySum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "发料金额"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colInt11No03": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-03"
					},
					"colInt11No04": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-04"
					},
					"colInt11No05": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-05"
					},
					"isMatched": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "1",
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "匹配状态"
					},
					"operator": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "运算符,0:乘,1:除"
					},
					"colDecimal4No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-01"
					},
					"colDecimal4No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-02"
					},
					"colDecimal4No03": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-03"
					},
					"colDecimal4No04": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-04"
					},
					"colVarchar500No01": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-01"
					},
					"colVarchar500No02": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-02"
					},
					"colVarchar500No03": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-03"
					},
					"colVarchar500No04": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-04"
					},
					"colDecimal4No05": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-05"
					},
					"colDecimal4No06": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-06"
					},
					"caCheckStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "核对状态"
					},
					"settleQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "结算量"
					},
					"adjustReason": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "调整原因"
					},
					"pouringMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "浇筑方式"
					},
					"attritionRate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "约定损耗率"
					},
					"productionConsume": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "生产消耗"
					},
					"restConsume": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "其他消耗"
					},
					"usePurpose": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "使用用途"
					},
					"inspectionReport": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "检验报告号"
					},
					"deductType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否扣款: 1:代购扣款,2:代销扣款,3:正常发料"
					},
					"deductReason": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扣款原因"
					}
				}
			},
			{
				"name": "qDeliveryMoreOrder",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1162349543281152,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1615419541025280,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1342955240127488,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1162349543281152,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0002",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "qqqq",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "sfs sfs",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主单位"
					},
					"auxiliaryUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "辅单位"
					},
					"receivePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "收料单价"
					},
					"netQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 0.003,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "最终净值（决定是取地磅称重还是手填的净值）"
					},
					"length": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 6,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "钢筋根长(cm) 钢板长度(cm)"
					},
					"weight": {
						"type": "Number",
						"rawType": "DECIMAL(28,6)",
						"allowNull": true,
						"defaultValue": 3,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "钢筋存储总重(kg) 混凝土存储配比发料量(kg)"
					},
					"ratio": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 8,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "钢筋理论重量(kg/m) 钢板密度(g/cm3)"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "库存量"
					},
					"semiId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1615419541500928,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "半成品发料表主键"
					},
					"itemBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据条形码"
					},
					"typeMark": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "材料维度",
						"rawDefaultValue": "批次维度",
						"primaryKey": false,
						"comment": "材料/批次维度"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"sortCode": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-09-11T06:59:44.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-04-29T10:34:51.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1162349543281152,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"rebarCount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 6,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "钢筋根数 钢板数量"
					},
					"rebarType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "钢筋类型"
					},
					"width": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "材料宽度"
					},
					"thickness": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "材料厚度"
					},
					"materialType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "半成品材料类型 0 钢筋1钢板"
					},
					"designQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "设计量(钢筋构件)"
					},
					"shippedQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 0.0339,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "已供量(钢筋构件)"
					},
					"signQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "签收量"
					},
					"deliveryQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 6,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "发料量"
					},
					"applyId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "申请主表id"
					},
					"sumLength": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 0.36,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "总长"
					},
					"ratioCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "编号"
					},
					"ratioOrderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "构件库料单id"
					},
					"taxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "不含税单价"
					},
					"taxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "含税单价"
					},
					"deliveryPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "发料单价"
					},
					"deliverySum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "发料金额"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colInt11No03": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-03"
					},
					"colInt11No04": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-04"
					},
					"colInt11No05": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-05"
					},
					"materialSpec": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料规格"
					},
					"colVarchar_50No_01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar_50No_02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"colVarchar_50No_03": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-03"
					},
					"colVarchar_50No_04": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-04"
					},
					"colBigint_20No_01": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-01"
					},
					"colBigint_20No_02": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-02"
					},
					"colDecimal4No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-01"
					},
					"colDecimal4No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-02"
					},
					"usePurpose": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "使用用途"
					},
					"inspectionReport": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "检验报告号"
					},
					"deductType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否扣款: 1:代购扣款,2:代销扣款,3:正常发料"
					},
					"deductReason": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扣款原因"
					}
				}
			},
			{
				"name": "qDeliveryPhoto",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 612755971985408,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 612755971870720,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 441292771463168,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"cameraPosition": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "摄像机位置"
					},
					"photoType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "入场",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "照片类型（入场、出场）"
					},
					"cameraCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "摄像机编码"
					},
					"photoUrl": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "10001/mquantity/picture_1572020122216.jpg",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "照片路径"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传前id"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 452353557336064,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"externalUploadState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对外第三方对接上传状态"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2019-10-25T16:15:28.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2019-10-25T16:15:28.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 612755971985408,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"itemId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料照片对应的具体qDeliveryMoreMaterial表id"
					},
					"fileStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 3,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "文件处理状态0:待处理,1:处理中,2:处理完成,3:处理失败"
					},
					"ossKey": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "转存oss文件key"
					},
					"checkState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "巡检状态"
					},
					"fileType": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "文件类型"
					},
					"size": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "文件大小"
					}
				}
			},
			{
				"name": "qInventory",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1484458512290304,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"itemBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "H20230310141848WFMm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据条形码"
					},
					"eqCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "手持机编码"
					},
					"supplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1298232861612032,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商id"
					},
					"supplierName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "丁浩测试拌合站",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商名称"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1031608411158794,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "007001000019",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "膨化炸药",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "大包",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主单位"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 34,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "库存数量"
					},
					"auxiliaryUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "辅单位"
					},
					"classId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别id"
					},
					"classFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别主键链"
					},
					"oriSupplierId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预留对接主键字段【常用供应商】"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "007001-007001000019",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预留对接主键字段【常用材料】"
					},
					"oriClassId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预留对接主键字段【常用材料类别】"
					},
					"oriCommonId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预留对接主键字段【通用】"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"orderOrigin": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 2,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据来源 1代表app，2代表pda"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-03-10T06:18:50.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-03-10T06:18:50.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1484458512290304,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"idleRealUseQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "周转租赁领用数量"
					},
					"recordedTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "入库时间"
					},
					"materialType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "材料类型"
					},
					"preQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "待检库存"
					},
					"disQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "不合格品库存"
					}
				}
			},
			{
				"name": "qPurchaseOrder",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1342955240127488,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1922599280308736,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "徐环环测试项目部11",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-11",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账期"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "其他主材订单-20241100001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据编号"
					},
					"materialType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类型"
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-11-18",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "编制时间"
					},
					"buyerOrgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1342955240127488,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "买方id"
					},
					"buyerOrgName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "徐环环测试项目部11",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "买方名称"
					},
					"orderType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "其他主材",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "订单类型"
					},
					"origin": {
						"type": "String",
						"rawType": "VARCHAR(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "订单来源"
					},
					"supplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 587557737304576,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应单位Id"
					},
					"supplierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "测试2项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应单位"
					},
					"receiveLocation": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "收货地点",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "收货地点"
					},
					"receiver": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "收货人",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "收货人"
					},
					"receiverPhone": {
						"type": "String",
						"rawType": "VARCHAR(20)",
						"allowNull": true,
						"defaultValue": "18000000000",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "联系电话"
					},
					"acceptUser": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "接单人"
					},
					"acceptPhone": {
						"type": "String",
						"rawType": "VARCHAR(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "接单人电话"
					},
					"labourName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "上海常能集团有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位"
					},
					"labourId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1791058373128704,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位id"
					},
					"ghId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1600652162758144,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "使用部位id"
					},
					"ghName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "03-01",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "使用部位"
					},
					"ghFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "03|03-01",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "使用部位全称"
					},
					"ghFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号主键链"
					},
					"additionalFees": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 2222,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "附加费用(元)"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "单据备注",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据备注"
					},
					"orderStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": -2,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "订单状态"
					},
					"isAudit": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "提交状态"
					},
					"auditor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wnm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交人"
					},
					"auditDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-11-21 10:25:13",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交时间"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wnm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-11-21",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单时间"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 587559431238144,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wnm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 587559431238144,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wnm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-18T06:58:30.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-21T02:25:09.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"printTimes": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "打印次数"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1958823115141633,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"planCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计划编号"
					},
					"planId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计划id"
					}
				}
			},
			{
				"name": "qPurchaseOrderItem",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1342955240127488,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1922599283184128,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1922599280308736,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1266345942635008,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料主键"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "测试统计类单位1",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "千克",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计量单位"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 3,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "数量"
					},
					"usageTime": {
						"type": "String",
						"rawType": "VARCHAR(20)",
						"allowNull": true,
						"defaultValue": "2024-11-20 00:00:00",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预计使用时间"
					},
					"usageTimeEnd": {
						"type": "String",
						"rawType": "VARCHAR(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预计使用止日"
					},
					"technicalStandard": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "技术标准"
					},
					"storageLocation": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "7-11号架",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地"
					},
					"deliveryMethod": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "送货方式"
					},
					"stockbinFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地"
					},
					"stockbinId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "存放地id"
					},
					"slump": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "塌落度"
					},
					"pouringMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "浇筑方式"
					},
					"volume": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "砂浆方量 / 断面方(m³)"
					},
					"fixedQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "定额用量(kg/m³)"
					},
					"oriPlanItemId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "计划明细id"
					},
					"oriPlanId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "计划id"
					},
					"oriPlanCode": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "计划单据编号"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 587559431238144,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wnm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 587559431238144,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wnm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-18T06:58:30.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-21T02:25:09.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1924588293861888,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"acceptUser": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "项目联系人"
					},
					"acceptPhone": {
						"type": "String",
						"rawType": "VARCHAR(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "项目联系人电话"
					},
					"texture": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材质"
					},
					"monthQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "月采购计划量"
					},
					"purchasedQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "已采购量"
					}
				}
			},
			{
				"name": "qPurchasePlan",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 971365888684544,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构ID"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1769940413575680,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "杨周测试项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织名称"
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-04-16",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "入账时间"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "计划-采购-20240500001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据编号"
					},
					"sortOrderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "20240500001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据编号排序"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-05",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账期"
					},
					"planName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "笑啥",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计划名称"
					},
					"useProject": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "使用项目"
					},
					"purchaseMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "内部采购",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购方式"
					},
					"purchaseMethodFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "内部采购",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购方式全称"
					},
					"area": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "区域"
					},
					"declarationReasons": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "申报原因"
					},
					"totalAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合计金额"
					},
					"isSubmit": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "审核状态"
					},
					"submittor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "###",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交人"
					},
					"submitDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-04-16 22:33:16",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核时间"
					},
					"isApproved": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否审批通过1 驳回2 初始0"
					},
					"approveState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "审批状态"
					},
					"approver": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审批人"
					},
					"approveTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审批时间"
					},
					"approveResult": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审批结果（自采、集采）"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "###",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-04-16 22:33:13",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单时间"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方组织"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 761023283016704,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 761023283016704,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"makerPhone": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "18220537449",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人电话"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-04-16T14:33:15.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-04-16T14:33:16.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1769940429574656,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "初始状态"
					},
					"isOffer": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否询价"
					},
					"oriOfferId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "询价单id"
					},
					"isForward": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "采购计划是否转发"
					},
					"moduleType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "模块类型"
					},
					"pushStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "推送状态"
					},
					"pushDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送时间"
					},
					"pusher": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送人"
					},
					"purchaseDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购月份"
					}
				}
			},
			{
				"name": "qPurchasePlanExtend",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 629467277283840,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1251694738488320,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键、明细id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "陈寿莹测试项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "编制单位"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1251688308611584,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表id"
					},
					"orderOrgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 802408781492736,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表orgId"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "采20220400001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据编码"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 798724859392512,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-15T09:39:43.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "张宇",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 798724859392512,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "张宇",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-15T09:39:43.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1251694738488320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					}
				}
			},
			{
				"name": "qPurchasePlanItem",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构ID"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1253739788063744,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "单据ID"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1253739796427264,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1032194521233408,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料id"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "通用锂基润滑脂",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "桶",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单位"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "3#",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "型号"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0011",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "钢筋编号"
					},
					"classId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1009563279856128,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别id"
					},
					"classFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "1003352939115008|1003353265246720|1009468335018496|1009563279856128",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别主键链"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接材料"
					},
					"oriClassId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接类别id"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 12,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "需求数量"
					},
					"purchasePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预算单价"
					},
					"purchaseSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 12,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预算金额"
					},
					"startDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2022-04-14",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "需求时间起"
					},
					"endDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2022-04-14",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "需求时间止"
					},
					"storagePlace": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "交货地点（存放地）"
					},
					"deliveryStandard": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "23",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "交货状态级标准"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1132559099466752,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "fmf",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1132559099466752,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "fmf",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-18T07:00:24.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2022-04-18T07:00:24.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1253739796427264,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "初始状态"
					},
					"ghId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 807741142577664,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号主键"
					},
					"ghFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "qiao|仰拱",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "使用部位全称"
					},
					"ghName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "仰拱",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "使用部位"
					},
					"oriGhId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "741153169355776-647229872067072",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方工号id"
					},
					"planLabourName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位名称"
					},
					"planLabourId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位id"
					},
					"sourceType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "common",
						"rawDefaultValue": "common",
						"primaryKey": false,
						"comment": "选材来源"
					},
					"useQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "需用数量"
					},
					"inventoryQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "库存数量"
					},
					"reserveQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "储备数量"
					},
					"oriPlanId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "引用的计划id"
					},
					"emergencyQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "紧急数量"
					},
					"oriPlanCode": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计划单据编号"
					},
					"colVarchar50No01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar50No02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"colVarchar50No03": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-03"
					},
					"technicalStandard": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "技术标准"
					},
					"colVarchar500No01": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-01"
					},
					"colVarchar500No02": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-02"
					},
					"colVarchar2000No01": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-01"
					},
					"colVarchar2000No02": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-02"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colBigint20No01": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-01"
					},
					"colBigint20No02": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-02"
					},
					"colTinyint1No01": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-01"
					},
					"colTinyint1No02": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-02"
					},
					"colDecimal4No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-01"
					},
					"colDecimal4No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-02"
					},
					"oriPlanItemId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "计划明细id"
					}
				}
			},
			{
				"name": "qReceiveGpy",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 586892181115392,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 800794960310272,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 804302093300224,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表主键"
					},
					"gpyRemark": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "GPY27",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"gpyPhotoUrl": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "10001/mquantity/weight/a4a2eb813ac2492dad60abfb00fbbd23.jpg",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "照片路径"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "a4a2eb81-3ac2-492d-ad60-abfb00fbbd23",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传前id"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "4ca68232-f11b-441b-ad53-abfb00fba809",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "无名",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"externalUploadState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对外第三方对接上传状态"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-17T08:21:45.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2021-06-16T08:24:26.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1037197728978944,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"gpyType": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "高拍仪照片类型"
					},
					"fileStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 3,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "文件处理状态0:待处理,1:处理中,2:处理完成,3:处理失败"
					},
					"ossKey": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "转存oss文件key"
					},
					"checkState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "巡检状态"
					},
					"fileType": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "文件类型"
					},
					"size": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "文件大小"
					}
				}
			},
			{
				"name": "qReceiveLog",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1709428140743168,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "党蒲源测试项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "29468779-4774-431e-9e0e-8506acfd181f",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "磅单id"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "收料20240100040",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据编号"
					},
					"logTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-01-22 10:40:42",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "生成时间"
					},
					"msgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0A7E890500002A9F00000001199DA225",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "消息ID"
					},
					"isUpload": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否上传完成"
					},
					"errorType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "Error",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "日志类型"
					},
					"errorLog": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": "{\"name\":\"Error\",\"sql\":\"\",\"stack\":\"Error: 供应商信息不存在\\n    at throwError (/srv/mc/node/node_modules/@mctech/infra-core/src/assert.js:88:11)\\n    at Object.notNullOrUndefined (/srv/mc/node/node_modules/@mctech/infra-core/src/assert.js:25:7)\\n    at Object.queryBaseInfoOriId (/srv/mc/node/src/service/c-base-info-service.js:235:15)\\n    at constructDataModel (/srv/mc/node/src/handler/weight-receive-v3-handler.js:245:20)\\n    at saveQReceiveV3 (/srv/mc/node/src/handler/weight-receive-v3-handler.js:34:27)\\n    at saveQReceive (/srv/mc/node/src/handler/weight-receive-handler.js:21:14)\\n    at /srv/mc/node/src/handler/weight-receive-handler.js:128:5\\n    at module.exports (/srv/mc/node/src/handler/weight-receive-handler.js:51:3)\\n    at Object.process (/srv/mc/node/src/mq/registerMq.js:34:7)\\n    at /srv/mc/node/node_modules/@mctech/infra-mq/src/mq.js:70:21\\n    at OnsConsumerWrapper.process (/srv/mc/node/node_modules/@mctech/infra-mq/src/mq.js:56:20)\\n    at ConsumeMessageOrderlyService.listener [as _messageListener] (/srv/mc/node/node_modules/@mctech/infra-mq/src/ons/ons-mq.js:136:7)\\n    at ConsumeMessageOrderlyService.submitConsumeRequest (/srv/mc/node/node_modules/@mctech/ali-ons/lib/consumer/consume-message-orderly-service.js:162:22)\\n    at async Promise.all (index 0)\\n    at MQPushConsumer._consumeMessageLoop (/srv/mc/node/node_modules/@mctech/ali-ons/lib/consumer/mq_push_consumer.js:307:15)\\n    at MQPushConsumer._consumeTopic (/srv/mc/node/node_modules/@mctech/ali-ons/lib/consumer/mq_push_consumer.js:275:9)\",\"message\":\"供应商信息不存在\"}",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "错误日志详情"
					},
					"content": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": "{\"qReceive\":{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"orgName\":\"党蒲源测试项目部\",\"recordedDate\":\"2024-01-22\",\"orderDate\":\"2024-01\",\"orderCode\":\"收料20240100040\",\"serviceType\":10,\"orderType\":4,\"weightType\":\"进料过磅\",\"materialCollection\":\"\",\"maker\":\"超级管理员\",\"makerDate\":\"2024-01-22\",\"remark\":\"\",\"printTimes\":0,\"plateNumber\":\"新AH5678\",\"oriSupplierId\":\"19876220-a44a-4920-abdc-0afffb99c0fe\",\"supplierName\":\"综合供应商\",\"oriLabourId\":\"\",\"labourName\":\"\",\"oriGhId\":\"\",\"ghFullId\":\"\",\"ghFullName\":\"\",\"ghName\":\"\",\"enterTime\":\"2024-01-22 10:29:22\",\"exitTime\":\"2024-01-22 10:29:26\",\"isRed\":false,\"isAudit\":true,\"auditor\":\"超级管理员\",\"auditDate\":\"2024-01-22\",\"orgId\":587089923772928,\"supplierId\":934606640844800,\"ghId\":0,\"labourId\":0,\"oriRedId\":\"\",\"discernPlateNumber\":\"\",\"stockbinFullName\":\"\",\"stockbinName\":\"\",\"oriStockbinId\":\"\",\"stockbinId\":0,\"isExit\":true,\"isTare\":false,\"roughQuantity\":59.617,\"tareQuantity\":49.291,\"deductRate\":0,\"deductQuantity\":0,\"auxiliaryNetQuantity\":10.33,\"oriNetQuantity\":0,\"isAffirm\":false,\"isUseOriNetQuantity\":false,\"sortOrderCode\":\"20240100040\",\"isReturn\":false,\"isRemoved\":false,\"versionCode\":\"v3.0\",\"isMultiplication\":\"false\",\"clientVersion\":\"3.7.2\",\"discernMode\":\"0\",\"isSplit\":false,\"rdsId\":\"\",\"settlementName\":\"\",\"settlementId\":0,\"purchaseMethod\":\"\",\"purchaseMethodFullName\":\"\",\"teamName\":\"\",\"teamLeader\":\"\",\"teamId\":0},\"qReceiveMoreMaterials\":[{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"0ee763b1-d053-4707-a7a4-ac8adb0ebd12\",\"oriMaterialId\":\"1307dd8e-0762-4e6e-a77e-54065d2a8097\",\"materialCode\":\"00001\",\"materialName\":\"速凝剂\",\"materialModel\":\"zb-6\",\"materialUnit\":\"吨\",\"auxiliaryUnit\":\"吨\",\"oriClassId\":null,\"classFullId\":null,\"netQuantity\":10.33,\"conversionRate\":1,\"oriNetQuantity\":0,\"mainNetQuantity\":10.33,\"remark\":null,\"materialId\":591154085111493,\"classId\":0,\"itemBarCode\":\"W2024012210292289YP\",\"orgId\":0,\"oriItemRedId\":null,\"isRed\":false,\"isRemoved\":false,\"storagePlace\":null,\"stockbinFullName\":null,\"stockbinId\":null,\"deductQuantity\":0,\"labDeductQuantity\":0,\"labDeductRate\":0,\"manufacturer\":\"\",\"batchNo\":\"\",\"testReportNo\":\"\",\"qualityCertificate\":\"\",\"acceptanceRecord\":\"\",\"purchaseMethods\":\"\",\"purchaseMethodFullNames\":\"\"}],\"qReceivePhotos\":[{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"0ae89dd7-8901-40be-9fb8-f45c04c85bef\",\"cameraPosition\":\"车顶\",\"photoType\":\"入场\",\"cameraCode\":\"03\",\"photoUrl\":\"weight/923227841884672/20240122/0ae89dd7890140be9fb8f45c04c85bef.jpg\",\"isRemoved\":false},{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"38cc39af-96e4-4b11-ab4b-13e5448db70b\",\"cameraPosition\":\"车尾\",\"photoType\":\"出场\",\"cameraCode\":\"02\",\"photoUrl\":\"weight/923227841884672/20240122/38cc39af96e44b11ab4b13e5448db70b.jpg\",\"isRemoved\":false},{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"422c47f7-9e6b-4414-b34a-e97ef311318b\",\"cameraPosition\":\"磅房\",\"photoType\":\"出场\",\"cameraCode\":\"04\",\"photoUrl\":\"weight/923227841884672/20240122/422c47f79e6b4414b34ae97ef311318b.jpg\",\"isRemoved\":false},{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"5e321e59-27f3-4f57-b655-558d7c4a89a8\",\"cameraPosition\":\"磅房\",\"photoType\":\"入场\",\"cameraCode\":\"04\",\"photoUrl\":\"weight/923227841884672/20240122/5e321e5927f34f57b655558d7c4a89a8.jpg\",\"isRemoved\":false},{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"6d137ed3-3d33-4343-b230-27eca8865109\",\"cameraPosition\":\"车前\",\"photoType\":\"入场\",\"cameraCode\":\"01\",\"photoUrl\":\"weight/923227841884672/20240122/6d137ed33d334343b23027eca8865109.jpg\",\"isRemoved\":false},{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"b1150c07-f231-496d-bc88-57ede3a0a747\",\"cameraPosition\":\"车前\",\"photoType\":\"出场\",\"cameraCode\":\"01\",\"photoUrl\":\"weight/923227841884672/20240122/b1150c07f231496dbc8857ede3a0a747.jpg\",\"isRemoved\":false},{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"dac17458-a8de-462f-b272-9722092a99e3\",\"cameraPosition\":\"车尾\",\"photoType\":\"入场\",\"cameraCode\":\"02\",\"photoUrl\":\"weight/923227841884672/20240122/dac17458a8de462fb2729722092a99e3.jpg\",\"isRemoved\":false},{\"oriOrgId\":\"21a76bcb-c097-46c7-84f2-fb20134399a4\",\"oriOrderId\":\"29468779-4774-431e-9e0e-8506acfd181f\",\"oriItemId\":\"e1cf84d8-031d-49c5-943e-059335ac2a4d\",\"cameraPosition\":\"车顶\",\"photoType\":\"出场\",\"cameraCode\":\"03\",\"photoUrl\":\"weight/923227841884672/20240122/e1cf84d8031d49c5943e059335ac2a4d.jpg\",\"isRemoved\":false}],\"qReceiveGpys\":[],\"qReceiveVehicles\":[],\"isComplex\":true}",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "消息体"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "3.7.2",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-01-22T02:40:42.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-07-02T01:45:28.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1709428140743168,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"ip": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "10.126.184.189",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "IP地址"
					},
					"hostName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "node-mq-weight-consumer-7d88bb7947-x4vsw",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主机地址"
					},
					"handleTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-07-02 09:45:28",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "处理时间"
					},
					"isHandle": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否处理标识"
					},
					"resource": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "qReceive",
						"rawDefaultValue": "qReceive",
						"primaryKey": false,
						"comment": "业务qReceive"
					}
				}
			},
			{
				"name": "qReceiveMoreMaterial",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1484458506441216,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1484458506031616,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表主键"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1031608411158794,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "007001000019",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "膨化炸药",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "大包",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主单位"
					},
					"auxiliaryUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "辅单位"
					},
					"classId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别id"
					},
					"classFullId": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别fullId"
					},
					"manufacturer": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "生产厂商"
					},
					"batchNo": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "炉批号"
					},
					"testReportNo": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实验报告号"
					},
					"netQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 34,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "最终净值（决定是取地磅称重还是手填的净值）"
					},
					"roughQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "毛重"
					},
					"conversionRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "转化率"
					},
					"deductRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扣率"
					},
					"deductQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扣吨"
					},
					"oriNetQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "原始净重"
					},
					"auxiliaryNetQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "辅单位净重"
					},
					"mainNetQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "净重主单位"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "007001-007001000019",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息varchar主键"
					},
					"oriClassId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类别varchar主键"
					},
					"oriCommonId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息其他预留主键sV_Col5"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的主键"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"itemBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "H20230310141848WFMm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isAccounted": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"accountor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"accountDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"accountOrderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"storagePlace": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"skillCardNo": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isNew": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"receivePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"sortCode": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"waybillWeight": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRed": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"submitDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2023-03-10",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"taxRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 13,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"taxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"taxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"taxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"taxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"taxAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"accountQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"itemDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"checkState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"externalUploadState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"oriItemRedId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"qualityCertificate": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"acceptanceRecord": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"priceType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "价格类型,合同价调查价"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-03-10T06:18:49.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2023-03-10T06:18:49.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1484458506441216,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"stockbinFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地"
					},
					"stockbinId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "存放地id"
					},
					"oriStockbinId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地第三方id"
					},
					"summaryId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "收料汇总id"
					},
					"freight": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "运费"
					},
					"isVoid": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否作废"
					},
					"checkStateEg": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "核对状态 0未核对  1已核对"
					},
					"isAccountedEg": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账状态"
					},
					"accountOrderIdEg": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账单号ID"
					},
					"isCode": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "数据是否从码单来"
					},
					"oriPlanId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "采购计划id"
					},
					"typeMark": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "批次维度",
						"rawDefaultValue": "批次维度",
						"primaryKey": false,
						"comment": "原发料id"
					},
					"pushState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "推送状态"
					},
					"pushFailReason": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送失败原因"
					},
					"pushTime": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送时间"
					},
					"technicalRequest": {
						"type": "String",
						"rawType": "VARCHAR(1000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "技术要求"
					},
					"declarationState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "报验情况"
					},
					"labDeductRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实验室测定扣率"
					},
					"labDeductQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实验室测定扣重"
					},
					"purchaseMethods": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购方式"
					},
					"purchaseMethodFullNames": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购方式全称"
					},
					"diffRemark": {
						"type": "String",
						"rawType": "VARCHAR(200)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "调差备注"
					},
					"accTaxRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账税率"
					},
					"accTaxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账单价"
					},
					"accDeductQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账扣吨"
					},
					"accDeductRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账扣率"
					},
					"originalOrgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "原条码orgId"
					},
					"receiveType": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "单据类型"
					},
					"itemContractId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "合同id"
					},
					"itemContractCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "合同编号"
					},
					"materialSpec": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料规格"
					},
					"colVarchar_50No_01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar_50No_02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"colVarchar_50No_03": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-03"
					},
					"colVarchar_50No_04": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-04"
					},
					"colBigint_20No_01": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-01"
					},
					"colBigint_20No_02": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-02"
					},
					"colDecimal_8No_01": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "精准数据类型-8-01"
					},
					"colDecimal_8No_02": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "精准数据类型-4-02"
					},
					"reason": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "明细冲红原因"
					},
					"redRemark": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "明细冲红备注"
					},
					"detailRemark": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "明细备注"
					},
					"accTaxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账不含税单价"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colInt11No03": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-03"
					},
					"colInt11No04": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-04"
					},
					"colInt11No05": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-05"
					},
					"colVarchar_50No_05": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "字符串50-05"
					},
					"colVarchar_50No_06": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "字符串50-06"
					},
					"isMatched": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "1",
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "匹配状态"
					},
					"operator": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "运算符,0:乘,1:除"
					},
					"quantityComputation": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "数量计算依据"
					},
					"appearance": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "外观"
					},
					"appearanceRemark": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "外观补充内容"
					},
					"packaging": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "包装"
					},
					"warrantyCertificate": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "质保书"
					},
					"inspectionReport": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "检测报告"
					},
					"offsetQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "偏差量"
					},
					"offsetUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "偏差单位"
					},
					"offsetRes": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "偏差结果"
					},
					"offsetMin": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "偏差范围下限"
					},
					"offsetMax": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "偏差范围上限"
					},
					"oriPlanItemId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "计划明细id"
					},
					"oriPlanCode": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "计划单据编号"
					},
					"chooseOrigin": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "选材来源：0-无，1-采购计划，2-临时计划，3-周转需用计划"
					},
					"colTinyint1No01": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-01"
					},
					"colTinyint1No02": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-02"
					},
					"colTinyint1No03": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-03"
					},
					"colTinyint1No04": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-04"
					},
					"isHasCamera": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否有摄像头"
					},
					"materialType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类型"
					},
					"pouringMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "浇筑方式"
					},
					"caCheckStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "商混核对状态"
					},
					"caSettleQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "商混结算量"
					},
					"caAdjustReason": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "调整原因"
					},
					"attritionRate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "约定损耗率"
					},
					"productionConsume": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "生产消耗"
					},
					"restConsume": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "其他消耗"
					},
					"theoreticalQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "理论量"
					},
					"rebarLength": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "钢筋尺寸"
					},
					"pieceCount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "件数"
					},
					"quantityPerPiece": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "每件根数"
					}
				}
			},
			{
				"name": "qReceivePhoto",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1873110601946624,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1873110601635328,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表主键"
					},
					"cameraPosition": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "运单",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "摄像机位置"
					},
					"photoType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "入场",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "照片类型（入场、出场）"
					},
					"cameraCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "摄像机编码"
					},
					"photoUrl": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "10001/common/mquantity/21b16960-e153-41e5-b614-a3a17083a063.png",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "照片路径"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传前id"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"externalUploadState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对外第三方对接上传状态"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-09-09T08:53:32.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-09-09T08:53:32.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1873110601946624,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"itemId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料照片对应的具体qReceiveMoreMaterial表id"
					},
					"fileStatus": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 2,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "文件处理状态0:待处理,1:处理中,2:处理完成,3:处理失败"
					},
					"ossKey": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "10001/common/mquantity/21b16960-e153-41e5-b614-a3a17083a063.png",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "转存oss文件key"
					},
					"checkState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "巡检状态"
					},
					"fileType": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "binary/octet-stream",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "文件类型"
					},
					"size": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "18492",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "文件大小"
					}
				}
			},
			{
				"name": "qReceiveSignature",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 441292771463168,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 602408386433536,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 602408382321152,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主表主键"
					},
					"signatureType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "1",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "签名人1、2、3、4"
					},
					"photoUrl": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "pda/signature_1094F732-64D7-4663-903C-C37AF5902899",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "照片路径"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "b99f6997-1b51-4e49-87be-e6e6e73cc14a",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传前id"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "1094f732-64d7-4663-903c-c37af5902899",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2019-10-11T01:23:15.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2019-10-11T01:23:15.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 602408386433536,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"externalUploadState": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传状态"
					},
					"signersName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "签字人姓名"
					},
					"signersId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "签字人id"
					}
				}
			}
		]
	},

	{
		dbName: 'global_ma',
		tables: [
			{
				"name": "mDeliverySummary",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码主键"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 609531394904064,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1919995388604928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "张梓浈专用",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-11",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单据日期"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "发料汇总-20241100001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "处理编号"
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-11-14",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账期日"
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "业务类型（新增） 发料（10） 内调（20） 外调（30） 报废 （40） 发退（-11） 内退（-21） 外退（-31）"
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "操作类型默认值  -1冲红（不考虑预点） 2补录 4正常"
					},
					"labourName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位名称"
					},
					"labourId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位Id"
					},
					"isDeduct": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否扣款"
					},
					"bookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 8891.53,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "核算金额"
					},
					"lssueSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 8891.53,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发料金额"
					},
					"difference": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "差额"
					},
					"financialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "机构ID（财务编码）"
					},
					"settlementAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "本次发出金额"
					},
					"accSettlementAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "开累发出金额"
					},
					"isPush": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否业务推送"
					},
					"isSubmit": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否提交"
					},
					"submitor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交人"
					},
					"submitDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交时间"
					},
					"approvedState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审批状态"
					},
					"approvedNumber": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审批记录值"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-11-20 15:13:51",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单时间"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "机构对接"
					},
					"oriLabourId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "机构对接"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 586973516591616,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "张梓浈",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-14T14:40:52.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 591107012792320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-20T07:14:01.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1924022480654848,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					},
					"isPushed": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否给财务推送"
					},
					"pushedNum": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "推送次数"
					},
					"errMsg": {
						"type": null,
						"rawType": "TEXT",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送错误信息"
					},
					"isProductionOrg": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否生产组织发料"
					},
					"printTimes": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "打印次数"
					},
					"btypeId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "往来单位id"
					},
					"btypeName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "往来单位名称"
					},
					"oriBtypeId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "三方往来单位id"
					},
					"btypeRemark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "往来单位修改备注"
					},
					"financeOrgId": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "财务组织id"
					},
					"financeOrgName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "财务组织名称"
					},
					"financeProjectId": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "财务项目id"
					},
					"financeProjectName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "财务项目名称"
					},
					"detailPushState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "详情推送状态"
					}
				}
			},
			{
				"name": "mDeliverySummaryItem",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码主键"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 609531394904064,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1919995389039104,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1919995388604928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键"
					},
					"deliveryOrderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1830635117367808,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发料单id"
					},
					"deliveryOrderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "发料-20240700007",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发料单编号"
					},
					"deliveryMaker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"deliveryMakerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-07-11 16:36:54",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单日期"
					},
					"deliveryRecorderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-07-11 16:36:39",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "出库时间"
					},
					"bookPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "核算价"
					},
					"bookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 3156.61,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "核算金额"
					},
					"lssuePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发料价"
					},
					"lssueSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 3156.61,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发料金额"
					},
					"difference": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "差额"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 586973516591616,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "张梓浈",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-14T14:40:52.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 591107012792320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-11-20T07:14:01.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1924022480212480,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"itemRemark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"materialType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "发料",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料类型"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "张梓浈专用",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "项目名称"
					},
					"labourId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1745151726417408,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位id"
					},
					"labourName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "宿州市得亿商贸有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "用料单位名称"
					},
					"ghId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1390236544242688,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号单位id"
					},
					"ghName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "太行一号旅游公路武乡县砖壁至太行龙洞至板山段",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工号单位名称"
					},
					"deliveryAuditor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交人"
					},
					"deliveryAuditDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-07-11 16:36:56",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提交时间"
					},
					"btypeId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "往来单位id"
					},
					"btypeName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "往来单位名称"
					},
					"oriBtypeId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "三方往来单位id"
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "业务类型"
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "操作类型"
					}
				}
			},
			{
				"name": "mInventory",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1992048415872512,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"storeId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "来源ID"
					},
					"supplierName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "宿州市得亿商贸有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商名称"
					},
					"supplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1745151726417408,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商Id"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2025-02-24 17:52:31",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "入账时间"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1032293216753664,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "00002",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "预拌混凝土",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "C15",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主单位"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 878.963,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "数量"
					},
					"useQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "已发数量"
					},
					"bookPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 3858.40707965,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账面价"
					},
					"bookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 3391397.06,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账面金额"
					},
					"useBookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "已发账面金额"
					},
					"itemBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "WZ20250224175307jOcx",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "条码"
					},
					"storeRoomId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 974154372395521,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目ID"
					},
					"storeRoomName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "包装材料",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目"
					},
					"storeRoomFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "包装材料",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目全称"
					},
					"manufacturer": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "生产厂商"
					},
					"batchNo": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "炉批号"
					},
					"storageRoom": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地"
					},
					"itemRemark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息varchar主键"
					},
					"oriCommonId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息其他预留主键sV_Col5"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"taxDeduction": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否扣税"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-02-24T09:53:08.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-02-24T09:53:08.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1992048415872512,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"prepointState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "预点状态"
					},
					"prepointCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预点单号"
					},
					"diffBookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "调差金额"
					},
					"useDiffBookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发调差金额"
					},
					"colVarchar50No01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar50No02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"colVarchar500No01": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-01"
					},
					"colVarchar500No02": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-02"
					},
					"colVarchar500No03": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-03"
					},
					"colVarchar500No04": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-04"
					},
					"colVarchar2000No01": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-01"
					},
					"colVarchar2000No02": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-02"
					},
					"colVarchar2000No03": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-03"
					},
					"colVarchar2000No04": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-04"
					},
					"colVarcharMaxNo01": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串max-03"
					},
					"colVarcharMaxNo02": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串max-04"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colInt11No03": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-03"
					},
					"colInt11No04": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-04"
					},
					"colInt11No05": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-05"
					},
					"colBigint20No01": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-01"
					},
					"colBigint20No02": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-02"
					},
					"colTinyint1No01": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-01"
					},
					"colTinyint1No02": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-02"
					},
					"colTinyint1No03": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-03"
					},
					"colTinyint1No04": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-04"
					},
					"colDecimal4No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-01"
					},
					"colDecimal4No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-02"
					},
					"colDecimal8No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-8-01"
					},
					"colDecimal8No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-8-02"
					},
					"invoiceType": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发票类型"
					}
				}
			},
			{
				"name": "mReceiveOrder",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1806590800015872,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "专用测试项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-06",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "签订日期"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "收料-20240600001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "签订日期"
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-06-07 17:18:25",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "入账时间"
					},
					"supplierName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "测试客商20220314",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商名称"
					},
					"supplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1228786283565568,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商Id"
					},
					"contractId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1232393506361856,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同名称"
					},
					"contractCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "3333",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同Code"
					},
					"purchaseMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "甲供",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购方式"
					},
					"settlementMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "往来结算",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "结算方式"
					},
					"invoiceNumber": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发票号"
					},
					"taxDeduction": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否扣税"
					},
					"totalAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1000,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合计金额"
					},
					"orderDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预点单ID 冲预点的时候会存值"
					},
					"orderDataCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "预点单号"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"makerDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2024-06-07 17:18:37",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单时间"
					},
					"isAudit": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "审核状态"
					},
					"auditor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核人"
					},
					"auditDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2025-02-24 17:49:07",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审核时间"
					},
					"oriSupplierId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商对接"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "机构对接"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接收料单ID"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRefund": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isRush": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isSummary": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"taxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合计含税金额"
					},
					"taxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合计不含税金额"
					},
					"orderNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "20240600001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"purchaseMethodFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"printTimes": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "打印次数"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-06-07T09:18:39.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-02-24T09:49:12.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1992046483895808,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"isPushed": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否给财务推送"
					},
					"pushedNum": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "推送次数"
					},
					"errMsg": {
						"type": null,
						"rawType": "TEXT",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "推送错误信息"
					},
					"isReceive": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否合同点收"
					},
					"isInvoicePretest": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "仅无发票预点"
					},
					"taxRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税率"
					},
					"isTurn": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否转正常点收 未转0 转1"
					},
					"contType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否合同预点"
					},
					"sourceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "来源类型"
					},
					"refundState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "退货状态"
					},
					"rushState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "冲红状态"
					},
					"approvedState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否审批通过1 驳回2 初始0"
					},
					"recordSource": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "587089923772928",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账来源"
					},
					"rushPointState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "冲预点状态 未冲0 部分已冲1 全部已冲2"
					},
					"contractName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "33333",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同名称"
					},
					"contractExecuteRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同执行比例"
					},
					"supplyModes": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应模式全称"
					},
					"supplyModesFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应模式全称"
					},
					"orderRecordSourceId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账来源id"
					},
					"orderRecordSourceName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账来源名称"
					},
					"orderStoreRoomName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目名称"
					},
					"orderStoreRoomFullName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目全称"
					},
					"orderStoreRoomId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目id"
					},
					"orderRealitySupplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供料单位id"
					},
					"orderRealitySupplierName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供应单位"
					},
					"colVarchar50No01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar50No02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"colVarchar500No01": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-01"
					},
					"colVarchar500No02": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-02"
					},
					"colVarchar500No03": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-03"
					},
					"colVarchar500No04": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-04"
					},
					"colVarchar2000No01": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-01"
					},
					"colVarchar2000No02": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-02"
					},
					"colVarchar2000No03": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-03"
					},
					"colVarchar2000No04": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-04"
					},
					"colVarcharMaxNo01": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串max-03"
					},
					"colVarcharMaxNo02": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串max-04"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colInt11No03": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-03"
					},
					"colInt11No04": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-04"
					},
					"colInt11No05": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-05"
					},
					"colBigint20No01": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-01"
					},
					"colBigint20No02": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-02"
					},
					"colTinyint1No01": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-01"
					},
					"colTinyint1No02": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-02"
					},
					"colTinyint1No03": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-03"
					},
					"colTinyint1No04": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-04"
					},
					"colDecimal4No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-01"
					},
					"colDecimal4No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-02"
					},
					"colDecimal8No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-8-01"
					},
					"colDecimal8No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-8-02"
					},
					"isCommon": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "普通模式数据标记"
					},
					"invoiceType": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "发票类型"
					},
					"detailPushState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "详情推送状态"
					}
				}
			},
			{
				"name": "mReceiveOrderItem",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1806590800204288,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1806590800015872,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键"
					},
					"itemDataType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "选材来源"
					},
					"itemDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1806590621176320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "来源ID"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1032193259960320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "直流电动警报器",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "XJ124/60",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "台",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主单位"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 100,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "数量"
					},
					"taxRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 13,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税率"
					},
					"taxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "不含税单价"
					},
					"taxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1000,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "不含税金额"
					},
					"taxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 11.3,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "含税单价"
					},
					"taxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1130,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "含税金额"
					},
					"taxAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 130,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税额"
					},
					"bookPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账面价"
					},
					"bookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 1000,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "账面金额"
					},
					"difference": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "差额"
					},
					"itemBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "WZ20240607171838wp8c",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "条码"
					},
					"storeRoomId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 974154372395521,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目ID"
					},
					"storeRoomName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "包装材料",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目"
					},
					"storeRoomFullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "包装材料",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "成本科目全称"
					},
					"manufacturer": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "生产厂商"
					},
					"batchNo": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "炉批号"
					},
					"storageRoom": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地"
					},
					"itemRemark": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息varchar主键"
					},
					"oriCommonId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料信息其他预留主键sV_Col5"
					},
					"oriItemId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的主键"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上传之前的order主键"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1213988792489472,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "x",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRefund": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isRush": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "状态（普通模式下冲红或冲预点状态标记）1(冲红) 2(冲预点)"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-06-07T09:18:39.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-02-24T09:49:12.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1992046483707392,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"qBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实物原始条码"
					},
					"checkOrderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账单单号"
					},
					"realitySupplierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "测试客商20220314",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供应商名称"
					},
					"realitySupplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1228786283565568,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供应商id"
					},
					"oriRealitySupplierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供应商名称"
					},
					"priceType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "价格类型"
					},
					"checkId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "1806590621176320",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账id"
					},
					"orderDataId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "来源单据id"
					},
					"orderDataCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "来源单据code"
					},
					"refundState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "退货状态"
					},
					"rushState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "冲红状态"
					},
					"purchaseMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "甲供",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "采购方式"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "明细备注"
					},
					"recordSourceId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账来源id"
					},
					"recordSourceName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "专用测试项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账来源名称"
					},
					"returnRemark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "退货明细备注"
					},
					"typeMark": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "类型识别"
					},
					"taxDeductionItem": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否扣税"
					},
					"rushPointState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "冲预点状态 未冲0 部分已冲1 全部已冲2"
					},
					"rushPointQuantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点数量"
					},
					"rushTaxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点不含税单价"
					},
					"rushTaxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点不含税金额"
					},
					"rushTaxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点含税单价"
					},
					"rushTaxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点含税金额"
					},
					"rushTaxAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点税额"
					},
					"rushBookPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点账面价"
					},
					"rushBookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点账面金额"
					},
					"rushDifference": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "冲预点差额"
					},
					"diffTaxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "调差不含税金额"
					},
					"diffTaxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "调差含税金额"
					},
					"diffBookSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "调差账面金额"
					},
					"supplyModes": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应模式"
					},
					"colVarchar50No01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-01"
					},
					"colVarchar50No02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串50-02"
					},
					"colVarchar500No01": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-01"
					},
					"colVarchar500No02": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-02"
					},
					"colVarchar500No03": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-03"
					},
					"colVarchar500No04": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串500-04"
					},
					"colVarchar2000No01": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-01"
					},
					"colVarchar2000No02": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-02"
					},
					"colVarchar2000No03": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-03"
					},
					"colVarchar2000No04": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串2000-04"
					},
					"colVarcharMaxNo01": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串max-03"
					},
					"colVarcharMaxNo02": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符串max-04"
					},
					"colInt11No01": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-01"
					},
					"colInt11No02": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-02"
					},
					"colInt11No03": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-03"
					},
					"colInt11No04": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-04"
					},
					"colInt11No05": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整数-05"
					},
					"colBigint20No01": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-01"
					},
					"colBigint20No02": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "整型-主键类-02"
					},
					"colTinyint1No01": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-01"
					},
					"colTinyint1No02": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-02"
					},
					"colTinyint1No03": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-03"
					},
					"colTinyint1No04": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "布尔型-04"
					},
					"colDecimal4No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-01"
					},
					"colDecimal4No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-4-02"
					},
					"colDecimal8No01": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-8-01"
					},
					"colDecimal8No02": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "精准数据类型-8-02"
					}
				}
			},
			{
				"name": "mReconciliation",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1170094468583936,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "专用测试项目部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"recordedDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2021-12-21",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "入账时间"
					},
					"orderCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "对账-20211200001",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单号"
					},
					"supplierName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": "ddddwwww",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商名称"
					},
					"supplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 889211087041024,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商Id"
					},
					"oriSupplierId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "供应商对接"
					},
					"oriOrgId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方组织"
					},
					"oriOrderId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方主键"
					},
					"accountor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账人"
					},
					"accountTim": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2021-12-21 10:43:22",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对账时间"
					},
					"accountState": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账状态"
					},
					"maker": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "制单人"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 591107012792320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 591107012792320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"orderDate": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "2021-12",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"entryState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"printTimes": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "打印次数"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2021-12-21T02:43:23.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2021-12-21T02:43:23.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1170094468583936,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"checkWay": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "对账方式"
					},
					"contractId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同名称"
					},
					"contractCode": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同Code"
					},
					"contractName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同名称"
					},
					"taxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 4306.79,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "不含税金额"
					},
					"taxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 4866.67,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "含税金额"
					},
					"taxAmount": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 559.88,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税额"
					},
					"approvedState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否审批通过1 驳回2 初始0"
					},
					"signState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "签章状态 已签1 不签2 初始0"
					},
					"contractExecuteRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同执行比例"
					},
					"materialType": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "材料类型"
					},
					"priceType": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": "",
						"rawDefaultValue": "",
						"primaryKey": false,
						"comment": "价格类型"
					}
				}
			},
			{
				"name": "mReconciliationItem",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 587089923772928,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "组织机构主键"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1170094468895232,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键id"
					},
					"orderId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1170094468583936,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主表主键id"
					},
					"orgName": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织机构名称"
					},
					"serviceType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 10,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "业务类型 0代表调入（20） 1代表收料（10） 调入退（-21） 收料退（-11）"
					},
					"orderType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 4,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "操作类型默认值  1冲红（-1）2补录3退料（去掉）4正常"
					},
					"materialId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1032193629042688,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "主材主键"
					},
					"materialCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "0006",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"materialName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "方钢",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"materialModel": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "吨",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格型号"
					},
					"materialUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "热轧 Q235 18mm",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单位"
					},
					"quantity": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 100,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "数量"
					},
					"taxRate": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 13,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税率"
					},
					"taxFreePrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 22.7139,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "不含税单价"
					},
					"taxFreeSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 2271.39,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "不含税金额"
					},
					"taxIncludedPrice": {
						"type": "Number",
						"rawType": "DECIMAL(28,8)",
						"allowNull": true,
						"defaultValue": 25.6667,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "含税单价"
					},
					"taxIncludedSum": {
						"type": "Number",
						"rawType": "DECIMAL(28,4)",
						"allowNull": true,
						"defaultValue": 2566.67,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "含税金额"
					},
					"manufacturer": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "生产厂商"
					},
					"batchNo": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "炉批号"
					},
					"storagePlace": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "存放地"
					},
					"infoRemark": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料备注"
					},
					"orderBarCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "WZPC1170094468895234",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "条码"
					},
					"entryState": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "入账状态"
					},
					"itemRemark": {
						"type": "String",
						"rawType": "VARCHAR(500)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"oriMaterialId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "对接第三方材料"
					},
					"sortCode": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "排序"
					},
					"creatorId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 591107012792320,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人主键"
					},
					"creatorName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "wff",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "添加人"
					},
					"modifierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人主键"
					},
					"modifierName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2021-12-21T02:43:23.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2021-12-21T02:43:23.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1170100217074176,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"actualSupplierName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "ddddwwww",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供应单位名称"
					},
					"actualSupplierId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 889211087041024,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供应单位id"
					},
					"oriActualSupplierId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际供应单位三方id"
					}
				}
			}
		]
	},
	{
		dbName: 'global_platform',
		tables:[
			{
				"name": "material",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": true,
						"comment": "来源组织id"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 2286957536802304,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "材料id"
					},
					"materialCategoryId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1580584701474304,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"code": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": false,
						"defaultValue": "WL00007",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料编码"
					},
					"fullCode": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": false,
						"defaultValue": "01WL00007",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料fullCode"
					},
					"name": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": false,
						"defaultValue": "aa",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料名称"
					},
					"model": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "型号"
					},
					"spec": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "aa",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "规格"
					},
					"quality": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材质"
					},
					"unit": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "千克",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单位"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"isExpired": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "停用标记"
					},
					"excelCategoryCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "excel导入时使用的材料类别编码"
					},
					"excelTaskId": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isApprove": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"approveDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"approver": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"categoryApprove": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"createName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"approveName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"materialCategoryType": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"integrationId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"matchState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"approveState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"approveAdvice": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "审批意见"
					},
					"creator": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录创建人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2026-04-17T01:47:16.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "记录创建时间"
					},
					"reviser": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2026-04-17T01:47:16.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "记录修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 2286957536802304,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "记录版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"dataPush": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "推送次数"
					},
					"createOrigin": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "数据添加来源是常用库还是大库"
					},
					"isValid": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "是否有效"
					},
					"colVarchar_50No_01": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符类型扩展字段1"
					},
					"colVarchar_50No_02": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字符类型扩展字段2"
					},
					"integrationMaterialFactor": {
						"type": "Number",
						"rawType": "DECIMAL(18,8)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关联集成材料的转换系数"
					},
					"originalCategoryId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "原始材料类别id"
					},
					"usedState": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "数据使用状态"
					}
				}
			},
			{
				"name": "materialCategory",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": -1,
						"rawDefaultValue": "0",
						"primaryKey": true,
						"comment": "组织id，0表示租户级别"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1580584701474304,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "材料字典类别id"
					},
					"scopeOrgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": -1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "范围id"
					},
					"parentId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": -1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "父材料字典类型id"
					},
					"fullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": false,
						"defaultValue": "1580584701474304",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料字典类型fullId"
					},
					"fullIdEx": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": false,
						"defaultValue": "|1580584701474304|",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料字典类型FullId，前后带|"
					},
					"name": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": false,
						"defaultValue": "材料库类别",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料字典类型名称"
					},
					"fullName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": false,
						"defaultValue": "材料库类别",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料字典类型FullName"
					},
					"code": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": false,
						"defaultValue": "01",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料字典类型编码"
					},
					"orderNo": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1580584701474304,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料字典类型排序"
					},
					"level": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "材料字典类型树级别"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"isDiscaded": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "废弃标记，只保留最新废弃的"
					},
					"excelTaskId": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isApprove": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"unit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"integrationId": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"type": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"creator": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录创建人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2023-07-24T01:48:02.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "记录创建时间"
					},
					"reviser": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2023-07-24T01:48:02.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "记录修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1580584701474304,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标记"
					},
					"manageCategory": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "管理分类，A|B|C"
					},
					"isLeaf": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否叶子节点"
					},
					"isMaterialName": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否控制材料名称"
					},
					"dataPush": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "推送次数"
					},
					"isExpired": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否作废"
					}
				}
			},
			{
				"name": "orgRelation",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"childOrgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"relationType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "01",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"shortName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "甘肃路桥建设集团有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"childShortName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "甘肃路桥建设集团有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"childType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "company",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"childExtType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "group",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"topProject": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"childOrderNo": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isWatch": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"zoneId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_1": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_2": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_3": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_4": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_1": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_2": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_3": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_4": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"leader": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"leaderPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"parentType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "company",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"parentExtType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "group",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isFocus": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否是关注项目"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-07-28T09:13:54.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2025-07-28T09:13:54.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": null
					}
				}
			},
			{
				"name": "orgRelationData",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 561394432421888,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"relationOrgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 179443329822720,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "与当前组织的数据关联的组织id"
					},
					"zoneId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "管理区域id"
					},
					"leader": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "分管领导名"
					},
					"leaderPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "分管领导电话"
					},
					"isWatch": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否重点关注"
					},
					"creator": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"createdAt": {
						"type": null,
						"rawType": "TIMESTAMP",
						"allowNull": false,
						"defaultValue": "2019-08-14T02:40:09.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": "记录创建时间"
					},
					"reviser": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": null,
						"rawType": "TIMESTAMP",
						"allowNull": false,
						"defaultValue": "2019-08-14T02:41:37.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": "记录修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 754817707487771,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"isFocus": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "是否是关注项目"
					}
				}
			},
			{
				"name": "orgUser",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": -1,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"userId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"userName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2024-01-02T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"positionId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": -1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "岗位id"
					},
					"positionName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "岗位名称"
					},
					"positionDictId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": -1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "岗位模板id"
					},
					"positionDictName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "岗位模板名称"
					}
				}
			},
			{
				"name": "organization",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "主键"
					},
					"parentId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "父组织ID"
					},
					"pmParentId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "上级项目部组织ID"
					},
					"fullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": false,
						"defaultValue": "3",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "ID全路径"
					},
					"pmFullId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "pmID全路径"
					},
					"name": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "中铁十四局集团第一工程有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "名称"
					},
					"fullName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织全路径名称"
					},
					"shortName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": false,
						"defaultValue": "1",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "短名称"
					},
					"orgType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "1",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织类型"
					},
					"extType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "1",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展类型"
					},
					"orderNo": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "顺序号"
					},
					"intelliWorksite": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "智慧工地"
					},
					"intelliTask": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "任务管理"
					},
					"syncCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "同步码"
					},
					"relationVersion": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "关系版本号"
					},
					"isDisabled": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否禁用"
					},
					"isLeaf": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "1",
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "是否禁用"
					},
					"deletedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"integrationId": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "集成组织id"
					},
					"integrationName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"createdAt": {
						"type": null,
						"rawType": "TIMESTAMP",
						"allowNull": false,
						"defaultValue": "2019-08-07T09:16:34.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": "记录创建时间"
					},
					"updatedAt": {
						"type": null,
						"rawType": "TIMESTAMP",
						"allowNull": false,
						"defaultValue": "2019-08-07T09:16:34.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": "记录修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 812765550047744,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标志"
					},
					"pmOrderNo": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "项目组织下级排序号"
					},
					"orgCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "组织编码"
					}
				}
			},
			{
				"name": "project",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 115447320523904,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"orgId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 115447320523904,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"name": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": false,
						"defaultValue": "静庄项目部一分部",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"shortName": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "静庄一分部111111",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"manager": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "曹丽燕",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"managerMobile": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "{crypto}BW1Gm+T5EXJ5zQT5PzlMdg==",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"overview": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": "1、清风吹过，bai一阵阵花雨飘落下来，du山野像铺上了一床zhi彩色的大锦被。\n2、夏日里，清清的小dao河成了孩子们避暑的好去处，你看，他们在水中嬉闹着，一会儿打水仗，一会儿扎猛子摸鱼，玩得十分开心。\n3、满塘的荷花荷叶，远远望去就像碧波上荡着点点五颜六色的帆，煞是好看。\n4、水牛早就躲到了池塘里，整个身子埋在了池水中，只露出一个头在水面上透气。\n6、当花翅膀的麦雀子把乡村每个日子叫甜的时候，把黑土地的渴盼叫成金黄色，叫成起伏不平的波浪形，一个最最撩拨庄稼人的时令，又从镰刀上和红缨鞭上熟落了，又从那些古铜色的胸大肌、肱二头肌和醉意朦胧的微笑上熟落了！<p><br></p>",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"constructStatus": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "termination",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"constructType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "铁路工程",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"constructPurpose": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"structType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"planStart": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"planEnd": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-21T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"planFinish": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualStart": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"area": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"contractPrice": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 6737778880,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"address": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "甘肃省庆阳市西峰区",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"longitude": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 107.68358313879492,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"latitude": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 35.7529739841781,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"biddingUnit": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "甘肃省远大路业集团有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"designUnit": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "中国公路工程咨询集团有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"constructUnit": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "甘肃路桥建设集团有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"superviserUnit": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "甘肃省交通工程建设监理有限公司",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"thumbnail": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"deletedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 42450.21791099999,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"contractPeriod": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 547,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualPeriod": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 583,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualYearAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualMonthAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualDayAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"province": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "甘肃省",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"planYearAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"planMonthAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"targetMonthAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"targetTotalAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 42450.21791099999,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"wbsAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 69338.97773699906,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgId_1": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgId_2": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgId_3": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgId_4": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_1": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_2": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_3": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgShortName_4": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"targetYearAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualYesterdayAmount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"contractSignDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"contractChangePrice": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 77770000,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"contractSrcPrice": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 6660008880,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isForeignCountry": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"manageType": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 892166538940928,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"qualification": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 550075712918016,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"engineeringLength": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 1111,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"spotShiningConstruction": {
						"type": "String",
						"rawType": "VARCHAR(16383)",
						"allowNull": true,
						"defaultValue": "大锅饭，，，会更好工点会更好和规范化个韩国韩国和和规范化个和规范化个韩国韩国和和",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualFinish": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"ensuringOpeningLiableUnit": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"liableLeader": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"liableLeaderPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"planOpeningDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"actualOpeningDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"openingRemark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_1": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_2": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_3": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"elderOrgOrderNo_4": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"riskLevel": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 563642919301120,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"mainEngineeringQuantity": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": "2222<table style=\"border-collapse: collapse;color: rgba(0, 0, 0, 0.7);border-top: 1px solid #ccc;border-left: 1px solid #ccc; display: table;table-layout: fixed;word-wrap: break-word;margin:10px 0;\" border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr style=\"height: 26px;border: 1px solid  #ccc;\"><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td></tr><tr style=\"height: 26px;border: 1px solid  #ccc;\"><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td><td style=\"border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;\">&nbsp;</td></tr></tbody></table><p><br></p>",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"controlEngineeringAndBriefing": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": "3333",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"belongRailwaysBureau": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"contractType": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 892765673140736,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"constructionMasterPlan": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"applicationMode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "暂未应用",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"city": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "庆阳市",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "城市"
					},
					"closingDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"closedDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2019-11-14T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"provisionalSums": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"thirdPartyInspection": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"bidSection": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "第一标段",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"bidSectionLength": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 777,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"designSpeed": {
						"type": "Number",
						"rawType": "INT(11)",
						"allowNull": true,
						"defaultValue": 777,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"transportType": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 11111,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"altitudeMin": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 7,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"altitudeMax": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": 7,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"internalRiskLevel": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1111,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"chiefEngineerName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "caoliyan",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"chiefEngineerPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "{crypto}yUPBW+O5wNOu6IMh5JQsiQ==",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"handoverAcceptanceDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-13T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"completedAcceptanceDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-07-20T16:00:00.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"constructionMethodResume": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": "\n3、满塘的荷花荷叶，远远望去就像碧波上荡着点点五颜六色的帆，煞是好看。\n",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"unitTaskPartitioning": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"progressWorksPlan": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"mainItems": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"spareField": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"line": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"bidSectionBeginEnd": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "标段起讫里程"
					},
					"isControlProject": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"editor": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"editorPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"postalAddress": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"postcode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"fax": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"constructionMethod": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "22",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"bidUnit": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"bidDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"projectLeaderName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"projectLeaderPhone": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"bidSectionShort": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"investmentType": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"investmentPrice": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"investmentAfterChangePrice": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"biddingUnitName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"biddingUnitPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"designUnitName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"designUnitPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"superviserUnitName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"superviserUnitPhone": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"surveyUnit": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"contractManager": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"contractChiefEngineer": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"qualityAssessment": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"openingReason": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"secondConstructType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"field01": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展1"
					},
					"field02": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展2"
					},
					"field03": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展3"
					},
					"field04": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展4"
					},
					"field05": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展5"
					},
					"field06": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展6"
					},
					"field07": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展7"
					},
					"field08": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展8"
					},
					"field09": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展9"
					},
					"field10": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展10"
					},
					"field11": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展11"
					},
					"field12": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展12"
					},
					"field13": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展13"
					},
					"field14": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展14"
					},
					"field15": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展15"
					},
					"field16": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展16"
					},
					"field17": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展17"
					},
					"field18": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展18"
					},
					"field19": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展19"
					},
					"field20": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展20"
					},
					"field21": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展21"
					},
					"field22": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展22"
					},
					"field23": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展23"
					},
					"field24": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展24"
					},
					"field25": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展25"
					},
					"field26": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展26"
					},
					"field27": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展27"
					},
					"field28": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展28"
					},
					"field29": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展29"
					},
					"field30": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展30"
					},
					"field31": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展31"
					},
					"field32": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展32"
					},
					"field33": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展33"
					},
					"field34": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展34"
					},
					"field35": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展35"
					},
					"field36": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展36"
					},
					"field37": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展37"
					},
					"field38": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展38"
					},
					"field39": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展39"
					},
					"field40": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展40"
					},
					"fieldText01": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展字段36"
					},
					"fieldText02": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展字段37"
					},
					"fieldText03": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展字段38"
					},
					"fieldText04": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展字段39"
					},
					"fieldText05": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "扩展字段40"
					},
					"createdAt": {
						"type": null,
						"rawType": "TIMESTAMP",
						"allowNull": false,
						"defaultValue": "2018-05-04T03:56:36.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": "记录创建时间"
					},
					"updatedAt": {
						"type": null,
						"rawType": "TIMESTAMP",
						"allowNull": false,
						"defaultValue": "2022-08-10T07:09:51.000Z",
						"rawDefaultValue": "CURRENT_TIMESTAMP",
						"primaryKey": false,
						"comment": "记录修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": true,
						"defaultValue": 1334432371537920,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": null
					},
					"syncCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"participateConstructionUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "参建单位"
					},
					"investmentInancingType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "投融资模式"
					},
					"superviserUnitIdNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "监理单位项目负责人身份证号"
					},
					"superviserUnitPracticeNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "监理单位项目负责人执业证号"
					},
					"biddingUnitIdNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "建设单位项目负责人身份证号"
					},
					"biddingUnitPracticeNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "建设单位项目负责人执业证号"
					},
					"surveyUnitName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "勘察单位联系人"
					},
					"surveyUnitPhone": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "勘察单位联系电话"
					},
					"surveyUnitIdNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "勘察单位项目负责人身份证号"
					},
					"surveyUnitPracticeNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "勘察单位项目负责人执业证号"
					},
					"designUnitIdNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "设计单位项目负责人身份证号"
					},
					"designUnitPracticeNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "设计单位项目负责人执业证号"
					},
					"constructUnitPracticeNumber": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "施工单位项目负责人执业证号"
					},
					"handoverDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "交工日期"
					},
					"handoverQualityEvaluation": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "交工质量评定"
					},
					"completionDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "竣工日期"
					},
					"planType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "策划类型"
					},
					"planCompletionDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "策划完成时间"
					},
					"contractDate": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "合同日期"
					},
					"planCompleted": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计划竣工日期"
					},
					"applicationModel": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "应用模式"
					},
					"qualifications": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "资质"
					},
					"openingReasonStr": {
						"type": "String",
						"rawType": "LONGTEXT",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "保开通原因(文本)"
					},
					"contractTypeStr": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "承包模式(文本)"
					},
					"manageTypeStr": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "管理类型(文本)"
					},
					"riskLevelStr": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "风险等级(文本)"
					},
					"investmentTypeStr": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "投资类型(文本)"
					},
					"constructQuantityUnit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工程总量-单位"
					},
					"constructQuantityCount": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "工程总量-数量"
					},
					"taxCalculationMethod": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "计税方法"
					},
					"taxRate": {
						"type": "Number",
						"rawType": "DOUBLE",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "税率"
					},
					"projectCode": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "项目编码"
					},
					"integrationId": {
						"type": "String",
						"rawType": "VARCHAR(100)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "项目集成id"
					}
				}
			},
			{
				"name": "projectAttributeDict",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "id"
					},
					"groupName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "项目信息",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "分组名称"
					},
					"attrName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "province",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字段 属性名称"
					},
					"realName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "所属省份",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "实际名称"
					},
					"attrAlias": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "所属省份",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "字段属性别名 中文别名：如合同金额"
					},
					"fieldName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "province",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "数据库字段"
					},
					"formType": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "combo-box-single",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "表单类型 number、text、textarea、date、contact、combo-box-single,、combo-box-multiple "
					},
					"unit": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "单位, 输入框后面的单位 如：万元"
					},
					"attrParams": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": "{\"isEnabled\": true}",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "属性参数表 {isSystemDict: true, dictCode ,options:[]}"
					},
					"isRequired": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "1",
						"rawDefaultValue": "1",
						"primaryKey": false,
						"comment": "是否必选字段"
					},
					"isExtendField": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否扩展字段"
					},
					"remark": {
						"type": "String",
						"rawType": "VARCHAR(2000)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "备注"
					},
					"creator": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录创建人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2020-12-07T07:55:03.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"reviser": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2020-12-07T07:55:03.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "记录修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 5,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标识"
					},
					"placeholder": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "提示语"
					}
				}
			},
			{
				"name": "projectAttributeGroupDict",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"id": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "id"
					},
					"groupName": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": true,
						"defaultValue": "基本信息",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "分组名称"
					},
					"isSystem": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": true,
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "是否系统"
					},
					"creator": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录创建人"
					},
					"createdAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2020-12-07T07:55:03.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "创建时间"
					},
					"reviser": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "记录修改人"
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": false,
						"defaultValue": "2020-12-07T07:55:03.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "记录修改时间"
					},
					"version": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 1,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": "版本号"
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": false,
						"defaultValue": "0",
						"rawDefaultValue": "0",
						"primaryKey": false,
						"comment": "删除标识"
					}
				}
			},
			{
				"name": "user",
				"fields": {
					"tenant": {
						"type": "String",
						"rawType": "VARCHAR(50)",
						"allowNull": false,
						"defaultValue": "gslq4dev",
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": "租户编码"
					},
					"userId": {
						"type": "Number",
						"rawType": "BIGINT(20)",
						"allowNull": false,
						"defaultValue": 10001,
						"rawDefaultValue": null,
						"primaryKey": true,
						"comment": null
					},
					"userName": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": "租户管理员",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"phoneNumber": {
						"type": "String",
						"rawType": "VARCHAR(255)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"updatedAt": {
						"type": "DateTime",
						"rawType": "DATETIME",
						"allowNull": true,
						"defaultValue": "2020-10-15T01:18:49.000Z",
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					},
					"isRemoved": {
						"type": "Boolean",
						"rawType": "TINYINT(1)",
						"allowNull": true,
						"defaultValue": null,
						"rawDefaultValue": null,
						"primaryKey": false,
						"comment": null
					}
				}
			}
		]
	}
]