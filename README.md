# 🏗️ Lumora Jewel - Microservices Orchestration

This repository contains the orchestration and management scripts for the Lumora Jewel microservices architecture.

## 📁 Repository Structure

This orchestration repository includes:

- **Service Management Scripts**
  - `start-all-services.sh` - Start all microservices and client
  - `stop-all-services.sh` - Stop all running services
  - `add-sample-data.sh` - Add sample data to database
  - `setup-mongodb.sh` - MongoDB setup and configuration

- **Database Management**
  - `seed-sample-data.js` - Comprehensive sample data seeding
  - `test-api.js` - API endpoint testing script
  - `MONGODB_SETUP_GUIDE.md` - Complete MongoDB setup guide

- **Configuration**
  - `package.json` - Root package configuration
  - `package-lock.json` - Dependency lock file

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.2 or higher)
- Git

### Setup
1. Clone this repository
2. Ensure MongoDB is running
3. Run the setup script:
   ```bash
   ./setup-mongodb.sh
   ```

### Start All Services
```bash
./start-all-services.sh
```

### Stop All Services
```bash
./stop-all-services.sh
```

### Seed Sample Data
```bash
node seed-sample-data.js
```

### Test API Endpoints
```bash
node test-api.js
```

## 🏗️ Architecture Overview

The Lumora Jewel application consists of:

### **Microservices**
- **API Gateway** (Port 3000) - Central routing and load balancing
- **User Service** (Port 3001) - User management
- **Auth Service** (Port 3002) - Authentication & JWT
- **Product Service** (Port 3003) - Product catalog
- **Category Service** (Port 3004) - Product categories
- **Cart Service** (Port 3005) - Shopping cart
- **Order Service** (Port 3006) - Order management
- **Payment Service** (Port 3007) - Payment processing
- **Notification Service** (Port 3008) - User notifications

### **Client Application**
- **React Client** (Port 5173) - Frontend application

### **Database**
- **MongoDB** (Port 27017) - Primary database

## 📊 Service URLs

| Service | URL | Description |
|---------|-----|-------------|
| API Gateway | http://localhost:3000 | Central API endpoint |
| Client | http://localhost:5173 | Frontend application |
| User Service | http://localhost:3001 | User management |
| Auth Service | http://localhost:3002 | Authentication |
| Product Service | http://localhost:3003 | Product catalog |
| Category Service | http://localhost:3004 | Categories |
| Cart Service | http://localhost:3005 | Shopping cart |
| Order Service | http://localhost:3006 | Order management |
| Payment Service | http://localhost:3007 | Payment processing |
| Notification Service | http://localhost:3008 | Notifications |

## 🗄️ Database Collections

The application uses the following MongoDB collections:

- **users** - User accounts and profiles
- **products** - Product catalog
- **categories** - Product categories
- **carts** - Shopping carts
- **orders** - Order history
- **payments** - Payment records
- **notifications** - User notifications

## 📊 Sample Data

The `seed-sample-data.js` script creates comprehensive sample data including:

- **7 Categories**: Diamond Rings, Luxury Watches, Gold Necklaces, Pearl Earrings, Wedding Bands, Bracelets, Pendants
- **8 Products**: Complete product catalog with variants, pricing, and images
- **5 Users**: Including regular users and admin accounts
- **3 Notifications**: Sample user notifications
- **1 Sample Order**: Complete order with shipping and payment details

All data includes proper MongoDB ObjectIds and relationships between collections.

## 🔧 Environment Configuration

Each service requires a `.env` file with the following variables:

### API Gateway
```env
PORT=3000
NODE_ENV=development
USER_SERVICE_URL=http://localhost:3001
AUTH_SERVICE_URL=http://localhost:3002
PRODUCT_SERVICE_URL=http://localhost:3003
CATEGORY_SERVICE_URL=http://localhost:3004
CART_SERVICE_URL=http://localhost:3005
ORDER_SERVICE_URL=http://localhost:3006
PAYMENT_SERVICE_URL=http://localhost:3007
NOTIFICATION_SERVICE_URL=http://localhost:3008
```

### Services
```env
MONGO_URI=mongodb://localhost:27017/lumora-jewel
PORT=<service_port>
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
```

### Client
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_NODE_ENV=development
```

## 📝 Logs

Service logs are available in the `logs/` directory:
- `API-Gateway.log`
- `Auth-Service.log`
- `Product-Service.log`
- `Category-Service.log`
- `Cart-Service.log`
- `Order-Service.log`
- `Payment-Service.log`
- `Notification-Service.log`
- `User-Service.log`
- `client.log`

## 🧪 Testing

### API Testing
```bash
node test-api.js
```

### Manual Testing
1. Start all services: `./start-all-services.sh`
2. Open browser: http://localhost:5173
3. Register a new user
4. Browse products
5. Add items to cart
6. Complete checkout

## 🐳 Docker Support

Each service includes a Dockerfile for containerization:

```bash
# Build all services
docker-compose build

# Start all services
docker-compose up

# Stop all services
docker-compose down
```

## 🔐 Security Notes

- Change the `JWT_SECRET` in production
- Use environment-specific MongoDB URIs
- Enable MongoDB authentication for production
- Use MongoDB Atlas for cloud deployment

## 📚 Documentation

- [MongoDB Setup Guide](MONGODB_SETUP_GUIDE.md)
- [API Documentation](docs/api.md)
- [Deployment Guide](docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the logs in the `logs/` directory
- Review the MongoDB setup guide

---

**Lumora Jewel** - Elegant jewelry e-commerce platform built with microservices architecture.
