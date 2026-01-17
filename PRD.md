# City Boy Meme 生成器 - 产品需求文档 (PRD)

## 1. 项目概述

### 1.1 项目背景
- "City Boy Meme" 近期搜索量激增，具有较高的流量潜力
- 域名：cityboymeme.com
- 竞品参考：https://www.pinatafarm.com/memegenerator/b892349d-b82d-4987-8e95-7eb0a50da993
- 目标：通过1:1复刻竞品核心功能，快速抢占SEO排名

### 1.2 产品定位
一个快速、免费、在线的 City Boy Meme 生成器，用户可以在线编辑文本、添加贴纸、调整布局，并分享到社交媒体。

### 1.3 第一版范围
**仅包含首页**，具备完整的 Meme 生成和分享功能。

---

## 2. 页面结构

### 2.1 整体布局

```
┌─────────────────────────────────────────────────────┐
│                  顶部导航栏                          │
├─────────────────────────────────────────────────────┤
│                 标题 + 副标题区域                     │
├───────────────────────────┬─────────────────────────┤
│                           │                         │
│     Meme 预览区域         │      编辑工具栏         │
│   (左侧，约60%宽度)       │   (右侧，约40%宽度)     │
│                           │                         │
├───────────────────────────┴─────────────────────────┤
│              模板来源信息                            │
├─────────────────────────────────────────────────────┤
│         City Boy Meme 示例展示区                     │
├─────────────────────────────────────────────────────┤
│         相似模板推荐区                               │
├─────────────────────────────────────────────────────┤
│         使用指南 (FAQ折叠面板)                       │
├─────────────────────────────────────────────────────┤
│              产品介绍区域                            │
├─────────────────────────────────────────────────────┤
│                   页脚                               │
└─────────────────────────────────────────────────────┘
```

---

## 3. 核心功能详细说明

### 3.1 顶部导航栏

#### 元素组成
- **Logo**：网站Logo（左侧）
- **导航链接**（右侧）：
  - Meme Generator
  - Meme Templates
  - 其他工具链接（可选）

#### 交互要求
- 固定在顶部（sticky header）
- 响应式设计，移动端显示汉堡菜单

---

### 3.2 标题区域

#### 内容
- **主标题**：`City Boy Meme Generator`
- **副标题**：`Lightning Fast, Free, Online Meme Generator and Meme Maker. Use "City Boy" meme template to make "City Boy" memes in seconds`

#### 样式要求
- 主标题：大号粗体，黑色
- 副标题：中号常规字体，灰色
- 居中对齐

---

### 3.3 Meme 编辑器核心功能

#### 3.3.1 界面布局
- **左侧**：Meme 图片预览区（60%宽度）
  - 显示 City Boy 模板图片
  - 实时渲染用户添加的文本和贴纸
  - 文本可通过拖拽调整位置
  - 文本带有调整框（四角+边框控制点）

- **右侧**：工具面板（40%宽度）
  - 6个主要功能按钮
  - 当前激活功能的编辑面板

---

#### 3.3.2 功能按钮区（6个图标按钮）

| 图标 | 功能名称 | 说明 |
|------|---------|------|
| T | Text | 文本编辑（默认激活） |
| 🎨 | Stickers | 贴纸 |
| 📐 | Layouts | 布局 |
| 🖼️ | Templates | 模板切换 |
| 📤 | Share | 分享 |
| ⋯ | More | 更多（App推广） |

---

#### 3.3.3 Text（文本编辑）功能

##### 默认状态
- 默认已添加一个文本框，显示 `Sample Text`
- 文本框可拖拽、缩放、旋转

##### 编辑面板内容

**1. 文本输入框**
- 显示当前选中文本的内容
- 可直接编辑修改

**2. 文本颜色选择器**
- 图标按钮：调色板图标
- 点击后展示颜色选项（至少9种颜色）：
  - 白色
  - 黑色（默认）
  - 黄绿色（lime）
  - 蓝色
  - 绿色
  - 黄色
  - 橙色
  - 红色
  - 紫色

**3. 文本字体选择器**
- 图标按钮：字体图标（Tt）
- 点击后展示字体列表：
  - Arial（默认）
  - Agrandir
  - Impact
  - Lobster
  - Comic Sans MS

**4. 文本样式选择器**
- 图标按钮：样式图标（A）
- 点击后展示样式选项：
  - **BOLD**（粗体，默认）
  - **FILLED**（填充）
  - **OUTLINED**（描边）

