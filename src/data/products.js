// ============================================
// PRODUCT DATABASE - MANUAL CURATION
// ============================================
// 
// HOW TO ADD A NEW PRODUCT:
// 1. Find a product on Amazon.in
// 2. Get the ASIN from the URL (e.g., amazon.in/dp/B08N5WRWNW → ASIN is B08N5WRWNW)
// 3. Copy the product details below
// 4. Add to the appropriate section (dog/cat)
//
// PRODUCT TEMPLATE:
// {
//   id: 'unique-id',           // Make this unique (e.g., 'dog-food-pedigree-1')
//   asin: 'B08XXXXXX',         // Amazon ASIN - THIS IS IMPORTANT!
//   title: 'Product Title',     // Exact product title from Amazon
//   price: 999,                 // Current price in ₹ (no decimals)
//   originalPrice: 1299,        // MRP/original price (optional, for showing discount)
//   rating: 4.5,                // Rating out of 5
//   reviewCount: 1234,          // Number of reviews
//   image: 'https://...',       // Product image URL (right-click → Copy image address)
//   category: 'food',           // One of: food, toys, beds, grooming, accessories
//   petType: 'dog',             // 'dog' or 'cat'
//   sizes: ['all'],             // For dogs: ['small', 'medium', 'large', 'all']
//   coats: ['all'],             // For cats: ['short', 'long', 'hairless', 'all']  
//   description: 'Short desc'   // Brief product description
// }
// ============================================

export const products = [
  // ==========================================
  // DOG PRODUCTS - Verified from Amazon India
  // ==========================================
  {
    id: 'dog-food-pedigree-adult-20kg',
    asin: 'B078XXNPM3',
    title: 'Pedigree Adult Dry Dog Food, Chicken & Vegetables, 20 kg, Contains 37 Essential Nutrients, 100% Complete & Balanced Food for Adult Dogs',
    price: 3627,
    originalPrice: 3900,
    rating: 4.4,
    reviewCount: 24539,
    image: 'https://m.media-amazon.com/images/I/81yuJNKP5sL._SX522_.jpg',
    category: 'food',
    petType: 'dog',
    sizes: ['all'],
    description: 'Complete & balanced nutrition for adult dogs with chicken & vegetables, 37 essential nutrients'
  },
  {
    id: 'dog-food-pedigree-wet-pack30',
    asin: 'B084GNRLPW',
    title: 'Pedigree Adult Wet Dog Food, Chicken & Liver Chunks in Gravy, 70 g (Pack of 30), Complete & Balanced Meal for Adult Dogs',
    price: 1253,
    originalPrice: 1500,
    rating: 4.4,
    reviewCount: 11178,
    image: 'https://m.media-amazon.com/images/I/71ixTSHchSL._SX522_PIbundle-30,TopRight,0,0_AA522SH20_.jpg',
    category: 'food',
    petType: 'dog',
    sizes: ['all'],
    description: 'Delicious wet dog food with chicken & liver chunks in gravy, pack of 30 pouches'
  },

  // ==========================================
  // CAT PRODUCTS - Verified from Amazon India
  // ==========================================
  {
    id: 'cat-food-whiskas-adult-7kg',
    asin: 'B007KGB03I',
    title: 'Whiskas Adult (1+ Years) Dry Cat Food, Ocean Fish Flavour, 7 kg, Contains 41 Essential Nutrients, Complete & Balanced Nutrition for Adult Cats',
    price: 1897,
    originalPrice: 2180,
    rating: 4.4,
    reviewCount: 3420,
    image: 'https://m.media-amazon.com/images/I/51zwOre8-zL._SX522_.jpg',
    category: 'food',
    petType: 'cat',
    coats: ['all'],
    description: 'Complete nutrition for adult cats with ocean fish flavour, 41 essential nutrients'
  },
  {
    id: 'cat-food-whiskas-kitten-3kg',
    asin: 'B07WJNGBSP',
    title: 'Whiskas Junior Mother Cat & Kitten (2-12 Months) Dry Cat Food, Ocean Fish Flavour, 3kg, Contains 41 Essential Nutrients, Complete & Balanced Nutrition for Mother Cats & Kittens',
    price: 1090,
    originalPrice: 1180,
    rating: 4.5,
    reviewCount: 18318,
    image: 'https://m.media-amazon.com/images/I/710cuDUfcOL._SX522_.jpg',
    category: 'food',
    petType: 'cat',
    coats: ['all'],
    description: 'Complete nutrition for mother cats & kittens with ocean fish flavour, 41 essential nutrients'
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getProductsByPetType = (petType) => {
  return products.filter(product => product.petType === petType);
};

export const getProductsByCategory = (petType, category) => {
  return products.filter(
    product => product.petType === petType && product.category === category
  );
};

export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
};

export const getProductByAsin = (asin) => {
  return products.find(product => product.asin === asin);
};

export const categories = [
  { id: 'all', name: 'All Products', icon: '🏪' },
  { id: 'food', name: 'Food', icon: '🥣' },
  { id: 'toys', name: 'Toys', icon: '🎾' },
  { id: 'beds', name: 'Beds', icon: '🛏️' },
  { id: 'grooming', name: 'Grooming', icon: '✨' },
  { id: 'accessories', name: 'Accessories', icon: '🎀' }
];

// ============================================
// QUICK REFERENCE - POPULAR BRANDS
// ============================================
// DOG FOOD: Pedigree, Drools, Royal Canin, Farmina, Orijen
// CAT FOOD: Whiskas, Me-O, Royal Canin, Sheba, Purina
// TOYS: Trixie, Kong, Foodie Puppies, Emily Pets
// BEDS: Amazon Basics, Hiputee, Petbed
// GROOMING: Himalaya, Beaphar, Furminator
// ============================================
