const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017/lumora-jewel';

const sampleData = {
  categories: [
    ``
    {
      _id: 'cat1',
      name: 'Diamond Rings',
      parentCategoryId: null,
      description: 'Exquisite diamond rings for special occasions',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'cat2',
      name: 'Luxury Watches',
      parentCategoryId: null,
      description: 'Premium timepieces for the discerning',
      image: 'https://images.unsplash.com/photo-1523170335258-f5c6c6f7ffa1?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'cat3',
      name: 'Gold Necklaces',
      parentCategoryId: null,
      description: 'Elegant gold necklaces and chains',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'cat4',
      name: 'Pearl Earrings',
      parentCategoryId: null,
      description: 'Classic pearl earrings for timeless elegance',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'cat5',
      name: 'Wedding Bands',
      parentCategoryId: 'cat1',
      description: 'Symbol of eternal love and commitment',
      image: 'https://images.unsplash.com/photo-1603561596112-db1b0b3b2b3b?w=400',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  products: [
    {
      _id: 'prod1',
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
      categoryId: 'cat1',
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
        'https://images.unsplash.com/photo-1603561596112-db1b0b3b2b3b?w=400'
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'prod2',
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
      categoryId: 'cat5',
      images: ['https://images.unsplash.com/photo-1603561596112-db1b0b3b2b3b?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'prod3',
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
      categoryId: 'cat2',
      images: ['https://images.unsplash.com/photo-1523170335258-f5c6c6f7ffa1?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'prod4',
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
      categoryId: 'cat4',
      images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'prod5',
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
      categoryId: 'cat3',
      images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400'],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  users: [
    {
      _id: 'user1',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'user2',
      email: 'jane.smith@example.com',
      firstName: 'Jane',
      lastName: 'Smith',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'admin1',
      email: 'admin@lumora.com',
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin',
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
    
    // Insert sample data
    console.log('Inserting categories...');
    await db.collection('categories').insertMany(sampleData.categories);
    
    console.log('Inserting products...');
    await db.collection('products').insertMany(sampleData.products);
    
    console.log('Inserting users...');
    await db.collection('users').insertMany(sampleData.users);
    
    // Create some sample notifications
    console.log('Creating sample notifications...');
    const notifications = [
      {
        _id: 'notif1',
        userId: 'user1',
        title: 'Welcome to Lumora Jewel!',
        message: 'Thank you for joining our exclusive jewelry collection.',
        type: 'info',
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'notif2',
        userId: 'user1',
        title: 'New Collection Available',
        message: 'Check out our latest diamond rings collection.',
        type: 'promotion',
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await db.collection('notifications').insertMany(notifications);
    
    console.log('✅ Sample data inserted successfully!');
    console.log(`📊 Created:`);
    console.log(`   - ${sampleData.categories.length} categories`);
    console.log(`   - ${sampleData.products.length} products`);
    console.log(`   - ${sampleData.users.length} users`);
    console.log(`   - ${notifications.length} notifications`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
