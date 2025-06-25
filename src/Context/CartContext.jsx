import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id && item.size === product.size
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId, size) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) => !(item.id === productId && item.size === size)
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const isInCart = (productId, size = null) => {
        return cartItems.some((item) =>
            size ? (item.id === productId && item.size === size) : item.id === productId
        );
    };

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                totalAmount,
                isInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
