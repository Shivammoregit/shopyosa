// Amazon Affiliate Link Utilities for Amazon India
// Your affiliate tag: petyosa-21

const AFFILIATE_TAG = 'petyosa-21';
const AMAZON_BASE_URL = 'https://www.amazon.in';

/**
 * Generates a direct Amazon product URL using ASIN
 * This is the most reliable way to link to specific products
 * @param {string} asin - Amazon Standard Identification Number
 * @returns {string} Direct product URL with affiliate tag
 */
export const generateProductUrl = (asin) => {
    if (!asin) {
        console.warn('No ASIN provided, falling back to search');
        return `${AMAZON_BASE_URL}?tag=${AFFILIATE_TAG}`;
    }
    return `${AMAZON_BASE_URL}/dp/${asin}?tag=${AFFILIATE_TAG}`;
};

/**
 * Generates an Amazon search URL for a product
 * Used as fallback when ASIN is not available
 * @param {string} searchTerm - The search term for Amazon
 * @returns {string} Amazon search URL with affiliate tag
 */
export const generateSearchUrl = (searchTerm) => {
    const encodedSearch = encodeURIComponent(searchTerm);
    return `${AMAZON_BASE_URL}/s?k=${encodedSearch}&tag=${AFFILIATE_TAG}`;
};

/**
 * Opens product on Amazon in a new tab
 * Uses ASIN if available, otherwise falls back to search
 * @param {Object} product - Product object with asin or title
 * @param {string} breedName - Optional breed name for search fallback
 */
export const openOnAmazon = (product, breedName = '') => {
    let url;

    if (product.asin) {
        // Direct product link (preferred)
        url = generateProductUrl(product.asin);
    } else {
        // Fallback to search
        const searchTerm = breedName
            ? `${breedName} ${product.title}`
            : product.title;
        url = generateSearchUrl(searchTerm);
    }

    window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Generates affiliate link for cart checkout
 * Opens the first item's product page or Amazon homepage
 * @param {Array} cartItems - Array of cart items
 * @returns {string} Amazon URL
 */
export const generateCartCheckoutUrl = (cartItems) => {
    if (cartItems.length === 0) {
        return `${AMAZON_BASE_URL}?tag=${AFFILIATE_TAG}`;
    }

    // If first item has ASIN, link to it directly
    const mainItem = cartItems[0];
    if (mainItem.asin) {
        return generateProductUrl(mainItem.asin);
    }

    return generateSearchUrl(mainItem.title);
};

// ============================================
// HOW TO FIND AMAZON PRODUCT ASIN:
// ============================================
// 1. Go to any product on Amazon.in
// 2. Look at the URL - it contains the ASIN
//    Example: https://www.amazon.in/dp/B08N5WRWNW
//    The ASIN is: B08N5WRWNW
// 3. Or scroll down to "Product Information" section
//    You'll find "ASIN" listed there
// ============================================
