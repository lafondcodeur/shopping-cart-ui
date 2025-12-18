import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      // Recherche si le produit existe déjà
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        // Si le produit existe : incrémente la quantité
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Si le produit n'existe pas : l'ajoute avec qty=1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
