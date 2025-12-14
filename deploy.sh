#!/bin/bash

# TalentWin Deployment Script
# This script helps you build and deploy the Docker container

set -e

echo "🚀 TalentWin Deployment Script"
echo "================================"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "   Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "   Visit: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker and Docker Compose are installed"
echo ""

# Display menu
echo "Select deployment option:"
echo "1) Build and start (first time deployment)"
echo "2) Rebuild and restart (update existing deployment)"
echo "3) Stop containers"
echo "4) View logs"
echo "5) Check status"
echo "6) Remove everything (cleanup)"
echo ""
read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "📦 Building and starting containers..."
        docker-compose up -d --build
        echo ""
        echo "✅ Deployment complete!"
        echo "🌐 Access your website at: http://www.talent-win.com"
        echo ""
        echo "💡 Tip: Run './deploy.sh' and select option 4 to view logs"
        ;;
    2)
        echo ""
        echo "🔄 Rebuilding and restarting..."
        docker-compose down
        docker-compose up -d --build
        echo ""
        echo "✅ Update complete!"
        echo "🌐 Access your website at: http://www.talent-win.com"
        ;;
    3)
        echo ""
        echo "⏹️  Stopping containers..."
        docker-compose down
        echo ""
        echo "✅ Containers stopped"
        ;;
    4)
        echo ""
        echo "📋 Viewing logs (Press Ctrl+C to exit)..."
        echo ""
        docker-compose logs -f
        ;;
    5)
        echo ""
        echo "📊 Container status:"
        docker-compose ps
        echo ""
        echo "💾 Resource usage:"
        docker stats --no-stream talent-win-web 2>/dev/null || echo "Container not running"
        ;;
    6)
        echo ""
        read -p "⚠️  This will remove all containers and images. Continue? (y/n): " confirm
        if [ "$confirm" == "y" ]; then
            echo "🧹 Cleaning up..."
            docker-compose down
            docker rmi talent-win:latest 2>/dev/null || true
            echo "✅ Cleanup complete"
        else
            echo "Cancelled"
        fi
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

