# 前端面试题库

一个专注于前端开发面试题的静态网站，包含HTML/CSS、JavaScript、浏览器原理、前端框架等多个分类的精选面试题，帮助前端开发者更好地准备面试。

## ✨ 功能特点

- **分类清晰**：按不同技术领域进行分类，覆盖前端开发的各个方面
- **内容丰富**：包含了前端开发常见的面试题和知识点
- **检索便捷**：支持基于静态资源的检索功能，快速找到所需内容
- **响应式设计**：适配不同屏幕尺寸，提供良好的移动端体验
- **易于扩展**：采用VitePress构建，易于维护和扩展
- **代码示例**：每个面试题都包含详细的代码示例，帮助理解知识点
- **现代化设计**：采用现代化的设计风格，提供良好的用户体验

## 🛠 技术栈

- **构建工具**：VitePress 1.6.4
- **前端框架**：Vue 3
- **样式**：CSS3
- **内容格式**：Markdown
- **搜索功能**：基于本地的搜索功能

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

网站将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

构建后的文件将生成在 `.vitepress/dist` 目录

### 预览生产版本

```bash
npm run serve
```

预览服务器将在 `http://localhost:4173` 启动

## 📁 目录结构

```
docs - 部署目录
interview-docs/
├── .vitepress/          # VitePress 配置目录
│   ├── config.ts        # 主配置文件
│   └── custom.css       # 自定义样式
├── interview/           # 面试题目录
│   ├── algorithm/       # 算法面试题
│   ├── browser/         # 浏览器原理面试题
│   ├── design-patterns/ # 设计模式面试题
│   ├── engineering/     # 工程化面试题
│   ├── frameworks/      # 前端框架面试题
│   │   ├── react/       # React 面试题
│   │   └── vue/         # Vue 面试题
│   ├── html-css/        # HTML/CSS 面试题
│   ├── javascript/      # JavaScript 面试题
│   ├── network/         # 网络面试题
│   ├── others/          # 其他面试题
│   └── performance/     # 性能优化面试题
├── about.md             # 关于页面
└── index.md             # 首页
```

## 📖 使用说明

1. 在顶部导航栏或左侧侧边栏选择您感兴趣的分类
2. 浏览该分类下的面试题
3. 使用顶部的搜索框搜索特定的面试题
4. 点击面试题标题查看详细内容
5. 学习面试题的答案和相关知识点

## 🤝 贡献指南

我们非常欢迎社区的贡献和反馈，共同完善这个前端面试题库！

### 贡献方式

1. **提交Issue**：如果您发现任何错误或有好的建议，欢迎提交Issue
2. **提交PR**：如果您想直接贡献内容，可以提交PR
3. **分享网站**：将网站分享给更多需要的人
4. **提供反馈**：通过各种渠道提供您的反馈和建议

### 贡献流程

1. Fork本仓库
2. 创建您的特性分支：`git checkout -b feature/AmazingFeature`
3. 提交您的更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 打开一个Pull Request

## 📄 许可证

本项目采用 MIT 许可证，可自由使用和修改。

MIT License允许您：
- ✅ 可以用于商业用途
- ✅ 可以修改代码
- ✅ 可以分发代码
- ✅ 可以私人使用
- ✅ 无需承担责任

详细的许可证信息请查看项目根目录下的LICENSE文件。

## 📞 联系方式

- **GitHub**：[https://github.com](https://github.com) 欢迎提交Issue和PR
- **邮箱**：example@example.com 发送邮件给我们

## 📚 学习资源推荐

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/)：Web 开发权威文档
- [Vue 官方文档](https://cn.vuejs.org/)：Vue 框架官方文档
- [React 官方文档](https://react.dev/)：React 框架官方文档
- [JavaScript 高级程序设计](https://book.douban.com/subject/35175321/)：JavaScript 经典教材
- [HTTP 权威指南](https://book.douban.com/subject/10746113/)：HTTP 协议相关的经典书籍
- [LeetCode](https://leetcode.cn/)：在线编程平台，包含大量算法题目

## 🎯 面试准备建议

1. **掌握核心概念**：深入理解前端开发的核心概念
2. **实践项目**：通过实际项目练习，加深对知识点的理解
3. **多做面试题**：多做面试题，熟悉面试题型和解题思路
4. **阅读源码**：阅读优秀开源项目的源码，学习最佳实践
5. **关注新技术**：关注前端领域的新技术和趋势
6. **模拟面试**：进行模拟面试，提高面试技巧和自信心

## 📈 后续规划

- [ ] 增加更多面试题和知识点
- [ ] 支持按难度级别分类
- [ ] 支持收藏和笔记功能
- [ ] 增加在线模拟面试功能
- [ ] 结合后端服务扩展动态功能
- [ ] 支持用户登录和个性化设置

## 🌟 致谢

感谢所有为这个项目做出贡献的开发者和社区成员！

---

**前端面试题库** - 助力前端开发者实现职业目标 🚀