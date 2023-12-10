interface ButtonFilterProps {
  label: string;
  rounded?: boolean;
  fill?: boolean;
  size: string;
}

const ButtonFilter: React.FC<ButtonFilterProps> = ({
  label,
  rounded,
  fill,
  size,
}) => {
  return (
    <div
      className={`
        px-4 
        border
        border-black 
        ring-black
        hover:ring-[1.5px]
        focus:ring-[1.5px]
        hover:cursor-pointer
        transition
        duration-300 
        text-center
        ${rounded && "rounded-full"}
        ${fill && "bg-black"}
        ${fill && "text-white"}
        ${size === "sm" && "py-2"}
        ${size === "lg" && "py-3"}
        ${size === "lg" && "text-lg"}
        ${size === "lg" && "font-semibold"}
        `}
    >
      {label}
    </div>
  );
};

export default ButtonFilter;
