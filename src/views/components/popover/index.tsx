import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import './index.less'

// 生成大量下拉选项
const selectOptions = Array.from({ length: 50 }, (_, i) => ({
  label: `选项 ${i + 1} - ${['北京', '上海', '广州', '深圳', '杭州', '成都', '武汉', '南京', '重庆', '西安'][i % 10]}`,
  value: `option_${i + 1}`,
}))

/**
 * 判断点击目标是否在 popover 及其子组件的弹出层内。
 * Element Plus 的 select/date-picker/nested-popover 都通过 teleport 到 body，
 * 它们的弹出层都带有 .el-popper 类名，所以统一检查 .el-popper 即可覆盖所有情况。
 */
function isClickInsidePopoverOrChildren(target: EventTarget | null): boolean {
  if (!target || !(target instanceof HTMLElement)) return false

  const el = target as HTMLElement

  // 1. 检查是否在主 popover 内部（通过 popper-class 标识）
  if (el.closest('.manual-control-popover')) return true

  // 2. 检查是否在任何 el-popper 内（覆盖 select下拉、date-picker面板、嵌套popover 等）
  //    Element Plus 所有弹出层都使用 .el-popper
  if (el.closest('.el-popper')) return true

  // 3. 检查是否在触发按钮上（点击按钮由按钮自己的 onClick 处理 toggle）
  if (el.closest('.manual-trigger-btn')) return true

  return false
}

export default defineComponent({
  name: 'PopoverPage',
  setup() {
    const manualVisible = ref(false)
    const selectedValue = ref('')
    const dateRange = ref('')

    const toggleManual = () => {
      manualVisible.value = !manualVisible.value
    }

    const closeManual = () => {
      manualVisible.value = false
    }

    // Document click 事件监听器 —— 实现点击外部关闭
    const handleDocumentClick = (e: MouseEvent) => {
      // popover 未显示时不需要处理
      if (!manualVisible.value) return

      // 如果点击在 popover 内部或子组件弹出层内，不关闭
      if (isClickInsidePopoverOrChildren(e.target)) return

      // 点击在 popover 外部，关闭
      manualVisible.value = false
    }

    onMounted(() => {
      // 使用 capture 阶段，确保在 el-popover 内部处理之前拦截
      document.addEventListener('click', handleDocumentClick, true)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleDocumentClick, true)
    })

    return () => (
      <div class="popover-page">
        <el-card>
          {{
            header: () => 'Popover 气泡弹出框',
            default: () => (
              <div class="popover-demo-list">
                {/* 手动控制 */}
                <div class="popover-demo-item">
                  <h3>手动控制可见性（点击外部关闭，内部操作不关闭）</h3>
                  <el-popover
                    placement="bottom"
                    width={560}
                    trigger="manual"
                    visible={manualVisible.value}
                    persistent={true}
                    teleported={true}
                    popperClass="manual-control-popover"
                  >
                    {{
                      reference: () => (
                        <el-button
                          class="manual-trigger-btn"
                          type="primary"
                          onClick={toggleManual}
                        >
                          {manualVisible.value ? '隐藏气泡' : '显示气泡'}
                        </el-button>
                      ),
                      default: () => (
                        <div class="popover-demo-content">
                          <p>
                            使用 <code>trigger="manual"</code>{' '}
                            模式配合 document click 监听实现：
                          </p>
                          <ul>
                            <li>点击 popover <strong>外部区域</strong> → 关闭</li>
                            <li>点击 popover <strong>内部下拉框</strong> → 不关闭</li>
                            <li>点击 popover <strong>内部日期选择器</strong> → 不关闭</li>
                            <li>点击 popover <strong>内部嵌套弹出层</strong> → 不关闭</li>
                          </ul>

                          <div class="popover-demo-select">
                            <el-select
                              v-model={selectedValue.value}
                              placeholder="请选择一个城市"
                              filterable
                              clearable
                              style={{ width: '100%' }}
                            >
                              {selectOptions.map((opt) => (
                                <el-option
                                  key={opt.value}
                                  label={opt.label}
                                  value={opt.value}
                                />
                              ))}
                            </el-select>
                          </div>

                          <div class="popover-demo-datepicker">
                            <el-date-picker
                              v-model={dateRange.value}
                              type="daterange"
                              unlink-panels
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期"
                              style={{ width: '100%' }}
                            />
                          </div>

                          <div class="popover-demo-nested">
                            <el-popover
                              placement="right"
                              width={200}
                              trigger="click"
                            >
                              {{
                                reference: () => (
                                  <el-button type="warning" size="small">
                                    嵌套 Popover
                                  </el-button>
                                ),
	                              default: ()=>{
																	return <div>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																		<p>这是一个嵌套的 Popover，点击时不应该关闭外层 Popover。</p>
																	</div>
	                              }
                              }}
                            </el-popover>
                          </div>

                          <div class="popover-demo-actions">
                            <el-button
                              size="small"
                              type="danger"
                              onClick={closeManual}
                            >
                              关闭
                            </el-button>
                          </div>
                        </div>
                      ),
                    }}
                  </el-popover>
                </div>
              </div>
            ),
          }}
        </el-card>
      </div>
    )
  },
})
