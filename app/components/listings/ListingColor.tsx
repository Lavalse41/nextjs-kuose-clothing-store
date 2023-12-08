import { useSearchParams } from "next/navigation";

import { colorData } from "../../data/colorData";
import FilterButton from "../FilterButton";
import { useFilter } from "@/app/contexts/FilterContext";

const ListingColor = () => {
  const { selectedColor } = useFilter();

  return (
    <div className="mt-10">
      COLOR
      <div className="mt-4">
        <ul className="flex flex-wrap gap-2">
          {colorData.map((color, index) => (
            <FilterButton
              key={index}
              color={color.name}
              colorImage={color.image}
              selected={selectedColor.includes(color.name)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingColor;
