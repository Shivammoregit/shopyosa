import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart, getCartItemCount } from '../hooks/useCart';
import './Header.css';

export default function Header({ onCartClick, onLogoClick }) {
    const { items } = useCart();
    const itemCount = getCartItemCount(items);

    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-left">
                    <a
                        href="https://petyosa.com"
                        className="back-button"
                        title="Back to Petyosa"
                    >
                        <ArrowLeft size={20} />
                    </a>
                    <button className="logo" onClick={onLogoClick}>
                        <img src="/logo.png" alt="Shopyosa" className="logo-image" />
                        <span className="logo-text">
                            Shop<span className="gradient-text">yosa</span>
                        </span>
                    </button>
                </div>

                <nav className="header-nav">
                    <button className="cart-button" onClick={onCartClick}>
                        <ShoppingCart size={22} />
                        <span className="cart-label">Cart</span>
                        {itemCount > 0 && (
                            <span className="cart-badge">{itemCount}</span>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}
