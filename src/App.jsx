import { useState } from 'react';
import Header from './components/Header';
import PetSelector from './components/PetSelector';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  // View state: 'browse' or 'checkout'
  const [view, setView] = useState('browse');

  // Pet selection state
  const [selectedPetType, setSelectedPetType] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);

  // Cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogoClick = () => {
    setView('browse');
    setSelectedPetType(null);
    setSelectedBreed(null);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('checkout');
  };

  const handleBackToShopping = () => {
    setView('browse');
  };

  return (
    <div className="app">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={handleLogoClick}
        currentView={view}
        onBackClick={handleBackToShopping}
      />

      <main className="main-content">
        {view === 'browse' ? (
          <>
            <PetSelector
              selectedPetType={selectedPetType}
              selectedBreed={selectedBreed}
              onPetTypeChange={setSelectedPetType}
              onBreedChange={setSelectedBreed}
            />
            <ProductGrid
              petType={selectedPetType}
              breed={selectedBreed}
            />
          </>
        ) : (
          <Checkout onBack={handleBackToShopping} />
        )}
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
