import StoreItem from "../components/StoreItem";
import storeItems from "../constants/products.json";
type Props = {};

const Store = (props: Props) => {
  return (
    <div>
      <h1>Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
