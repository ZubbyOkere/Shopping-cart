import { useShoppingCartContext } from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../constants/products.json";

type Props = {};

const Cart = (props: Props) => {
  const { cartItems } = useShoppingCartContext();
  return (
    <div className="mt-36 p-10 m-2 w-[50%]">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="font-bold flex items-end justify-end">
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </div>
  );
};

export default Cart;
