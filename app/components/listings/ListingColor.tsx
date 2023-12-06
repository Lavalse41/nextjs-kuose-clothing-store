import { colorData } from "../../data/colorData";
import FilterButton from "../FilterButton";

interface ListingColorProps {
  onSelected: (value: string) => void;
}

const ListingColor: React.FC<ListingColorProps> = ({ onSelected }) => {
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
              onSelected={onSelected}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingColor;
