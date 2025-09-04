#!/bin/bash

# Add Sample Data Script for Lumora Jewel
echo "🌱 Adding sample data to Lumora Jewel database..."

# Check if MongoDB is running
if ! mongosh --eval "db.runCommand('ping')" --quiet > /dev/null 2>&1; then
    echo "❌ MongoDB is not running. Starting MongoDB..."
    brew services start mongodb/brew/mongodb-community
    sleep 5
fi

echo "✅ MongoDB is running"

# Run the seed script
echo "📊 Seeding database with sample data..."
node seed-sample-data.js

echo ""
echo "🎉 Sample data added successfully!"
echo ""
echo "📋 What was added:"
echo "   - 5 Categories (Diamond Rings, Luxury Watches, Gold Necklaces, Pearl Earrings, Wedding Bands)"
echo "   - 5 Products (with variants, pricing, and images)"
echo "   - 3 Users (including admin user)"
echo "   - 2 Sample notifications"
echo ""
echo "🌐 Your application now has real data to display!"
echo "   Open: http://localhost:5175"
echo ""
echo "💡 To add more data, edit seed-sample-data.js and run this script again"
