import { useState, useMemo } from 'react';
import { Package, PawPrint } from 'lucide-react';
import ProductCard from './ProductCard';
import { getProductsByPetType, categories } from '../data/products';
import './ProductGrid.css';

export default function ProductGrid({ petType, breed }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = useMemo(() => {
        if (!breed) return []; // No products until breed is selected

        let filtered = getProductsByPetType(petType);

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        // If breed has a size, prioritize products for that size
        if (breed?.size) {
            filtered = filtered.sort((a, b) => {
                const aMatch = a.sizes?.includes(breed.size) || a.sizes?.includes('all');
                const bMatch = b.sizes?.includes(breed.size) || b.sizes?.includes('all');
                if (aMatch && !bMatch) return -1;
                if (!aMatch && bMatch) return 1;
                return 0;
            });
        }

        return filtered;
    }, [petType, breed, selectedCategory]);

    // No pet type selected - show welcome placeholder
    if (!petType) {
        return (
            <section className="product-grid-section">
                <div className="container">
                    <div className="product-grid-empty welcome-state">
                        <img src="/logo.png" alt="Shopyosa" className="welcome-logo" />
                        <h2>Welcome to Shopyosa!</h2>
                        <p>Select your pet type above to discover amazing products curated just for your furry friend.</p>
                        <div className="welcome-pets">
                            <span>🐕</span>
                            <span>🐈</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Pet type selected but no breed
    if (!breed) {
        return (
            <section className="product-grid-section">
                <div className="container">
                    <div className="product-grid-empty breed-required">
                        <h2>Select Your {petType === 'dog' ? "Dog's" : "Cat's"} Breed</h2>
                        <p>Choose a breed from the dropdown above to see personalized product recommendations</p>
                        <div className="breed-hint">
                            <span className="hint-arrow">↑</span>
                            <span>Select breed above</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="product-grid-section">
            <div className="container">
                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-name">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Results Header */}
                <div className="product-grid-header">
                    <h2 className="product-grid-title">
                        Products for {breed.name}
                    </h2>
                    <span className="product-count">{products.length} products</span>
                </div>

                {/* Product Grid */}
                {products.length > 0 ? (
                    <div className="product-grid">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="product-grid-item animate-fadeIn"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <ProductCard
                                    product={product}
                                    breedName={breed.name}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="product-grid-empty">
                        <Package size={48} className="empty-icon" />
                        <h2>No Products Found</h2>
                        <p>Try selecting a different category</p>
                    </div>
                )}
            </div>
        </section>
    );
}
