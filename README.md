# Vue 3 企业级后台管理系统

基于 Vue 3 + TypeScript + Element Plus 构建的现代化企业级后台管理系统模板，采用 TSX 语法开发组件，支持无限级嵌套菜单、主题切换、企业级 HTTP 封装等特性。

## ✨ 功能特性

### 🎯 侧边栏菜单导航系统
- **无限级嵌套**：递归菜单组件支持任意层级嵌套
- **路由同步**：菜单高亮与当前路由自动同步
- **折叠展开**：支持侧边栏折叠/展开动画
- **外部链接**：支持外部链接在新窗口打开
- **权限控制**：菜单项支持权限标识配置

### 🌐 企业级 HTTP 客户端
- **Axios 封装**：完整的请求/响应拦截器
- **Token 管理**：自动携带 Token，处理过期刷新
- **错误处理**：统一的错误处理和消息提示
- **请求重试**：支持自动重试机制
- **请求取消**：支持取消重复请求
- **请求缓存**：GET 请求支持缓存
- **文件操作**：支持文件上传/下载

### 🎨 主题切换系统
- **深色/浅色主题**：一键切换深色/浅色模式
- **CSS 变量**：基于 CSS 变量的主题系统
- **持久化存储**：主题偏好自动保存到本地
- **系统跟随**：支持跟随系统主题设置

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| **框架** | Vue 3.5+ |
| **构建工具** | Rsbuild 1.7+ |
| **语言** | TypeScript 5.9+ |
| **UI 组件库** | Element Plus 2.13+ |
| **图标** | @element-plus/icons-vue |
| **路由** | Vue Router 5.0+ |
| **状态管理** | Pinia 3.0+ |
| **HTTP 客户端** | Axios 1.13+ |
| **CSS 预处理器** | LESS |
| **代码规范** | ESLint + Biome |
| **包管理器** | pnpm |

## 📁 项目结构

```
src/
├── api/                    # API 接口模块
│   └── user.ts            # 用户相关接口
├── components/             # 公共组件
│   ├── menu/              # 递归菜单组件
│   │   ├── RecursiveMenu.tsx
│   │   └── RecursiveMenu.less
│   ├── sidebar/           # 侧边栏组件
│   │   ├── Sidebar.tsx
│   │   └── Sidebar.less
│   └── theme/             # 主题切换组件
│       ├── ThemeSwitch.tsx
│       └── ThemeSwitch.less
├── config/                 # 配置文件
│   └── env.ts             # 环境配置
├── layouts/                # 布局组件
│   └── MainLayout.tsx     # 主布局
├── router/                 # 路由配置
│   ├── index.ts           # 路由实例
│   └── routes.ts          # 路由表
├── stores/                 # Pinia 状态管理
│   └── theme.ts           # 主题状态
├── styles/                 # 全局样式
│   ├── index.less         # 入口样式
│   └── theme.less         # 主题变量
├── types/                  # TypeScript 类型定义
│   ├── index.ts           # 类型导出
│   ├── menu.ts            # 菜单类型
│   ├── http.ts            # HTTP 类型
│   └── theme.ts           # 主题类型
├── utils/                  # 工具函数
│   ├── http.ts            # HTTP 封装
│   └── menu.ts            # 菜单工具
├── views/                  # 页面视图
│   ├── dashboard/         # 仪表盘
│   ├── system/            # 系统管理
│   ├── components/        # 组件示例
│   └── nested/            # 多级菜单示例
├── App.vue                # 根组件
├── index.ts               # 入口文件
└── env.d.ts               # 环境类型声明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动开发服务器，访问 [http://localhost:3000](http://localhost:3000)

```bash
pnpm run dev
```

### 生产构建

```bash
pnpm run build
```

### 预览构建

```bash
pnpm run preview
```

### 代码检查

```bash
# ESLint 检查
pnpm run lint

# Biome 格式化
pnpm run format

# Biome 检查并修复
pnpm run check
```

## 📖 核心功能说明

### 递归菜单组件

支持无限级嵌套的递归菜单组件，使用 TSX 语法开发：

```tsx
import { RecursiveMenu } from '@/components/menu'

// 使用示例
<RecursiveMenu
  items={menuItems}
  collapsed={isCollapsed}
  defaultActive={currentPath}
  backgroundColor="#304156"
  textColor="#bfcbd9"
  activeTextColor="#409EFF"
/>
```

#### 菜单数据类型

```typescript
interface MenuItem {
  key: string           // 菜单唯一标识
  title: string         // 菜单标题
  icon?: string         // 图标名称
  path?: string         // 路由路径
  disabled?: boolean    // 是否禁用
  hidden?: boolean      // 是否隐藏
  external?: boolean    // 是否外部链接
  children?: MenuItem[] // 子菜单
}
```

### HTTP 客户端

企业级 Axios 封装，支持完整的类型推断：

```typescript
import http from '@/utils/http'

// GET 请求
const response = await http.get<UserInfo>('/user/info')

// POST 请求
const result = await http.post<Response>('/user/login', { username, password })

// 带配置的请求
await http.get<Data>('/api/data', null, {
  showLoading: true,
  cache: true,
  retryCount: 3,
})

// 文件上传
await http.upload('/upload', file, {
  onProgress: (percent) => console.log(`上传进度: ${percent}%`)
})

// 文件下载
await http.download('/export', { id: 1 }, 'data.xlsx')
```

#### 请求配置选项

```typescript
interface RequestConfig {
  showLoading?: boolean      // 显示加载动画
  showError?: boolean        // 显示错误提示
  withToken?: boolean        // 携带 Token
  retryCount?: number        // 重试次数
  retryInterval?: number     // 重试间隔(ms)
  cache?: boolean            // 启用缓存
  cacheTimeout?: number      // 缓存时间(ms)
  cancelDuplicate?: boolean  // 取消重复请求
}
```

### 主题切换

基于 Pinia + CSS 变量的主题系统：

```tsx
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

// 切换主题
themeStore.toggleTheme()

// 设置指定主题
themeStore.setTheme('dark')  // 或 'light'

// 获取当前状态
console.log(themeStore.mode)    // 'dark' | 'light'
console.log(themeStore.isDark)  // boolean
```

### 路由配置

支持嵌套路由和路由元信息：

```typescript
interface AppRouteRecordRaw {
  path: string
  name?: string
  meta?: {
    title: string
    icon?: string
    hidden?: boolean
    auth?: string[]
    order?: number
  }
  component?: Component
  children?: AppRouteRecordRaw[]
}
```

## 🎯 开发规范

### 组件开发

- 使用 TSX 语法开发组件
- 使用 `defineComponent` 定义组件
- 完整的 TypeScript 类型签名
- 统一使用 Composition API

### 命名规范

- 组件文件：PascalCase（如 `Sidebar.tsx`）
- 样式文件：与组件同名（如 `Sidebar.less`）
- 工具函数：camelCase（如 `resolvePath`）
- 类型定义：PascalCase + 后缀（如 `MenuItem`）

### 样式规范

- 使用 LESS 预处理器
- 颜色/间距等使用 CSS 变量
- 组件样式使用 BEM 命名

## 🔗 相关资源

- [Rsbuild 文档](https://rsbuild.rs)
- [Vue 3 文档](https://vuejs.org)
- [Element Plus 文档](https://element-plus.org)
- [Pinia 文档](https://pinia.vuejs.org)
- [Vue Router 文档](https://router.vuejs.org)

## 📄 License

MIT License
