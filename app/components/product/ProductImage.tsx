"use client";

import Image from "next/image";

interface ProductImageProps {
  name: string;
  images: string[];
}

const ProductImage: React.FC<ProductImageProps> = ({ name, images }) => {
  return (
    <div className="col-span-2">
      <div
        className="
        aspect-[3/4]
        w-full 
        relative 
        overflow-hidden 
        "
      >
        <Image fill src={images[0]} alt={name} className="object-cover" />
      </div>
    </div>
  );
};

export default ProductImage;
