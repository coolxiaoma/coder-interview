import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '前端面试题库',
  description: '一个专注于前端面试题的静态网站，包含HTML/CSS、JavaScript、浏览器原理、前端框架等多个分类的面试题',
  head: [["link", { rel: "icon", href: "https://cdn-icons-png.flaticon.com/512/1088/1088493.png" }]],
  // 自定义主题颜色
  themeConfig: {
    // 站点图标
    logo: 'https://cdn-icons-png.flaticon.com/512/1088/1088493.png',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '面试题', link: '/interview/' },
      { text: '关于', link: '/about/' }
    ],
    
    // 侧边栏
    sidebar: {
      '/interview/': [
        {
          text: '面试题分类',
          items: [
            { text: 'HTML/CSS', link: '/interview/html-css/' },
            { text: 'JavaScript', link: '/interview/javascript/' },
            { text: '浏览器原理', link: '/interview/browser/' },
            { text: 'Vue', link: '/interview/frameworks/vue/' },
            { text: 'React', link: '/interview/frameworks/react/' },
            { text: '性能优化', link: '/interview/performance/' },
            { text: '工程化', link: '/interview/engineering/' },
            { text: '算法', link: '/interview/algorithm/' },
            { text: '网络', link: '/interview/network/' },
            { text: '设计模式', link: '/interview/design-patterns/' },
            { text: '其他', link: '/interview/others/' }
          ]
        }
      ]
    },
    
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到结果',
                resetButtonTitle: '清除查询',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        },
        // 搜索结果数量限制
        maxResults: 10,
        // 搜索延迟（毫秒）
        delay: 300,
        // 是否搜索标题
        searchHeadings: true,
        // 是否搜索内容
        searchContent: true,
        // 是否搜索侧边栏
        searchSidebar: true
      }
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    // 页脚配置
    footer: {
      message: '使用 VitePress 构建',
      copyright: 'Copyright © 2024 前端面试题库'
    },
    
    // 自定义颜色方案
    colorSchema: {
      default: 'light',
      toggle: true
    },
    
    // 文档信息
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 编辑链接（如果需要）
    editLink: {
      pattern: 'https://github.com/yourusername/your-repo/edit/main/docs/:path',
      text: '编辑此页面'
    }
  },
  
  // CSS 配置
  css: [
    './custom.css'
  ],
  
  // Markdown 配置
  markdown: {
    // 启用脚注
    footnotes: true,
    // 启用标题链接
    headerIds: true,
    // 启用自定义容器
    container: true,
    // 语法高亮配置
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  // 构建配置
  build: {
    // 生成静态站点
    outDir: '.vitepress/dist',
    // 启用源映射
    sourcemap: false
  },
  
  // 开发服务器配置
  server: {
    // 开发服务器端口
    port: 5173,
    // 是否自动打开浏览器
    open: false
  }
})
