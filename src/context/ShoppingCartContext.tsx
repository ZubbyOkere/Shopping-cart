import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

type ShoppingCartProviderProp = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  quantity: number;
  cartItems: CartItem[];
  toggleCart: () => void;
};
const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProp) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isopen, setIsopen] = useState(false);

  const toggleCart = () => setIsopen(!true);

  const quantity = cartItems.reduce((total, item) => item.quantity + total, 0);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  const increaseItemQuantity = (id: number) => {
    setCartItems((currItems) =>
      currItems.find((item) => item.id === id)
        ? currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...currItems, { id, quantity: 1 }]
    );
  };

  function decreaseItemQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems,
        quantity,
        toggleCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
