import Image from "next/image";
import { IoIosClose } from "react-icons/io";

interface FilterButtonProps {
  name: string;
  selected: boolean;
  image?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  name,
  selected,
  image,
}) => {
  return (
    <li
      className="relative"
      //   onClick={() => handleAddFilter(color.id, "color")}
    >
      <div
        className={`min-w-24 
          border 
          border-1 
          hover:cursor-pointer 
          py-1 
          px-3
          ${selected ? "border-black" : "border-neutral-200"} 
          `}
      >
        <div className="flex items-center">
          {image && (
            <span
              className="overflow-hidden 
          w-3 
          h-3 
          rounded-full 
          border 
        border-neutral-700
          mr-1"
            >
              <Image width={10} height={10} src={image} alt={name}></Image>
            </span>
          )}
          <span className="capitalize">{name}</span>
        </div>
      </div>
      {selected && <IoIosClose />}
    </li>
  );
};

export default FilterButton;