**5. 字体大小调整**
- 标签：`Size`
- 控件：滑动条（Slider）
- 范围：可调节字体大小

**6. 操作按钮**
- **Delete 按钮**：删除当前文本
- **Done 按钮**：完成编辑，关闭面板

##### 交互逻辑
1. 点击预览区文本 → 文本框显示选中状态（绿色边框+控制点）
2. 在右侧输入框修改文本 → 左侧实时更新
3. 选择颜色/字体/样式 → 左侧文本立即应用效果
4. 拖拽滑块调整大小 → 左侧文本尺寸实时变化
5. 点击 Delete → 删除该文本
6. 点击 Done → 关闭编辑面板，保留文本

---

#### 3.3.4 Stickers（贴纸）功能

##### 面板内容

**1. 搜索框**
- Placeholder：`Search for a sticker`
- 支持关键词搜索贴纸

**2. 上传按钮**
- 图标：加号 `+`
- 功能：上传自定义贴纸

**3. 预设贴纸库**
- 网格展示贴纸缩略图
- 包含各种名人头像贴纸（如：Taylor Swift, Jason Kelce, Eminem, Usher等）
- 点击贴纸 → 添加到 Meme 预览区

**4. Done 按钮**
- 完成贴纸添加，关闭面板

##### 交互逻辑
1. 点击贴纸 → 贴纸添加到 Meme 中心位置
2. 添加后的贴纸可拖拽、缩放、旋转
3. 支持添加多个贴纸

---

#### 3.3.5 Layouts（布局）功能

##### 布局选项（4种）

| 布局名称 | 图标示意 | 说明 |
|---------|---------|------|
| Default | 图片 | 默认布局，文本自由放置 |
| Text-top | 图片+顶部文本 | 文本固定在图片顶部 |
| Text-bottom | 图片+底部文本 | 文本固定在图片底部 |
| Text-top-bottom | 顶部文本+图片+底部文本 | 文本分别在顶部和底部 |

##### 交互逻辑
1. 点击布局选项 → 切换布局
2. 当前选中布局显示高亮边框（蓝色）
3. Done 按钮关闭面板

---

#### 3.3.6 Templates（模板切换）功能

##### 面板内容

**1. 搜索框**
- Placeholder：`Search for a template`
- 支持搜索其他 Meme 模板

**2. 模板网格**
- 展示其他热门 Meme 模板
- 每个模板显示：
  - 模板缩略图
  - 模板标识图标（图片/视频）
  - 上传者图标

**3. Done 按钮**

##### 交互逻辑
1. 点击模板 → 切换到新模板
2. 切换后保留当前编辑的文本和贴纸（如适用）

---

#### 3.3.7 Share（分享）功能

##### 面板内容

**标题**：`Share Your Meme`

**分享选项**（6个按钮）：

| 图标 | 名称 | 功能 |
|------|------|------|
| 🐦 | Share via Twitter | 分享到 Twitter |
| 🔴 | Share via Reddit | 分享到 Reddit |
| 📌 | Share via Pinterest | 分享到 Pinterest |
| 🔗 | Copy Link | 复制分享链接 |
| 📄 | Embed in website | 嵌入代码到网站 |
| 💾 | Download | 下载 Meme 图片 |

##### 交互逻辑
1. 点击社交媒体按钮 → 打开对应平台分享页面
2. 点击 Copy Link → 复制 Meme 链接到剪贴板，显示"已复制"提示
3. 点击 Embed → 显示嵌入代码，可复制
4. 点击 Download → 下载 Meme 为图片（PNG/JPG）

---

#### 3.3.8 More（更多）功能

##### 功能说明
- 点击后弹出 App 推广弹窗（Modal）

##### 弹窗内容
- **Logo + 标题**：`Take your memes to the next level with our app`
- **评分**：⭐⭐⭐⭐⭐ 4.8 · 7.2K Ratings
- **功能卡片**（4个）：
  1. Remove image background
  2. Make video memes
  3. Discover trending templates
  4. Endless feed of funny memes
- **下载二维码**：
  - Scan to download（iOS/Android）
  - App Store / Google Play 按钮
- **关闭按钮**：右上角 ✕

##### 交互逻辑
- 点击关闭或背景遮罩 → 关闭弹窗

---

### 3.4 模板来源信息

