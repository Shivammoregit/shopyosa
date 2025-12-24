import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart, getCartTotal } from '../hooks/useCart';
import CartItem from './CartItem';
import './Cart.css';

export default function Cart({ isOpen, onClose, onCheckout }) {
    const { items } = useCart();
    const total = getCartTotal(items);

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div className="cart-overlay" onClick={onClose} />

            {/* Cart Sidebar */}
            <aside className="cart-sidebar animate-slideIn">
                <div className="cart-header">
                    <h2 className="cart-title">
                        <ShoppingBag size={20} />
                        Your Cart
                    </h2>
                    <button className="cart-close" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="cart-empty">
                        <ShoppingBag size={48} className="cart-empty-icon" />
                        <h3>Your cart is empty</h3>
                        <p>Add some products to get started!</p>
                        <button className="btn btn-secondary" onClick={onClose}>
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-subtotal">
                                <span>Subtotal</span>
                                <span className="cart-subtotal-value">₹{total.toLocaleString('en-IN')}</span>
                            </div>
                            <p className="cart-note">
                                Shipping and taxes calculated at Amazon checkout
                            </p>
                            <button
                                className="btn btn-primary cart-checkout-btn"
                                onClick={onCheckout}
                            >
                                Proceed to Checkout
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
}
