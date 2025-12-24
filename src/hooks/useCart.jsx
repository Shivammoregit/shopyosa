import { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Context
const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

// Action Types
const ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
    LOAD_CART: 'LOAD_CART'
};

// Cart Reducer
function cartReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM: {
            const existingIndex = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                // Item exists, increase quantity
                const newItems = [...state.items];
                newItems[existingIndex] = {
                    ...newItems[existingIndex],
                    quantity: newItems[existingIndex].quantity + 1
                };
                return { ...state, items: newItems };
            } else {
                // New item
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }]
                };
            }
        }

        case ACTIONS.REMOVE_ITEM: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        }

        case ACTIONS.UPDATE_QUANTITY: {
            const { id, quantity } = action.payload;
            if (quantity <= 0) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== id)
                };
            }

            return {
                ...state,
                items: state.items.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
            };
        }

        case ACTIONS.CLEAR_CART: {
            return { ...state, items: [] };
        }

        case ACTIONS.LOAD_CART: {
            return { ...state, items: action.payload };
        }

        default:
            return state;
    }
}

// Initial State
const initialState = {
    items: []
};

// Cart Provider Component
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load cart from localStorage on mount
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('petshop-cart');
            if (savedCart) {
                dispatch({ type: ACTIONS.LOAD_CART, payload: JSON.parse(savedCart) });
            }
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        try {
            localStorage.setItem('petshop-cart', JSON.stringify(state.items));
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
        }
    }, [state.items]);

    return (
        <CartContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

// Custom Hook to use Cart State
export function useCart() {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

// Custom Hook to use Cart Dispatch
export function useCartDispatch() {
    const context = useContext(CartDispatchContext);
    if (context === null) {
        throw new Error('useCartDispatch must be used within a CartProvider');
    }
    return context;
}

// Action Creators
export const cartActions = {
    addItem: (product) => ({
        type: ACTIONS.ADD_ITEM,
        payload: product
    }),

    removeItem: (productId) => ({
        type: ACTIONS.REMOVE_ITEM,
        payload: { id: productId }
    }),

    updateQuantity: (productId, quantity) => ({
        type: ACTIONS.UPDATE_QUANTITY,
        payload: { id: productId, quantity }
    }),

    clearCart: () => ({
        type: ACTIONS.CLEAR_CART
    })
};

// Utility Functions
export function getCartTotal(items) {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function getCartItemCount(items) {
    return items.reduce((count, item) => count + item.quantity, 0);
}
