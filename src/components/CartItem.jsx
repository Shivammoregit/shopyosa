import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartDispatch, cartActions } from '../hooks/useCart';
import './CartItem.css';

export default function CartItem({ item }) {
    const dispatch = useCartDispatch();

    const handleIncrement = () => {
        dispatch(cartActions.updateQuantity(item.id, item.quantity + 1));
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            dispatch(cartActions.updateQuantity(item.id, item.quantity - 1));
        }
    };

    const handleRemove = () => {
        dispatch(cartActions.removeItem(item.id));
    };

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
            </div>

            <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title}</h4>
                <span className="cart-item-price">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
            </div>

            <div className="cart-item-actions">
                <div className="quantity-controls">
                    <button
                        className="quantity-btn"
                        onClick={handleDecrement}
                        disabled={item.quantity <= 1}
                    >
                        <Minus size={14} />
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button className="quantity-btn" onClick={handleIncrement}>
                        <Plus size={14} />
                    </button>
                </div>

                <button className="cart-item-remove" onClick={handleRemove}>
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
}
