#!/bin/bash

# TalentWin 阿里云部署脚本
# Alibaba Cloud Deployment Script for TalentWin

set -e

echo "================================================"
echo "🚀 TalentWin 阿里云自动部署脚本"
echo "   Alibaba Cloud Deployment Script"
echo "================================================"
echo ""

# 检查是否安装Docker
if ! command -v docker &> /dev/null; then
    echo "❌ 未检测到Docker，开始安装..."
    echo "   Installing Docker..."
    
    # 使用阿里云镜像安装Docker
    curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
    
    # 启动Docker服务
    sudo systemctl start docker
    sudo systemctl enable docker
    
    echo "✅ Docker安装完成"
fi

# 检查是否安装Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "❌ 未检测到Docker Compose，开始安装..."
    echo "   Installing Docker Compose..."
    
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    
    echo "✅ Docker Compose安装完成"
fi

# 配置Docker镜像加速（阿里云镜像）
if [ ! -f /etc/docker/daemon.json ]; then
    echo "⚙️  配置Docker镜像加速..."
    sudo mkdir -p /etc/docker
    sudo tee /etc/docker/daemon.json > /dev/null <<-'EOF'
{
  "registry-mirrors": [
    "https://registry.cn-hangzhou.aliyuncs.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
EOF
    sudo systemctl daemon-reload
    sudo systemctl restart docker
    echo "✅ 镜像加速配置完成"
fi

echo ""
echo "选择部署操作："
echo "Select deployment option:"
echo ""
echo "1) 首次部署 (First time deployment)"
echo "2) 更新部署 (Update deployment)"
echo "3) 停止服务 (Stop services)"
echo "4) 查看日志 (View logs)"
echo "5) 查看状态 (Check status)"
echo "6) 重启服务 (Restart services)"
echo "7) 清理系统 (Clean up)"
echo "8) 配置防火墙 (Configure firewall)"
echo ""
read -p "请输入选项 (1-8): " choice

case $choice in
    1)
        echo ""
        echo "📦 开始首次部署..."
        echo "   Starting first deployment..."
        
        # 检查docker-compose.yml是否存在
        if [ ! -f docker-compose.yml ]; then
            echo "❌ 错误：找不到docker-compose.yml文件"
            echo "   请确保在项目根目录运行此脚本"
            exit 1
        fi
        
        # 构建并启动
        docker-compose up -d --build
        
        echo ""
        echo "✅ 部署完成！"
        echo "   Deployment completed!"
        echo ""
        echo "🌐 访问地址 (Access URL):"
        PUBLIC_IP=$(curl -s ifconfig.me 2>/dev/null || echo "获取失败")
        echo "   http://$PUBLIC_IP:8080"
        echo ""
        echo "💡 提示：请确保阿里云安全组已开放8080端口"
        echo "   Tip: Make sure port 8080 is open in Aliyun Security Group"
        ;;
        
    2)
        echo ""
        echo "🔄 开始更新部署..."
        echo "   Starting update..."
        
        # 如果是Git仓库，拉取最新代码
        if [ -d .git ]; then
            echo "📥 拉取最新代码..."
            git pull origin main || git pull origin master
        fi
        
        # 停止现有容器
        docker-compose down
        
        # 重新构建并启动
        docker-compose up -d --build
        
        # 清理旧镜像
        docker image prune -f
        
        echo ""
        echo "✅ 更新完成！"
        echo "   Update completed!"
        PUBLIC_IP=$(curl -s ifconfig.me 2>/dev/null || echo "获取失败")
        echo "🌐 访问: http://$PUBLIC_IP:8080"
        ;;
        
    3)
        echo ""
        echo "⏹️  停止服务..."
        echo "   Stopping services..."
        docker-compose down
        echo "✅ 服务已停止"
        echo "   Services stopped"
        ;;
        
    4)
        echo ""
        echo "📋 查看日志 (按Ctrl+C退出)"
        echo "   Viewing logs (Press Ctrl+C to exit)"
        echo ""
        docker-compose logs -f
        ;;
        
    5)
        echo ""
        echo "📊 服务状态 (Service status):"
        echo "================================"
        docker-compose ps
        echo ""
        echo "💾 资源使用 (Resource usage):"
        echo "================================"
        docker stats --no-stream talent-win-web 2>/dev/null || echo "容器未运行 (Container not running)"
        echo ""
        echo "🌐 公网IP (Public IP):"
        curl -s ifconfig.me
        echo ""
        ;;
        
    6)
        echo ""
        echo "🔄 重启服务..."
        echo "   Restarting services..."
        docker-compose restart
        echo "✅ 服务已重启"
        echo "   Services restarted"
        ;;
        
    7)
        echo ""
        read -p "⚠️  将清理未使用的Docker资源，继续？(y/n): " confirm
        if [ "$confirm" == "y" ]; then
            echo "🧹 清理中..."
            docker-compose down
            docker system prune -a -f
            docker volume prune -f
            echo "✅ 清理完成"
            echo "   Cleanup completed"
        else
            echo "已取消 (Cancelled)"
        fi
        ;;
        
    8)
        echo ""
        echo "🔧 配置防火墙..."
        echo "   Configuring firewall..."
        
        # 检查防火墙类型
        if command -v ufw &> /dev/null; then
            # Ubuntu/Debian使用ufw
            sudo ufw allow 8080/tcp
            sudo ufw allow 80/tcp
            sudo ufw allow 443/tcp
            echo "✅ UFW防火墙规则已添加"
        elif command -v firewall-cmd &> /dev/null; then
            # CentOS使用firewalld
            sudo firewall-cmd --permanent --add-port=8080/tcp
            sudo firewall-cmd --permanent --add-port=80/tcp
            sudo firewall-cmd --permanent --add-port=443/tcp
            sudo firewall-cmd --reload
            echo "✅ Firewalld规则已添加"
        else
            echo "⚠️  未检测到防火墙管理工具"
        fi
        
        echo ""
        echo "📝 重要提示："
        echo "   还需要在阿里云控制台配置安全组规则："
        echo "   1. 登录阿里云控制台"
        echo "   2. ECS → 网络与安全 → 安全组"
        echo "   3. 添加入方向规则："
        echo "      - 端口: 8080/8080"
        echo "      - 授权对象: 0.0.0.0/0"
        ;;
        
    *)
        echo "❌ 无效选项"
        echo "   Invalid option"
        exit 1
        ;;
esac

echo ""
echo "================================================"
echo "✅ 操作完成！"
echo "================================================"