#### 内容
- 图标：上传者图标
- 文本：`Uploaded by [用户名]`

#### 样式
- 小号灰色文字
- 位于编辑器下方

---

### 3.5 City Boy Meme 示例展示区

#### 标题
- `"City Boy" memes`
- `See All` 链接（右侧）

#### 内容
- 横向滚动的 Meme 示例网格
- 展示 4 个用户创建的 City Boy Meme 案例
- 每个 Meme 可点击查看详情

#### 交互
- 点击 `See All` → 跳转到 Meme 合集页面（V2功能）
- 点击单个 Meme → 查看详情（V2功能）

---

### 3.6 相似模板推荐区

#### 标题
- `Similar to "City Boy" meme`
- `See All` 链接（右侧）

#### 内容
- 推荐 4 个相似的 Meme 模板：
  - Gotta Go Cat
  - I Lied 2
  - I am speed
  - Crazy Dawg

#### 展示形式
- 网格布局
- 每个模板包含：
  - 缩略图
  - 名称

#### 交互
- 点击模板 → 跳转到对应模板的生成器页面（V2功能）
- 点击 `See All` → 跳转到模板合集页面（V2功能）

---

### 3.7 使用指南（FAQ 折叠面板）

#### 标题
`How do I use this meme generator?`

#### 折叠内容（4个折叠项）

1. **Choose meme template from our library**
2. **See what you can do!**
3. **Make Meme**
4. **Share Meme**

#### 交互
- 点击标题 → 展开/折叠内容
- 每次只能展开一个项目（Accordion 模式）

---

### 3.8 产品介绍区域

#### 内容模块

**1. What is Piñata Farms, the meme creator?**
- 简介文本
- App 下载二维码（iOS/Android）

**2. Why use Piñata Farms as your meme editor?**
- 3 个特性卡片：
  - 💃 Say what you want to say
  - 🗿 Customize your meme
  - 📺 Connect with other meme makers

**3. Ultimate meme maker**
- 产品宣传文本
- App 下载二维码

#### 注意事项
- 第一版可简化为：`Why use City Boy Meme Generator?`
- 去除 App 推广，聚焦 Web 端优势

---

### 3.9 FAQ 区域

#### 标题
`FAQ`

#### 折叠内容（9个问题）

1. What is a meme generator?
2. Where can I get a meme template?
3. How can I create my own meme?
4. Where can I make memes for free?
5. What is the best meme maker?
6. What edits can I do to a meme template?
7. How do I use meme templates?
8. What is the best website to make a meme?
9. Where can I share my meme?

#### 交互
- Accordion 折叠面板
- 点击问题 → 展开答案

---

### 3.10 页脚

#### 内容

**1. 社交媒体链接**
- Twitter
- Instagram
- TikTok
- Discord

**2. 导航链接**
- Meme Templates
- FAQ
- Privacy Policy

**3. 版权信息**
- `© City Boy Meme 2026`

---

## 4. 技术要求

### 4.1 前端技术栈（建议）
- **框架**：React / Next.js
- **样式**：Tailwind CSS
- **Canvas 编辑**：Fabric.js / Konva.js（用于文本和贴纸的拖拽、缩放、旋转）
- **图片处理**：html2canvas / dom-to-image（用于生成最终 Meme 图片）

### 4.2 功能实现要点

#### 4.2.1 Canvas 编辑器
- 使用 HTML5 Canvas 或 SVG
- 支持文本、贴纸的添加、编辑、删除
- 支持拖拽、缩放、旋转
- 实时渲染

#### 4.2.2 文本编辑
- 动态渲染不同字体（需加载 Web Font）
- 支持颜色、大小、样式的实时切换
- 文本描边效果（OUTLINED 样式）

#### 4.2.3 图片导出
- 合成 Canvas 内容为图片
- 支持 PNG 格式下载
- 分辨率：建议 1000x1000 或更高（保持清晰度）

#### 4.2.4 分享功能
- 生成唯一链接（需后端支持）
- 集成社交媒体分享 API
- 嵌入代码生成

### 4.3 性能要求
- 首屏加载时间 < 2秒
- 编辑操作响应时间 < 100ms
- 图片导出时间 < 3秒

### 4.4 兼容性要求
- 现代浏览器：Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- 移动端：iOS Safari 14+, Chrome Android 90+
- 响应式设计：支持 PC、平板、手机

---

## 5. SEO 优化要求

