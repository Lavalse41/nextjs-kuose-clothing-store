import { SafeProduct } from "@/app/types";

interface SortSelecProps {
  products: SafeProduct[];
  setProducts: (value: SafeProduct[]) => void;
}

const SortSelect: React.FC<SortSelecProps> = ({ products, setProducts }) => {
  const handleSortType = (e) => {
    const value = e.target.value;

    let sortedProducts = [...products];

    switch (value) {
      case "1":
        sortedProducts.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
          return dateB - dateA;
        });
        break;

      case "2":
        sortedProducts.sort((a, b) => {
          return a.price - b.price;
        });
        break;

      case "3":
        sortedProducts.sort((a, b) => {
          return b.price - a.price;
        });
        break;

      default:
        throw new Error("Invalid sort type");
    }

    setProducts([...sortedProducts]);
  };

  return (
    <select onChange={handleSortType}>
      <option value="1" selected>
        New arrivals
      </option>
      <option value="2">Price low to high</option>
      <option value="3">price high to low</option>
    </select>
  );
};

export default SortSelect;
