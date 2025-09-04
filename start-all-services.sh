#!/bin/bash

# Lumora Jewel - Start All Services Script
echo "🚀 Starting Lumora Jewel Services..."

# Function to start a service in background
start_service() {
    local service_name=$1
    local service_dir=$2
    local port=$3
    
    echo "📦 Starting $service_name on port $port..."
    cd "$service_dir"
    
    # Check if package.json exists
    if [ ! -f "package.json" ]; then
        echo "❌ Error: package.json not found in $service_dir"
        return 1
    fi
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
        echo "📥 Installing dependencies for $service_name..."
        npm install
    fi
    
    # Start the service in background
    npm run dev > "../logs/${service_name}.log" 2>&1 &
    local pid=$!
    echo "$pid" > "../logs/${service_name}.pid"
    echo "✅ $service_name started with PID: $pid"
    
    cd ..
    sleep 2
}

# Create logs directory
mkdir -p logs

# Check if MongoDB is running
echo "🔍 Checking MongoDB connection..."
if ! mongosh --eval "db.runCommand('ping')" --quiet > /dev/null 2>&1; then
    echo "❌ MongoDB is not running. Starting MongoDB..."
    brew services start mongodb/brew/mongodb-community
    sleep 5
fi

echo "✅ MongoDB is running"

# Start services in order
echo ""
echo "🚀 Starting all microservices..."

# Start API Gateway first
start_service "API-Gateway" "lumora-api-gateway" "3000"

# Start all microservices
start_service "User-Service" "user-service" "3001"
start_service "Auth-Service" "auth-service" "3002"
start_service "Product-Service" "product-service" "3003"
start_service "Category-Service" "category-service" "3004"
start_service "Cart-Service" "cart-service" "3005"
start_service "Order-Service" "order-service" "3006"
start_service "Payment-Service" "payment-service" "3007"
start_service "Notification-Service" "notification-service" "3008"

# Start the client
echo ""
echo "🌐 Starting Lumora Jewel Client..."
cd Lumora-Jewel-Client
if [ ! -d "node_modules" ]; then
    echo "📥 Installing client dependencies..."
    npm install
fi
npm run dev > "../logs/client.log" 2>&1 &
client_pid=$!
echo "$client_pid" > "../logs/client.pid"
echo "✅ Client started with PID: $client_pid"
cd ..

echo ""
echo "🎉 All services started successfully!"
echo ""
echo "📊 Service Status:"
echo "   API Gateway:     http://localhost:3000"
echo "   User Service:    http://localhost:3001"
echo "   Auth Service:    http://localhost:3002"
echo "   Product Service: http://localhost:3003"
echo "   Category Service: http://localhost:3004"
echo "   Cart Service:    http://localhost:3005"
echo "   Order Service:   http://localhost:3006"
echo "   Payment Service: http://localhost:3007"
echo "   Notification Service: http://localhost:3008"
echo "   Client:          http://localhost:5173"
echo ""
echo "📝 Logs are available in the 'logs' directory"
echo "🛑 To stop all services, run: ./stop-all-services.sh"
echo ""
echo "🌐 Open your browser and go to: http://localhost:5173"
