import { ArrowLeft, ExternalLink, Trash2, ShoppingBag } from 'lucide-react';
import { useCart, useCartDispatch, cartActions, getCartTotal } from '../hooks/useCart';
import { openOnAmazon } from '../utils/amazonLinks';
import './Checkout.css';

export default function Checkout({ onBack }) {
    const { items } = useCart();
    const dispatch = useCartDispatch();
    const total = getCartTotal(items);

    const handleClearCart = () => {
        dispatch(cartActions.clearCart());
    };

    const handleBuyItem = (item) => {
        openOnAmazon(item);
    };

    if (items.length === 0) {
        return (
            <section className="checkout-section">
                <div className="container">
                    <div className="checkout-empty">
                        <ShoppingBag size={64} className="checkout-empty-icon" />
                        <h2>Your cart is empty</h2>
                        <p>Add some products before checking out</p>
                        <button className="btn btn-primary" onClick={onBack}>
                            <ArrowLeft size={16} />
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="checkout-section">
            <div className="container">
                <div className="checkout-layout">
                    {/* Order Summary */}
                    <div className="checkout-items">
                        <div className="checkout-header">
                            <h1>Checkout</h1>
                            <button className="checkout-clear" onClick={handleClearCart}>
                                <Trash2 size={16} />
                                Clear Cart
                            </button>
                        </div>

                        <div className="checkout-list">
                            {items.map((item) => (
                                <div key={item.id} className="checkout-item">
                                    <div className="checkout-item-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="checkout-item-details">
                                        <h3 className="checkout-item-title">{item.title}</h3>
                                        <div className="checkout-item-meta">
                                            <span className="checkout-item-qty">Qty: {item.quantity}</span>
                                            <span className="checkout-item-price">
                                                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-secondary checkout-item-buy"
                                        onClick={() => handleBuyItem(item)}
                                    >
                                        <ExternalLink size={14} />
                                        Buy on Amazon
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Total */}
                    <div className="checkout-summary">
                        <div className="checkout-summary-card glass">
                            <h2>Order Summary</h2>

                            <div className="checkout-summary-rows">
                                <div className="checkout-summary-row">
                                    <span>Subtotal ({items.length} items)</span>
                                    <span>₹{total.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="checkout-summary-row">
                                    <span>Shipping</span>
                                    <span className="text-success">Free via Amazon</span>
                                </div>
                            </div>

                            <div className="checkout-summary-total">
                                <span>Estimated Total</span>
                                <span className="checkout-total-value">₹{total.toLocaleString('en-IN')}</span>
                            </div>

                            <div className="checkout-info">
                                <p>
                                    <strong>How it works:</strong> Click "Buy on Amazon" for each product to complete your purchase securely on Amazon.
                                </p>
                                <div className="checkout-badges">
                                    <span className="checkout-badge">🔒 Secure Checkout</span>
                                    <span className="checkout-badge">📦 Amazon Fulfilled</span>
                                    <span className="checkout-badge">⚡ Fast Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
