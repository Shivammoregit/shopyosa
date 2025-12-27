import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart, getCartItemCount } from '../hooks/useCart';
import './Header.css';

export default function Header({ onCartClick, onLogoClick, currentView, onBackClick }) {
    const { items } = useCart();
    const itemCount = getCartItemCount(items);

    // Back button behavior based on current view
    const handleBackClick = () => {
        if (currentView === 'checkout') {
            // In checkout -> go back to shopping
            onBackClick();
        } else {
            // In dashboard -> go to petyosa.com
            window.location.href = 'https://petyosa.com';
        }
    };

    const backButtonTitle = currentView === 'checkout'
        ? 'Back to Shopping'
        : 'Back to Petyosa';

    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-left">
                    <button
                        className="back-button"
                        onClick={handleBackClick}
                        title={backButtonTitle}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button className="logo" onClick={onLogoClick}>
                        <img src="src\assets\icon.png" alt="ShopYosa" className="logo-image" />
                        <span className="logo-text">
                            Shop<span className="gradient-text">Yosa</span>
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
