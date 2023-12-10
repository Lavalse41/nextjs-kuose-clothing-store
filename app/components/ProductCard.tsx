import Image from "next/image";

import { useRouter } from "next/navigation";

interface ProductCardProps {
  productId: number;
  image: string;
  name: string;
  price: string;
}

export const formattedPrice = (price: string) => {
  return parseFloat(price).toLocaleString("en-US");
};

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  image,
  name,
  price,
}) => {
  const router = useRouter();

  return (
    <div
      className="col-span-1 cursor-pointer group"
      onClick={() => router.push(`/products/${productId}`)}
    >
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
          {formattedPrice(price)} ฿
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
