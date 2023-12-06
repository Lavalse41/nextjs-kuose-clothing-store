import Image from "next/image";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";

interface FilterButtonProps {
  name: string;
  selected: boolean;
  image?: string;
  onSelected: (value: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  name,
  selected,
  image,
  onSelected,
}) => {
  return (
    <li className="relative" onClick={() => onSelected(name)}>
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
      {selected && (
        <div className="hover:cursor-pointer">
          <IconContext.Provider value={{ color: "white" }}>
            <div className="z-10 absolute bottom-5 right-0">
              <IoIosClose />
            </div>
          </IconContext.Provider>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1"
            viewBox="0 0 60 60"
            className="absolute w-8 rotate-[-45deg] bottom-3 right-[-0.65rem]"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.125"
              d="M17.834 55.31L42.166 30 17.834 4.69v50.62z"
            ></path>
          </svg>
        </div>
      )}
    </li>
  );
};

export default FilterButton;
