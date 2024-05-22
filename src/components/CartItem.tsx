import React from "react";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../constants/products.json";
import { formatCurrency } from "../utils/formatCurrency";
type Props = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: Props) => {
  const { removeFromCart } = useShoppingCartContext();

  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <>
      {quantity > 0 ? (
        <div className="flex justify-between items-center">
          <img
            src={item.imgUrl}
            alt="cart images"
            className="w-36 h-36 object-cover"
          />
          <div className="ml-2">
            <div>
              {item.name}
              {quantity > 1 && <span className="ml-1"> x {quantity}</span>}
            </div>
          </div>
          <div className="mt-1">
            {formatCurrency(item.price)}
            <button
              className="m-3 py-1 px-3 border border-solid bg-gray-300"
              onClick={() => removeFromCart(item.id)}
            >
              x
            </button>
          </div>
        </div>
      ) : (
        <h1 className="z-40">Your Cart Is Empty</h1>
      )}
    </>
  );
};

export default CartItem;
