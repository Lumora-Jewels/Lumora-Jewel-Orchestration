# 🗄️ MongoDB Setup Guide for Lumora Jewel

## ✅ **MongoDB is Already Installed and Running!**

Your MongoDB is successfully installed and running on your system. Here's everything you need to know:

## 🔧 **Current Setup**

- **MongoDB Version**: 8.2.0
- **Connection String**: `mongodb://localhost:27017/lumora-jewel`
- **Status**: ✅ Running
- **Database**: `lumora-jewel`

## 📁 **Environment Files Created**

All services now have `.env` files with the correct MongoDB connection:

- ✅ `auth-service/.env`
- ✅ `product-service/.env`
- ✅ `category-service/.env`
- ✅ `cart-service/.env`
- ✅ `order-service/.env`
- ✅ `payment-service/.env`
- ✅ `notification-service/.env`
- ✅ `user-service/.env`
- ✅ `lumora-api-gateway/.env`
- ✅ `Lumora-Jewel-Client/.env`

## 🚀 **Quick Start Commands**

### **Start All Services:**
```bash
./start-all-services.sh
```

### **Stop All Services:**
```bash
./stop-all-services.sh
```

### **Manual MongoDB Commands:**

#### **Start MongoDB:**
```bash
brew services start mongodb/brew/mongodb-community
```

#### **Stop MongoDB:**
```bash
brew services stop mongodb/brew/mongodb-community
```

#### **Check MongoDB Status:**
```bash
brew services list | grep mongodb
```

#### **Connect to MongoDB Shell:**
```bash
mongosh
```

#### **Test Connection:**
```bash
mongosh --eval "db.runCommand('ping')" --quiet
```

## 🗃️ **Database Structure**

Your services will create the following collections in the `lumora-jewel` database:

- **users** - User accounts and profiles
- **products** - Product catalog
- **categories** - Product categories
- **carts** - Shopping carts
- **orders** - Order history
- **payments** - Payment records
- **notifications** - User notifications

## 🔍 **MongoDB Management**

### **View All Databases:**
```bash
mongosh --eval "show dbs"
```

### **Switch to Lumora Database:**
```bash
mongosh
use lumora-jewel
```

### **View Collections:**
```bash
show collections
```

### **View Documents in a Collection:**
```bash
db.users.find()
db.products.find()
db.categories.find()
```

### **Clear All Data (Development Only):**
```bash
use lumora-jewel
db.dropDatabase()
```

## 🛠️ **Troubleshooting**

### **MongoDB Not Starting:**
```bash
# Check if MongoDB is already running
brew services list | grep mongodb

# Restart MongoDB
brew services restart mongodb/brew/mongodb-community

# Check MongoDB logs
tail -f /opt/homebrew/var/log/mongodb/mongo.log
```

### **Connection Issues:**
1. Ensure MongoDB is running: `brew services list | grep mongodb`
2. Check if port 27017 is available: `lsof -i :27017`
3. Verify connection string in `.env` files

### **Permission Issues:**
```bash
# Fix MongoDB data directory permissions
sudo chown -R $(whoami) /opt/homebrew/var/mongodb
```

## 📊 **Service Ports**

| Service | Port | URL |
|---------|------|-----|
| API Gateway | 3000 | http://localhost:3000 |
| User Service | 3001 | http://localhost:3001 |
| Auth Service | 3002 | http://localhost:3002 |
| Product Service | 3003 | http://localhost:3003 |
| Category Service | 3004 | http://localhost:3004 |
| Cart Service | 3005 | http://localhost:3005 |
| Order Service | 3006 | http://localhost:3006 |
| Payment Service | 3007 | http://localhost:3007 |
| Notification Service | 3008 | http://localhost:3008 |
| Client | 5173 | http://localhost:5173 |

## 🎯 **Next Steps**

1. **Start all services:**
   ```bash
   ./start-all-services.sh
   ```

2. **Open your browser:**
   ```
   http://localhost:5173
   ```

3. **Test the application:**
   - Register a new user
   - Browse products
   - Add items to cart
   - Complete checkout

## 🔐 **Security Notes**

- Change the `JWT_SECRET` in production
- Use environment-specific MongoDB URIs
- Enable MongoDB authentication for production
- Use MongoDB Atlas for cloud deployment

## 📝 **Logs**

Service logs are available in the `logs/` directory:
- `logs/API-Gateway.log`
- `logs/Auth-Service.log`
- `logs/Product-Service.log`
- `logs/Category-Service.log`
- `logs/Cart-Service.log`
- `logs/Order-Service.log`
- `logs/Payment-Service.log`
- `logs/Notification-Service.log`
- `logs/User-Service.log`
- `logs/client.log`

## 🎉 **You're All Set!**

Your MongoDB is properly configured and ready to use with all your Lumora Jewel services. The database will automatically create collections as your services start and users interact with the application.
