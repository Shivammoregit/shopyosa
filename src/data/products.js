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
    // DOG PRODUCTS
    // ==========================================

    // --- DOG FOOD ---
    {
        id: 'dog-food-pedigree-adult',
        asin: 'B0C8NYNC92',  // Example - Replace with real ASIN
        title: 'Pedigree Adult Dry Dog Food, Chicken & Vegetables, 10kg Pack',
        price: 1949,
        originalPrice: 2340,
        rating: 4.4,
        reviewCount: 45678,
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop',
        category: 'food',
        petType: 'dog',
        sizes: ['all'],
        description: 'Complete & balanced nutrition for adult dogs with chicken & vegetables'
    },
    {
        id: 'dog-food-drools-adult',
        asin: 'B00842J7XW',
        title: 'Drools Chicken and Egg Adult Dog Food, 10kg',
        price: 1599,
        originalPrice: 2100,
        rating: 4.3,
        reviewCount: 38921,
        image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop',
        category: 'food',
        petType: 'dog',
        sizes: ['all'],
        description: 'Real chicken as first ingredient with essential nutrients'
    },
    {
        id: 'dog-food-royal-canin',
        asin: 'B0C8NYNC92',
        title: 'Royal Canin Medium Adult Dog Food, 4kg',
        price: 2799,
        originalPrice: 3200,
        rating: 4.6,
        reviewCount: 12456,
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255b1?w=400&h=400&fit=crop',
        category: 'food',
        petType: 'dog',
        sizes: ['medium'],
        description: 'Tailored nutrition for medium breed adult dogs (11-25kg)'
    },

    // --- DOG TOYS ---
    {
        id: 'dog-toy-rope',
        asin: 'B0C8NYNC92',
        title: 'Foodie Puppies Cotton Rope Dog Toys Set of 4',
        price: 299,
        originalPrice: 499,
        rating: 4.2,
        reviewCount: 8765,
        image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
        category: 'toys',
        petType: 'dog',
        sizes: ['small', 'medium'],
        description: 'Durable cotton rope toys for chewing and playing'
    },
    {
        id: 'dog-toy-ball',
        asin: 'B0C8NYNC92',
        title: 'Rubber Ball Dog Toy with Squeaker, 3 Pack',
        price: 349,
        originalPrice: 499,
        rating: 4.1,
        reviewCount: 5432,
        image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=400&fit=crop',
        category: 'toys',
        petType: 'dog',
        sizes: ['all'],
        description: 'Bouncy rubber balls with squeaker for interactive play'
    },
    {
        id: 'dog-toy-chew',
        asin: 'B0C8NYNC92',
        title: 'Nylon Bone Chew Toy for Aggressive Chewers',
        price: 249,
        originalPrice: 399,
        rating: 4.0,
        reviewCount: 3210,
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
        category: 'toys',
        petType: 'dog',
        sizes: ['medium', 'large'],
        description: 'Ultra-durable nylon bone for strong chewers'
    },

    // --- DOG BEDS ---
    {
        id: 'dog-bed-cushion',
        asin: 'B0C8NYNC92',
        title: 'Fluffy Round Pet Bed Cushion for Dogs & Cats',
        price: 899,
        originalPrice: 1499,
        rating: 4.3,
        reviewCount: 6789,
        image: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400&h=400&fit=crop',
        category: 'beds',
        petType: 'dog',
        sizes: ['small', 'medium'],
        description: 'Super soft calming donut bed for anxious pets'
    },
    {
        id: 'cat-tree-tower',
        asin: 'B0C8NYNC92',
        title: 'Multi-Level Cat Tree with Condo and Platforms',
        price: 2499,
        originalPrice: 3499,
        rating: 4.5,
        reviewCount: 3210,
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
        category: 'accessories',
        petType: 'cat',
        coats: ['all'],
        description: 'Multiple platforms, scratching posts, and cozy condo'
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