### 5.1 Meta 标签
- **Title**：`City Boy Meme Generator - Free Online Meme Maker`
- **Description**：`Lightning Fast, Free, Online Meme Generator. Use "City Boy" meme template to make "City Boy" memes in seconds. No signup required.`
- **Keywords**：`city boy meme, meme generator, free meme maker, online meme creator`

### 5.2 内容优化
- H1 标签：`City Boy Meme Generator`
- 丰富的文本内容（FAQ、产品介绍）
- 图片 alt 标签优化
- Schema.org 结构化数据（WebApplication）

### 5.3 性能优化
- 图片懒加载
- 压缩 CSS/JS
- CDN 加速
- 开启 Gzip/Brotli 压缩

---

## 6. 第一版功能范围总结

### ✅ 必须包含
1. 完整的 Meme 编辑器（Text, Stickers, Layouts）
2. 分享功能（Twitter, Reddit, Download）
3. 基础 SEO 优化
4. 响应式设计

### ⏸️ 暂不包含（V2 规划）
1. 用户登录/注册
2. Meme 合集页面（示例展示、相似推荐的详情页）
3. 模板切换（第一版仅支持 City Boy 模板）
4. 后端存储（生成的 Meme 暂时仅本地下载，不保存到服务器）

### 🎯 核心目标
**快速上线，抢占 "City Boy Meme" 关键词排名**

---

## 7. UI/UX 参考

### 7.1 配色方案
- **主色**：蓝色（#1E90FF）
- **辅助色**：灰色（#F5F5F5 背景，#666666 文字）
- **强调色**：黑色文字，白色背景
- **按钮激活色**：浅蓝色 (#E3F2FD)

### 7.2 字体
- **标题**：黑体/Poppins（粗体）
- **正文**：Arial / Helvetica

### 7.3 间距
- 页面最大宽度：1400px
- 模块间距：60px
- 卡片间距：20px

---

## 8. 关键页面截图参考

### 8.1 首屏
![首屏](/.playwright-mcp/city-boy-meme-page.png)

### 8.2 文本编辑状态
![文本编辑](/.playwright-mcp/text-editing-demo.png)

### 8.3 贴纸面板
![贴纸面板](/.playwright-mcp/stickers-panel.png)

### 8.4 布局面板
![布局面板](/.playwright-mcp/layouts-panel.png)

### 8.5 分享面板
![分享面板](/.playwright-mcp/share-panel.png)

### 8.6 模板面板
![模板面板](/.playwright-mcp/templates-panel.png)

---

## 9. 开发优先级

### P0（第一周，核心功能）
1. 页面框架搭建
2. Canvas 编辑器基础功能（文本添加、拖拽）
3. 文本样式编辑（颜色、字体、大小）
4. 图片导出/下载功能

### P1（第二周，完善功能）
1. 贴纸功能
2. 布局切换
3. 分享功能（Twitter, Reddit, Copy Link）
4. 响应式适配

### P2（第三周，优化与上线）
1. SEO 优化
2. 性能优化
3. Bug 修复
4. 部署上线

---

## 10. 成功指标

### 10.1 技术指标
- 首屏加载时间 < 2秒
- 编辑操作无明显延迟（< 100ms）
- 移动端兼容性 100%

### 10.2 业务指标
- 上线后 1 周内 Google 搜索"city boy meme"进入前 3 页
- 上线后 1 个月内日访问量达到 500+ UV
- 用户平均停留时间 > 2 分钟
- Meme 下载量 > 100 次/天

---

## 附录：竞品分析总结

### Piñata Farms 优势
1. **功能丰富**：文本、贴纸、布局、模板一应俱全
2. **交互流畅**：实时预览，拖拽体验好
3. **设计简洁**：工具栏布局清晰，易于上手
4. **分享便捷**：支持多平台分享

### 可复刻的核心点
1. **双栏布局**：左侧预览 + 右侧工具栏
2. **按钮式功能切换**：6 个主功能按钮
3. **实时编辑反馈**：每次操作立即在预览区生效
4. **一键分享下载**：降低用户操作门槛

### 可优化的点（V2 考虑）
1. **去除 App 推广**：第一版聚焦 Web 端
2. **简化模板**：第一版仅支持 City Boy，减少开发量
3. **增加本地化**：支持中文界面（可选）

---

**文档版本**：v1.0
**最后更新**：2026-01-17
**编写人**：Claude Sonnet 4.5
