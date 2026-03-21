import { router } from '@/router'

export interface ShortcutsSettingJumpFunction {
  /**
   * 设置快捷键设置路径，传这个参数会直接打开快捷键设置页面
   */
  payload?: string
  /**
   * 是否自动打开添加面板（用于从其他页面跳转过来时预填充目标指令）
   */
  autoOpenEditor?: boolean
}

/**
 * 快捷键跳转功能
 * @param config
 */
export function jumpFunctionShortcutsSetting(config: ShortcutsSettingJumpFunction): void {
  void router.replace({ name: 'Shortcuts', state: { ...config } })
}
