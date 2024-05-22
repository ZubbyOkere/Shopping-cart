import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: Props) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCartContext();

  const quantity = getItemQuantity(id);

  return (
    <div className="mt-36">
      <img
        src={imgUrl}
        alt="image"
        height={400}
        width={400}
        className="h-60 object-cover"
      />
      <div
        className="mt-3 flex justify-between items-center px-6
        "
      >
        <span>{name}</span>
        <span>{formatCurrency(price)}</span>
      </div>
      {quantity === 0 ? (
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-600 w-full mr-5 px-2"
            onClick={() => increaseItemQuantity(id)}
          >
            Add to cart
          </button>
        </div>
      ) : (
        <div className="mt-2 flex flex-col justify-center items-center">
          <button
            className="bg-blue-600 px-2 py-1 rounded-md"
            onClick={() => decreaseItemQuantity(id)}
          >
            -
          </button>
          <h1>{quantity}</h1>
          <button
            className="bg-blue-600 px-2 py-1 rounded-md"
            onClick={() => increaseItemQuantity(id)}
          >
            +
          </button>
          <button
            className="bg-red-600 p-1 my-1 rounded-md text-white font-bold"
            onClick={() => removeFromCart(id)}
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreItem;
