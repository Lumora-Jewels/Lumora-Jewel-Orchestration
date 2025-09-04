#!/bin/bash

# MongoDB Setup Script for Lumora Jewel Services
echo "🚀 Setting up MongoDB for Lumora Jewel Services..."

# Create .env files for each service
echo "📝 Creating environment files..."

# Auth Service
cat > auth-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3002
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
EOF

# Product Service
cat > product-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3003
NODE_ENV=development
EOF

# Category Service
cat > category-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3004
NODE_ENV=development
EOF

# Cart Service
cat > cart-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3005
NODE_ENV=development
EOF

# Order Service
cat > order-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3006
NODE_ENV=development
EOF

# Payment Service
cat > payment-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3007
NODE_ENV=development
EOF

# Notification Service
cat > notification-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3008
NODE_ENV=development
EOF

# User Service
cat > user-service/.env << EOF
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/lumora-jewel

# Service Configuration
PORT=3001
NODE_ENV=development
EOF

# API Gateway
cat > lumora-api-gateway/.env << EOF
# API Gateway Configuration
PORT=3000
NODE_ENV=development

# Service URLs
USER_SERVICE_URL=http://localhost:3001
AUTH_SERVICE_URL=http://localhost:3002
PRODUCT_SERVICE_URL=http://localhost:3003
CATEGORY_SERVICE_URL=http://localhost:3004
CART_SERVICE_URL=http://localhost:3005
ORDER_SERVICE_URL=http://localhost:3006
PAYMENT_SERVICE_URL=http://localhost:3007
NOTIFICATION_SERVICE_URL=http://localhost:3008
EOF

# Client Environment
cat > Lumora-Jewel-Client/.env << EOF
# API Configuration
VITE_API_BASE_URL=http://localhost:3000

# Development
VITE_NODE_ENV=development
EOF

echo "✅ Environment files created successfully!"
echo ""
echo "🔧 Next steps:"
echo "1. Install dependencies for each service:"
echo "   cd auth-service && npm install"
echo "   cd product-service && npm install"
echo "   cd category-service && npm install"
echo "   cd cart-service && npm install"
echo "   cd order-service && npm install"
echo "   cd payment-service && npm install"
echo "   cd notification-service && npm install"
echo "   cd user-service && npm install"
echo "   cd lumora-api-gateway && npm install"
echo "   cd Lumora-Jewel-Client && npm install"
echo ""
echo "2. Start MongoDB (if not already running):"
echo "   brew services start mongodb/brew/mongodb-community"
echo ""
echo "3. Start all services:"
echo "   - Start API Gateway: cd lumora-api-gateway && npm run dev"
echo "   - Start Auth Service: cd auth-service && npm run dev"
echo "   - Start Product Service: cd product-service && npm run dev"
echo "   - Start Category Service: cd category-service && npm run dev"
echo "   - Start Cart Service: cd cart-service && npm run dev"
echo "   - Start Order Service: cd order-service && npm run dev"
echo "   - Start Payment Service: cd payment-service && npm run dev"
echo "   - Start Notification Service: cd notification-service && npm run dev"
echo "   - Start User Service: cd user-service && npm run dev"
echo "   - Start Client: cd Lumora-Jewel-Client && npm run dev"
echo ""
echo "🎉 Your Lumora Jewel application will be ready!"
