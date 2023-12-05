import { colorData } from "../../data/colorData";
import FilterButton from "../FilterButton";

const ListingColor = () => {
  return (
    <div className="mt-10">
      COLOR
      <div className="mt-4">
        <ul className="flex flex-wrap gap-2">
          {colorData.map((color) => (
            <FilterButton
              key={color.name}
              name={color.name}
              selected={true}
              image={color.image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingColor;
