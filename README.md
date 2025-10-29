# TalentWin - Headhunting Firm Website

A modern, responsive React website for a professional headhunting and executive search firm.

## Features

- 🎨 Modern, professional UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Vite for fast development
- 🎯 Clean component architecture
- 💼 Professional sections: Hero, Services, About, Contact
- 📊 Statistics showcase
- 📧 Working contact form with EmailJS integration (no backend required!)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
talent-win/
├── src/
│   ├── components/
│   │   ├── Header.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── Stats.jsx/css
│   │   ├── Services.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Email Setup

The contact form uses EmailJS to send emails without a backend server.

**To enable email functionality:**
1. Follow the instructions in `EMAILJS_SETUP.md`
2. Sign up at [EmailJS.com](https://www.emailjs.com/) (free tier: 200 emails/month)
3. Configure your credentials in `src/components/Contact.jsx`

The form will work without setup (demo mode), but emails won't actually be sent until you configure EmailJS.

## Customization

- Update company information in the Contact component
- Modify services in the Services component
- Change color scheme in CSS files
- Add your logo by replacing the emoji icon in Header
- Replace placeholder images with your own professional photos

## Technologies Used

- React 18
- Vite
- CSS3 (with modern features like Grid, Flexbox, animations)

## Docker Deployment

The project includes Docker support for easy deployment to any server.

### Quick Start with Docker

```bash
# Build and run
docker-compose up -d

# Access at http://localhost:8080
```

### Production Deployment

**English:** See `DEPLOYMENT.md` for detailed instructions on:
- Deploying to AWS, DigitalOcean, Google Cloud, **Alibaba Cloud**, etc.
- Setting up SSL/HTTPS
- Using custom domains
- Zero-downtime updates
- Monitoring and troubleshooting

**中文：** 阿里云部署请查看 `阿里云部署快速指南.md`：
- 完整的阿里云ECS部署步骤
- 容器镜像服务ACR使用方法
- 域名配置和SSL证书
- 性能优化和成本控制
- 常见问题解决方案

**代码更新流程：**
- 📖 `更新部署流程.md` - 详细的代码更新和重新部署指南
- ⚡ `快速更新指南.md` - 单页快速参考（适合打印）

### Deployment Scripts

```bash
# General deployment (interactive)
./deploy.sh

# Alibaba Cloud specific (阿里云专用)
./deploy-aliyun.sh
```

## License

MIT

