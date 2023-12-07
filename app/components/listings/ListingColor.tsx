import { useSearchParams } from "next/navigation";

import { colorData } from "../../data/colorData";
import FilterButton from "../FilterButton";

const ListingColor = () => {
  const params = useSearchParams();
  const colorParams = params?.get("color");

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
              selected={colorParams === color.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingColor;
