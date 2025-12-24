import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { useCartDispatch, cartActions } from '../hooks/useCart';
import { generateProductUrl, generateSearchUrl } from '../utils/amazonLinks';
import './ProductCard.css';

export default function ProductCard({ product, breedName }) {
    const dispatch = useCartDispatch();

    const handleAddToCart = () => {
        dispatch(cartActions.addItem(product));
    };

    // Generate the Amazon URL
    const amazonUrl = product.asin
        ? generateProductUrl(product.asin)
        : generateSearchUrl(breedName ? `${breedName} ${product.title}` : product.title);

    // Debug: Log the URL being generated
    console.log('Product:', product.title, '| ASIN:', product.asin, '| URL:', amazonUrl);

    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    return (
        <article className="product-card">
            {discount > 0 && (
                <span className="product-badge">-{discount}%</span>
            )}

            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                    loading="lazy"
                />
                <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-amazon-link"
                    title="View on Amazon"
                >
                    <ExternalLink size={16} />
                </a>
            </div>

            <div className="product-content">
                <h3 className="product-title">{product.title}</h3>

                <div className="product-rating">
                    <div className="product-stars">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                            />
                        ))}
                    </div>
                    <span className="product-rating-text">
                        {product.rating} ({product.reviewCount.toLocaleString()})
                    </span>
                </div>

                <div className="product-pricing">
                    <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                        <span className="product-original-price">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                    )}
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-actions">
                    <button
                        className="btn btn-primary product-add-btn"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart size={16} />
                        Add to Cart
                    </button>
                    <a
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-amazon product-amazon-btn"
                    >
                        <ExternalLink size={16} />
                        Buy on Amazon
                    </a>
                </div>
            </div>
        </article>
    );
}
