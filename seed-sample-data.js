const { MongoClient, ObjectId } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017/lumora-jewel';

const sampleData = {
  categories: [
    {
      _id: new ObjectId(),
      name: 'Diamond Rings',
      parentCategoryId: null,
      description: 'Exquisite diamond rings for special occasions',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Luxury Watches',
      parentCategoryId: null,
      description: 'Premium timepieces for the discerning',
      image: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f7ffa1?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Gold Necklaces',
      parentCategoryId: null,
      description: 'Elegant gold necklaces and chains',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Pearl Earrings',
      parentCategoryId: null,
      description: 'Classic pearl earrings for timeless elegance',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Wedding Bands',
      parentCategoryId: null,
      description: 'Symbol of eternal love and commitment',
      image: 'https://images.unsplash.com/photo-1603561596112-db1b0b3b2b3b?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Bracelets',
      parentCategoryId: null,
      description: 'Elegant bracelets for every occasion',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Pendants',
      parentCategoryId: null,
      description: 'Beautiful pendants and charms',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  products: [
    {
      _id: new ObjectId(),
      name: 'Elegant Diamond Solitaire Ring',
      description: 'Classic solitaire ring featuring a brilliant-cut diamond in 18k white gold setting',
      SKU: 'DR001',
      price: 2500,
      discount: 10,
      stock: 5,
      variants: [
        { color: 'White Gold', size: '6', material: '18k Gold' },
        { color: 'Yellow Gold', size: '7', material: '18k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
        'https://images.unsplash.com/photo-1603561596112-db1b0b3b2b3b?w=400'
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Vintage Rose Gold Wedding Band',
      description: 'Intricate vintage-style wedding band with milgrain detailing',
      SKU: 'WB001',
      price: 850,
      discount: 0,
      stock: 12,
      variants: [
        { color: 'Rose Gold', size: '5', material: '14k Gold' },
        { color: 'Rose Gold', size: '6', material: '14k Gold' },
        { color: 'Rose Gold', size: '7', material: '14k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: ['https://images.unsplash.com/photo-1603561596112-db1b0b3b2b3b?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Luxury Swiss Watch',
      description: 'Premium automatic watch with sapphire crystal',
      SKU: 'LW001',
      price: 4500,
      discount: 5,
      stock: 8,
      variants: [
        { color: 'Silver', size: '42mm', material: 'Stainless Steel' },
        { color: 'Gold', size: '40mm', material: '18k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: ['https://images.unsplash.com/photo-1523170335258-f5c6c6f7ffa1?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Pearl Drop Earrings',
      description: 'Elegant freshwater pearl earrings with gold accents',
      SKU: 'PE001',
      price: 450,
      discount: 20,
      stock: 15,
      variants: [
        { color: 'White Pearl', material: '14k Gold' },
        { color: 'Black Pearl', material: '14k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Gold Chain Necklace',
      description: 'Classic gold chain necklace with adjustable length',
      SKU: 'GC001',
      price: 1200,
      discount: 15,
      stock: 10,
      variants: [
        { color: 'Yellow Gold', size: '18 inches', material: '18k Gold' },
        { color: 'White Gold', size: '20 inches', material: '18k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Diamond Tennis Bracelet',
      description: 'Elegant tennis bracelet with brilliant-cut diamonds',
      SKU: 'TB001',
      price: 3200,
      discount: 12,
      stock: 6,
      variants: [
        { color: 'White Gold', size: '7 inches', material: '18k Gold' },
        { color: 'Yellow Gold', size: '7 inches', material: '18k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Heart Pendant Necklace',
      description: 'Delicate heart-shaped pendant on a gold chain',
      SKU: 'HP001',
      price: 680,
      discount: 8,
      stock: 20,
      variants: [
        { color: 'Rose Gold', size: '16 inches', material: '14k Gold' },
        { color: 'White Gold', size: '18 inches', material: '14k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      name: 'Classic Pearl Stud Earrings',
      description: 'Timeless pearl stud earrings for everyday elegance',
      SKU: 'PS001',
      price: 320,
      discount: 15,
      stock: 25,
      variants: [
        { color: 'White Pearl', material: '14k Gold' },
        { color: 'Black Pearl', material: '14k Gold' }
      ],
      categoryId: null, // Will be set dynamically
      images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  users: [
    {
      _id: new ObjectId(),
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      email: 'admin@lumora.com',
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      email: 'sarah.wilson@example.com',
      firstName: 'Sarah',
      lastName: 'Wilson',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: new ObjectId(),
      email: 'michael.brown@example.com',
      firstName: 'Michael',
      lastName: 'Brown',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
};

async function seedDatabase() {
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('lumora-jewel');
    
    // Clear existing data
    console.log('Clearing existing data...');
    await db.collection('categories').deleteMany({});
    await db.collection('products').deleteMany({});
    await db.collection('users').deleteMany({});
    await db.collection('carts').deleteMany({});
    await db.collection('orders').deleteMany({});
    await db.collection('payments').deleteMany({});
    await db.collection('notifications').deleteMany({});
    
    // Insert categories first
    console.log('Inserting categories...');
    const categoryResult = await db.collection('categories').insertMany(sampleData.categories);
    const categoryIds = Object.values(categoryResult.insertedIds);
    
    // Map category names to IDs for product linking
    const categoryMap = {};
    const categories = await db.collection('categories').find({}).toArray();
    categories.forEach(cat => {
      categoryMap[cat.name] = cat._id;
    });
    
    // Update products with proper category IDs
    const productMappings = [
      { name: 'Elegant Diamond Solitaire Ring', category: 'Diamond Rings' },
      { name: 'Vintage Rose Gold Wedding Band', category: 'Wedding Bands' },
      { name: 'Luxury Swiss Watch', category: 'Luxury Watches' },
      { name: 'Pearl Drop Earrings', category: 'Pearl Earrings' },
      { name: 'Gold Chain Necklace', category: 'Gold Necklaces' },
      { name: 'Diamond Tennis Bracelet', category: 'Bracelets' },
      { name: 'Heart Pendant Necklace', category: 'Pendants' },
      { name: 'Classic Pearl Stud Earrings', category: 'Pearl Earrings' }
    ];
    
    sampleData.products.forEach((product, index) => {
      const mapping = productMappings[index];
      if (mapping && categoryMap[mapping.category]) {
        product.categoryId = categoryMap[mapping.category];
      }
    });
    
    console.log('Inserting products...');
    await db.collection('products').insertMany(sampleData.products);
    
    console.log('Inserting users...');
    const userResult = await db.collection('users').insertMany(sampleData.users);
    const userIds = Object.values(userResult.insertedIds);
    
    // Create some sample notifications
    console.log('Creating sample notifications...');
    const notifications = [
      {
        _id: new ObjectId(),
        userId: userIds[0], // John Doe
        title: 'Welcome to Lumora Jewel!',
        message: 'Thank you for joining our exclusive jewelry collection.',
        type: 'info',
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: new ObjectId(),
        userId: userIds[0], // John Doe
        title: 'New Collection Available',
        message: 'Check out our latest diamond rings collection.',
        type: 'promotion',
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: new ObjectId(),
        userId: userIds[1], // Jane Smith
        title: 'Special Offer',
        message: 'Get 20% off on all pearl earrings this week!',
        type: 'promotion',
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await db.collection('notifications').insertMany(notifications);
    
    // Create some sample orders
    console.log('Creating sample orders...');
    const orders = [
      {
        _id: new ObjectId(),
        userId: userIds[0], // John Doe
        orderNumber: 'ORD-001',
        items: [
          {
            productId: sampleData.products[0]._id,
            productName: sampleData.products[0].name,
            productImage: sampleData.products[0].images[0],
            quantity: 1,
            price: sampleData.products[0].price,
            selectedVariant: { color: 'White Gold', size: '6' }
          }
        ],
        shippingAddress: {
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'United States',
          phone: '+1-555-0123'
        },
        subtotal: 2500,
        shippingCost: 0,
        tax: 200,
        total: 2700,
        status: 'delivered',
        paymentStatus: 'paid',
        paymentMethod: 'credit_card',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await db.collection('orders').insertMany(orders);
    
    console.log('✅ Sample data inserted successfully!');
    console.log(`📊 Created:`);
    console.log(`   - ${sampleData.categories.length} categories`);
    console.log(`   - ${sampleData.products.length} products`);
    console.log(`   - ${sampleData.users.length} users`);
    console.log(`   - ${notifications.length} notifications`);
    console.log(`   - ${orders.length} orders`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
