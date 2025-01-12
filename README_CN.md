# 下雪概率计算器

一个基于实时天气数据，预测下雪概率的网页应用。

## 功能特点

- 实时天气数据查询
- 精确的降雪概率计算
- 5天天气预报展示
- 响应式设计，完美支持移动端
- 优雅的用户界面

## 技术栈

- React 18
- TypeScript
- Vite
- OpenWeather API
- Axios
- React Query

## 本地开发

### 1. 克隆项目
```bash
git clone <你的仓库地址>
cd snow-calculator
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
在项目根目录创建 `.env` 文件，添加以下内容：
```
VITE_OPENWEATHER_API_KEY=你的_OPENWEATHER_API_密钥
```

> 注意：你需要在 [OpenWeather](https://openweathermap.org/) 注册账号并获取 API 密钥

### 4. 启动开发服务器
```bash
npm run dev
```

## 项目部署

本项目使用 Vercel 进行部署。Vercel 是一个优秀的前端部署平台，提供：
- 自动部署
- 全球 CDN
- 免费 SSL 证书
- 持续集成

### 部署步骤

#### 方式一：通过 Vercel 网站（推荐）

1. 注册 [Vercel](https://vercel.com) 账号
2. 在 Vercel 控制台点击 "Import Project"
3. 选择你的 GitHub 仓库
4. 配置部署选项：
   - Framework Preset: 选择 "Vite"
   - Build Command: 使用默认的 `npm run build`
   - Output Directory: 使用默认的 `dist`
5. 添加环境变量：
   - 名称：`VITE_OPENWEATHER_API_KEY`
   - 值：你的 OpenWeather API 密钥
6. 点击 "Deploy"

#### 方式二：通过命令行

1. 安装 Vercel CLI
```bash
npm install -g vercel
```

2. 登录 Vercel
```bash
vercel login
```

3. 部署项目
```bash
vercel
```

### 注意事项

- 确保在 Vercel 项目设置中添加了环境变量 `VITE_OPENWEATHER_API_KEY`
- 建议开启自动部署功能，这样每次推送代码到主分支时都会自动更新网站
- 首次部署后，Vercel 会自动分配一个域名（例如：https://snow-calculator.vercel.app）

## 问题反馈

如果你在使用过程中遇到任何问题，或有任何建议，欢迎：
1. 提交 Issue
2. 提交 Pull Request
3. 联系项目维护者

## 许可证

MIT
