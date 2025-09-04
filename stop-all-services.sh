#!/bin/bash

# Lumora Jewel - Stop All Services Script
echo "🛑 Stopping Lumora Jewel Services..."

# Function to stop a service
stop_service() {
    local service_name=$1
    local pid_file="logs/${service_name}.pid"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo "🛑 Stopping $service_name (PID: $pid)..."
            kill "$pid"
            rm "$pid_file"
            echo "✅ $service_name stopped"
        else
            echo "⚠️  $service_name was not running"
            rm "$pid_file"
        fi
    else
        echo "⚠️  No PID file found for $service_name"
    fi
}

# Stop all services
stop_service "client"
stop_service "API-Gateway"
stop_service "User-Service"
stop_service "Auth-Service"
stop_service "Product-Service"
stop_service "Category-Service"
stop_service "Cart-Service"
stop_service "Order-Service"
stop_service "Payment-Service"
stop_service "Notification-Service"

echo ""
echo "✅ All services stopped successfully!"
echo ""
echo "💡 To start all services again, run: ./start-all-services.sh"
