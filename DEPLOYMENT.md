# Deployment Guide

This guide covers deploying the TalentWin website using Docker.

## Prerequisites

- Docker installed on your server ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose installed ([Install Docker Compose](https://docs.docker.com/compose/install/))
- Basic command line knowledge

## Quick Start with Docker Compose

### 1. Build and Run

```bash
docker-compose up -d
```

This will:
- Build the Docker image
- Start the container
- Expose the website on port 8080

### 2. Access Your Website

Open your browser and go to:
```
http://localhost:8080
```

Or if deployed on a server:
```
http://your-server-ip:8080
```

### 3. Stop the Container

```bash
docker-compose down
```

## Manual Docker Commands

### Build the Image

```bash
docker build -t talent-win:latest .
```

### Run the Container

```bash
docker run -d \
  --name talent-win-web \
  -p 8080:80 \
  --restart unless-stopped \
  talent-win:latest
```

### View Logs

```bash
docker logs talent-win-web
```

### Stop the Container

```bash
docker stop talent-win-web
docker rm talent-win-web
```

## Production Deployment

### 1. Update Port (Optional)

If you want to run on port 80 (default HTTP), edit `docker-compose.yml`:

```yaml
ports:
  - "80:80"  # Changed from 8080:80
```

### 2. Deploy to Server

**Option A: Direct Docker**

```bash
# On your server
git clone <your-repo>
cd talent-win
docker-compose up -d
```

**Option B: Using Docker Registry**

```bash
# Build and tag
docker build -t your-registry/talent-win:v1.0 .

# Push to registry (Docker Hub, AWS ECR, etc.)
docker push your-registry/talent-win:v1.0

# On server: Pull and run
docker pull your-registry/talent-win:v1.0
docker run -d -p 80:80 your-registry/talent-win:v1.0
```

### 3. Set Up Domain (Optional)

If you have a domain name, configure your DNS to point to your server IP, then set up a reverse proxy with SSL.

#### Using Nginx Reverse Proxy with SSL

1. Install Certbot for SSL:
```bash
sudo apt install certbot python3-certbot-nginx
```

2. Get SSL certificate:
```bash
sudo certbot --nginx -d your-domain.com
```

3. Nginx will automatically configure HTTPS

#### Or Use Traefik (Docker-based reverse proxy)

See the Advanced section below.

## Environment Variables

To use environment variables (e.g., for API keys), update `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - VITE_API_URL=https://api.example.com
```

Then rebuild:
```bash
docker-compose up -d --build
```

## Health Checks

The container includes a health check endpoint at `/health`:

```bash
curl http://localhost:8080/health
# Should return: healthy
```

Check container health:
```bash
docker ps
# Look for (healthy) status
```

## Performance Optimization

The Docker image includes:
- ✅ Multi-stage build (smaller image size)
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Security headers
- ✅ Alpine Linux (lightweight)

Final image size: ~40MB

## Updating the Application

### Method 1: Rebuild

```bash
git pull
docker-compose down
docker-compose up -d --build
```

### Method 2: Zero-downtime Update

```bash
docker-compose build
docker-compose up -d --no-deps --build talent-win
```

## Monitoring

### View Real-time Logs

```bash
docker-compose logs -f
```

### Check Resource Usage

```bash
docker stats talent-win-web
```

## Common Deployment Platforms

### 阿里云 (Alibaba Cloud) - 详细部署指南

阿里云提供多种部署方式，推荐使用ECS云服务器或容器服务。

#### 方法一：使用阿里云ECS云服务器（推荐新手）

**1. 创建ECS实例**

登录阿里云控制台：
- 选择 ECS → 实例 → 创建实例
- 推荐配置：
  - 地域：选择离用户最近的地域
  - 实例规格：ecs.t6-c1m1.large（1核2GB）或更高
  - 操作系统：Ubuntu 22.04 64位 或 CentOS 8.x
  - 网络：按量付费或包年包月
  - 公网IP：分配公网IP
  - 安全组：开放 22(SSH)、80(HTTP)、443(HTTPS) 端口

**2. 连接到ECS实例**

```bash
# 使用SSH连接（替换为你的ECS公网IP）
ssh root@your-ecs-ip

# 首次登录建议更新系统
sudo apt update && sudo apt upgrade -y  # Ubuntu/Debian
# 或
sudo yum update -y  # CentOS
```

**3. 安装Docker和Docker Compose**

```bash
# 安装Docker
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 启动Docker服务
sudo systemctl start docker
sudo systemctl enable docker

# 验证安装
docker --version

# 安装Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 验证安装
docker-compose --version
```

**4. 配置Docker镜像加速（使用阿里云镜像加速器）**

```bash
# 创建daemon.json文件
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://registry.cn-hangzhou.aliyuncs.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
EOF

# 重启Docker
sudo systemctl daemon-reload
sudo systemctl restart docker
```

**5. 上传项目文件**

方法A - 使用Git（推荐）:
```bash
# 在ECS上安装git
sudo apt install git -y  # Ubuntu
# 或
sudo yum install git -y  # CentOS

# 克隆项目
git clone https://github.com/your-username/talent-win.git
cd talent-win
```

方法B - 使用SCP上传:
```bash
# 在本地电脑运行（压缩项目）
cd /Users/eureka/Desktop/Projects/talent-win
tar -czf talent-win.tar.gz .

# 上传到ECS
scp talent-win.tar.gz root@your-ecs-ip:/root/

# 在ECS上解压
ssh root@your-ecs-ip
mkdir -p talent-win
cd talent-win
tar -xzf ../talent-win.tar.gz
```

**6. 部署应用**

```bash
# 构建并启动
docker-compose up -d --build

# 查看日志
docker-compose logs -f

# 检查状态
docker-compose ps
```

**7. 配置安全组规则**

返回阿里云控制台：
- ECS → 网络与安全 → 安全组
- 点击配置规则
- 添加入方向规则：
  - 端口范围：8080/8080
  - 授权对象：0.0.0.0/0
  - 描述：TalentWin网站

**8. 访问网站**

```
http://your-ecs-ip:8080
```

**9. 配置域名（可选）**

如果你有域名：
- 在阿里云域名控制台添加A记录
- 记录值：填写ECS公网IP
- 等待DNS生效（通常5-10分钟）

**10. 配置SSL证书（可选）**

使用阿里云免费SSL证书：

```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx -y

# 获取证书（替换your-domain.com）
sudo certbot certonly --standalone -d your-domain.com

# 修改docker-compose.yml添加证书挂载
```

或使用阿里云SSL证书服务（推荐）：
- 云盾 → SSL证书 → 购买证书（有免费版）
- 下载Nginx格式证书
- 配置到nginx.conf

#### 方法二：使用阿里云容器镜像服务ACR + ECS

**1. 创建容器镜像仓库**

```bash
# 登录阿里云容器镜像服务
# 控制台：https://cr.console.aliyun.com

# 创建命名空间：talent-win
# 创建镜像仓库：talent-win-web
```

**2. 本地构建并推送镜像**

```bash
# 登录阿里云镜像仓库（替换为你的地域和账号）
docker login --username=your-aliyun-account registry.cn-hangzhou.aliyuncs.com

# 构建镜像
docker build -t registry.cn-hangzhou.aliyuncs.com/talent-win/talent-win-web:v1.0 .

# 推送镜像
docker push registry.cn-hangzhou.aliyuncs.com/talent-win/talent-win-web:v1.0
```

**3. 在ECS上拉取运行**

```bash
# SSH连接到ECS
ssh root@your-ecs-ip

# 登录阿里云镜像仓库
docker login --username=your-aliyun-account registry.cn-hangzhou.aliyuncs.com

# 拉取镜像
docker pull registry.cn-hangzhou.aliyuncs.com/talent-win/talent-win-web:v1.0

# 运行容器
docker run -d \
  --name talent-win-web \
  -p 80:80 \
  --restart unless-stopped \
  registry.cn-hangzhou.aliyuncs.com/talent-win/talent-win-web:v1.0
```

#### 方法三：使用阿里云容器服务ACK（Kubernetes）

适合大规模部署和自动扩缩容。

**1. 创建ACK集群**

- 容器服务 → Kubernetes → 集群
- 创建托管版集群
- 选择配置（最低配置即可用于测试）

**2. 创建deployment.yaml**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: talent-win
spec:
  replicas: 2
  selector:
    matchLabels:
      app: talent-win
  template:
    metadata:
      labels:
        app: talent-win
    spec:
      containers:
      - name: talent-win
        image: registry.cn-hangzhou.aliyuncs.com/talent-win/talent-win-web:v1.0
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: talent-win-service
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: talent-win
```

**3. 部署到ACK**

```bash
kubectl apply -f deployment.yaml
kubectl get services  # 获取LoadBalancer IP
```

#### 性能优化建议

**1. 使用阿里云CDN加速**

- CDN → 添加域名
- 源站类型：选择IP
- 源站地址：填写ECS公网IP
- 配置HTTPS和缓存规则

**2. 使用对象存储OSS**

如果有大量静态资源：
```bash
# 将构建产物上传到OSS
# 修改nginx配置指向OSS
```

**3. 监控和告警**

- 云监控 → 主机监控
- 设置CPU、内存、磁盘告警
- 配置通知方式（短信/邮件）

#### 成本优化

- **抢占式实例**：比按量付费便宜70%（适合测试）
- **包年包月**：长期使用可享折扣
- **预留实例券**：大幅降低成本
- **小规模建议配置**：
  - ECS: 1核2GB (约￥70/月)
  - 带宽: 1-5Mbps按需
  - 存储: 40GB系统盘

#### 故障排查

**容器无法启动**
```bash
# 查看详细日志
docker logs talent-win-web

# 检查端口占用
netstat -tunlp | grep 8080
```

**无法访问网站**
```bash
# 检查防火墙
sudo ufw status
sudo ufw allow 8080/tcp

# 检查安全组规则（阿里云控制台）
# 确认8080端口已开放
```

**内存不足**
```bash
# 查看内存使用
free -h

# 清理Docker
docker system prune -a
```

#### 自动化部署脚本（阿里云专用）

创建 `deploy-aliyun.sh`:

```bash
#!/bin/bash
# 阿里云自动部署脚本

echo "🚀 开始部署到阿里云..."

# 拉取最新代码
git pull origin main

# 重新构建
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# 清理旧镜像
docker image prune -f

echo "✅ 部署完成！"
echo "🌐 访问: http://$(curl -s ifconfig.me):8080"
```

#### 常用命令

```bash
# 查看ECS公网IP
curl ifconfig.me

# 查看容器状态
docker ps

# 查看资源使用
docker stats

# 重启应用
docker-compose restart

# 查看实时日志
docker-compose logs -f
```

#### 技术支持

- 阿里云文档：https://help.aliyun.com/
- ECS文档：https://help.aliyun.com/product/25365.html
- 容器服务文档：https://help.aliyun.com/product/85222.html

---

### AWS EC2 / DigitalOcean / Linode

1. SSH into your server
2. Install Docker and Docker Compose
3. Clone your repository
4. Run `docker-compose up -d`
5. Configure security groups/firewall to allow port 80/443

### AWS ECS (Elastic Container Service)

1. Push image to Amazon ECR
2. Create ECS Task Definition
3. Create ECS Service
4. Configure Application Load Balancer

### Google Cloud Run

```bash
gcloud run deploy talent-win \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Heroku

```bash
heroku container:push web -a your-app-name
heroku container:release web -a your-app-name
```

### Vercel / Netlify (Alternative - No Docker Needed)

For simpler deployment without Docker:

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## Advanced: Docker Compose with Traefik (Reverse Proxy + SSL)

Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  traefik:
    image: traefik:v2.10
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      - "--certificatesresolvers.myresolver.acme.email=your-email@example.com"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./letsencrypt:/letsencrypt"
    restart: unless-stopped

  talent-win:
    build: .
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.talent-win.rule=Host(`your-domain.com`)"
      - "traefik.http.routers.talent-win.entrypoints=websecure"
      - "traefik.http.routers.talent-win.tls.certresolver=myresolver"
      - "traefik.http.services.talent-win.loadbalancer.server.port=80"
    restart: unless-stopped
```

Run with:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Troubleshooting

### Container won't start
```bash
docker logs talent-win-web
```

### Port already in use
Change port in docker-compose.yml or stop conflicting service:
```bash
sudo lsof -i :8080
```

### Image too large
The multi-stage build should keep it small (~40MB). If larger, check .dockerignore.

### Can't connect from outside
Check firewall rules:
```bash
sudo ufw allow 8080/tcp
```

## Security Best Practices

1. ✅ Run as non-root user (nginx does this by default)
2. ✅ Use security headers (configured in nginx.conf)
3. ✅ Keep Docker images updated
4. ✅ Use SSL/TLS in production (with Traefik or Certbot)
5. ✅ Limit exposed ports
6. ✅ Use environment variables for secrets (never commit them)

## Backup

The application is stateless, so just backup your source code. If you add a backend/database later, back those up separately.

## Need Help?

- Docker Documentation: https://docs.docker.com/
- Nginx Documentation: https://nginx.org/en/docs/
- Digital Ocean Tutorials: https://www.digitalocean.com/community/tags/docker

---

**Quick Reference Commands:**

```bash
# Start
docker-compose up -d

# Stop
docker-compose down

# View logs
docker-compose logs -f

# Rebuild
docker-compose up -d --build

# Check status
docker-compose ps
```

