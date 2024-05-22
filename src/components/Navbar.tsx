import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const Navbar = (props: Props) => {
  const { quantity, toggleCart } = useShoppingCartContext();

  return (
    <nav className="bg-white shadow-sm px-8 py-6 flex justify-between items-center fixed top-0 right-0 left-0 mb-20">
      <div className="mx-2 space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/store"}>Store</Link>
        <Link to={"/about"}>About</Link>
      </div>
      {quantity > 0 && (
        <Link to={"/cart"}>
          <button className="w-12 h-12 relative rounded-full bg-blue-600 flex justify-center text-white font-bold items-center">
            <IoCartOutline
              style={{
                width: "30px",
                height: "30px",
                fontWeight: "bold",
                strokeWidth: "1.5",
              }}
            />
            <div className="absolute bg-red-700 rounded-full flex justify-center items-center right-3 bottom-[-6px] w-4 h-4">
              {quantity}
            </div>
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
