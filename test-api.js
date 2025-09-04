const axios = require('axios');

async function testAPI() {
  try {
    console.log('🧪 Testing API endpoints...\n');
    
    // Test categories
    console.log('📂 Testing Categories API...');
    const categoriesResponse = await axios.get('http://localhost:3000/categories');
    console.log(`✅ Categories: ${categoriesResponse.data.length} found`);
    console.log(`   First category: ${categoriesResponse.data[0]?.name}`);
    
    // Test products
    console.log('\n📦 Testing Products API...');
    const productsResponse = await axios.get('http://localhost:3000/products');
    console.log(`✅ Products: ${productsResponse.data.products?.length || productsResponse.data.length} found`);
    console.log(`   First product: ${productsResponse.data.products?.[0]?.name || productsResponse.data[0]?.name}`);
    
    console.log('\n🎉 API is working with sample data!');
    
  } catch (error) {
    console.error('❌ API Test failed:', error.message);
    if (error.response) {
      console.error('   Status:', error.response.status);
      console.error('   Data:', error.response.data);
    }
  }
}

testAPI();
