# 📦 How to Add Real Amazon Products

This guide will help you add real Amazon India products to your PetShop app.

---

## 🔍 Step 1: Find a Product on Amazon India

1. Go to [amazon.in](https://www.amazon.in)
2. Search for pet products (e.g., "dog food", "cat toys")
3. Click on a product you want to add

---

## 📋 Step 2: Get the Product ASIN

The ASIN (Amazon Standard Identification Number) is in the product URL:

```
https://www.amazon.in/dp/B07B4SGBD6/ref=...
                        ^^^^^^^^^^
                        This is the ASIN!
```

Or scroll down to "Product Information" section on the product page.

---

## 📝 Step 3: Collect Product Details

From the Amazon product page, collect:

| Field | Where to Find |
|-------|---------------|
| **Title** | Product title at the top |
| **Price** | Current selling price (ignore paise) |
| **Original Price** | MRP (crossed out price, if shown) |
| **Rating** | Star rating (e.g., 4.3) |
| **Review Count** | Number in brackets next to stars |
| **Image URL** | Right-click image → "Copy image address" |

---

## ✏️ Step 4: Add to products.js

Open `src/data/products.js` and add your product:

```javascript
{
  id: 'dog-food-pedigree-1',      // Unique ID (lowercase, dashes)
  asin: 'B07B4SGBD6',              // Amazon ASIN from URL
  title: 'Pedigree Adult Dry Dog Food, Chicken & Vegetables, 10kg Pack',
  price: 1949,                      // Price in ₹ (no decimals)
  originalPrice: 2340,              // MRP (optional)
  rating: 4.4,                      // Star rating
  reviewCount: 45678,               // Number of reviews
  image: 'https://m.media-amazon.com/images/I/71yx6LhqJuL._AC_UL320_.jpg',
  category: 'food',                 // food, toys, beds, grooming, accessories
  petType: 'dog',                   // 'dog' or 'cat'
  sizes: ['all'],                   // For dogs: small, medium, large, all
  description: 'Complete nutrition for adult dogs'
},
```

---

## 🏷️ Categories Reference

| Category | Use For |
|----------|---------|
| `food` | Dry food, wet food, treats |
| `toys` | Balls, ropes, puzzles, plush |
| `beds` | Beds, mats, cushions |
| `grooming` | Brushes, shampoos, nail clippers |
| `accessories` | Collars, leashes, bowls, litter |

---

## 🐕 Dog Sizes

Use the `sizes` field for dogs:
- `['small']` - For small breeds (< 10kg)
- `['medium']` - For medium breeds (10-25kg)  
- `['large']` - For large breeds (> 25kg)
- `['all']` - Suitable for all sizes

---

## 🐱 Cat Coats

Use the `coats` field for cats:
- `['short']` - Short-haired cats
- `['long']` - Long-haired cats (Persian, Maine Coon)
- `['hairless']` - Sphynx, etc.
- `['all']` - All coat types

---

## ⚠️ Important Notes

1. **Use real ASINs** - The affiliate links only work with valid ASINs
2. **Keep images small** - Use `_AC_UL320_` in image URLs for faster loading
3. **Update prices regularly** - Amazon prices change often
4. **Don't copy Amazon descriptions** - Write your own short descriptions

---

## 🔗 Your Affiliate Links

With ASIN, links are generated as:
```
https://www.amazon.in/dp/B07B4SGBD6?tag=petyosa-21
```

This ensures:
- ✅ Direct link to exact product
- ✅ Your affiliate tag is included
- ✅ You earn commission on purchases

---

## 🚀 Quick Add Checklist

- [ ] Found product on Amazon.in
- [ ] Copied ASIN from URL
- [ ] Got current price
- [ ] Got image URL
- [ ] Added to `src/data/products.js`
- [ ] Set correct `category` and `petType`
- [ ] Tested in browser

---

## 💡 Tips for Choosing Products

1. **Pick popular products** with high ratings (4.0+) and many reviews
2. **Choose trusted brands** - Pedigree, Royal Canin, Whiskas, Drools
3. **Look for deals** - Products with good discounts convert better
4. **Check availability** - Only add products that are in stock
5. **Mix price points** - Include budget and premium options

---

Happy curating! 🐾
