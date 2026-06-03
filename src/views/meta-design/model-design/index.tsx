import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getModels } from '../model-manager/storage'
import type { StoredModel } from '../model-manager/storage'
import './index.less'

export default defineComponent({
  name: 'ModelDesignPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const modelData = ref<StoredModel | null>(null)
    /** 模型基本信息折叠状态，默认收起 */
    const infoCollapsed = ref(true)

    const modelId = route.params.id as string

    onMounted(() => {
      const models = getModels()
      const found = models.find((m) => m.id === modelId)
      if (found) {
        modelData.value = found
      }
    })

    /** 返回模型列表 */
    function handleBack() {
      router.push('/meta-design/model-manager')
    }

    /** 切换基本信息折叠状态 */
    function toggleInfoCollapse() {
      infoCollapsed.value = !infoCollapsed.value
    }

    return () => (
      <div class="model-design-page">
        <div class="model-design-header">
          <el-button onClick={handleBack} icon="ArrowLeft">
            返回列表
          </el-button>
          <span class="model-design-header__title">
            模型设计 - {modelData.value?.displayName || '加载中...'}
          </span>
        </div>

        {modelData.value ? (
          <div class="model-design-content">
            <el-card class="model-info-card">
              {{
                header: () => (
                  <div class="model-info-card__header">
                    <span>模型基本信息</span>
                    <el-button
                      link
                      type="primary"
                      onClick={toggleInfoCollapse}
                    >
                      {infoCollapsed.value ? '展开' : '收起'}
                      <el-icon class="model-info-card__toggle-icon" style={{ transform: infoCollapsed.value ? 'rotate(0deg)' : 'rotate(180deg)' }}>
                        <el-icon-arrow-down />
                      </el-icon>
                    </el-button>
                  </div>
                ),
                default: () => (
                  <div
                    class={['model-info-card__content', { 'model-info-card__content--collapsed': infoCollapsed.value }]}
                  >
                    <el-descriptions column={2} border>
                      <el-descriptions-item label="模型编码">{modelData.value!.modelCode}</el-descriptions-item>
                      <el-descriptions-item label="显示名称">{modelData.value!.displayName}</el-descriptions-item>
                      <el-descriptions-item label="所属模块">{modelData.value!.module}</el-descriptions-item>
                      <el-descriptions-item label="分组">{modelData.value!.groupName}</el-descriptions-item>
                      <el-descriptions-item label="模型关系">{modelData.value!.modelRelation}</el-descriptions-item>
                      <el-descriptions-item label="实体结构">{modelData.value!.entityStructure}</el-descriptions-item>
                      <el-descriptions-item label="状态">
                        <el-tag type={modelData.value!.status === 'draft' ? 'info' : 'success'}>
                          {modelData.value!.status === 'draft' ? '未发布' : '已发布'}
                        </el-tag>
                      </el-descriptions-item>
                      <el-descriptions-item label="创建时间">{modelData.value!.createTime}</el-descriptions-item>
                    </el-descriptions>
                  </div>
                ),
              }}
            </el-card>

            <el-card style={{ marginTop: '16px' }}>
              {{
                header: () => <span>字段设计</span>,
                default: () => (
                  <el-empty description="字段设计功能开发中..." />
                ),
              }}
            </el-card>
          </div>
        ) : (
          <el-empty description="未找到模型数据" />
        )}
      </div>
    )
  },
})
