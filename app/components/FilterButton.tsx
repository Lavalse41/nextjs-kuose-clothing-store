"use client";

import Image from "next/image";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";
import { useFilter } from "../contexts/FilterContext";

interface FilterButtonProps {
  color?: string;
  type?: string;
  selected: boolean;
  colorImage?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  color,
  type,
  selected,
  colorImage,
}) => {
  const { selectedType, setSelectedType, selectedColor, setSelectedColor } =
    useFilter();
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    if (type) {
      let updatedTypes;

      if (selectedType.includes(type)) {
        // If the type is already selected, remove it
        updatedTypes = selectedType.filter((selected) => selected !== type);
      } else {
        // If the type is not selected, add it
        updatedTypes = [...selectedType, type];
      }

      setSelectedType(updatedTypes);

      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      let updatedQuery = {
        ...currentQuery,
        type: updatedTypes,
      };

      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);

      console.log("ut:", updatedTypes);
    }

    if (color) {
      let updatedColors;

      if (selectedColor.includes(color)) {
        // If the type is already selected, remove it
        updatedColors = selectedColor.filter((selected) => selected !== color);
      } else {
        // If the type is not selected, add it
        updatedColors = [...selectedColor, color];
      }

      setSelectedColor(updatedColors);

      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      let updatedQuery = {
        ...currentQuery,
        color: updatedColors,
      };

      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);

      console.log("uc:", updatedColors);
    }
  }, [
    color,
    params,
    router,
    selectedColor,
    selectedType,
    setSelectedColor,
    setSelectedType,
    type,
  ]);

  return (
    <li className="relative" onClick={handleClick}>
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
          {colorImage && (
            <span
              className="overflow-hidden 
          w-3 
          h-3 
          rounded-full 
          border 
        border-neutral-700
          mr-1"
            >
              <Image
                width={10}
                height={10}
                src={colorImage}
                alt={color}
              ></Image>
            </span>
          )}
          {color && <span className="capitalize">{color}</span>}
          {type && <span className="capitalize">{type}</span>}
        </div>
      </div>
      {/* delete button */}
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
