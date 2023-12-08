import Image from "next/image";

interface ProductCardProps {
  productId: number;
  image: string;
  name: string;
  price: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  image,
  name,
  price,
}) => {
  const formattedPrice = parseFloat(price).toLocaleString("en-US");

  return (
    <div className="col-span-1 cursor-pointer group">
      <div key={productId} className="flex flex-col gap-4 w-full mb-6">
        <div
          className="
            aspect-[3/4]
            w-full 
            relative 
            overflow-hidden 
          "
        >
          <Image
            fill
            src={image}
            className="
              object-cover 
              w-full
              h-full
              group-hover:scale-110 
              transition
              duration-500 
            "
            alt={name}
          ></Image>
        </div>
        <div className="pl-6">{name}</div>
        <div className="pl-6 leading-none text-xl font-semibold">
          {formattedPrice} ฿
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
