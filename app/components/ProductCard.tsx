import Image from "next/image";

interface ProductCardProps {
  productId: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  image,
  name,
  price,
}) => {
  return (
    <div key={productId} className="flex flex-col gap-4">
      <div className="w-full h-96">
        <Image
          src={image}
          width={100}
          height={384}
          alt={name}
          layout="responsive"
        ></Image>
      </div>
      <div className="pl-6">{name}</div>
      <div className="pl-6 leading-none">{price}</div>
    </div>
  );
};

export default ProductCard;
