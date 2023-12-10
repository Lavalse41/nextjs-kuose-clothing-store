"use client";

import { SafeProduct } from "@/app/types";

import Container from "@/app/components/Container";
import ProductImage from "@/app/components/product/ProductImage";
import ProductInfo from "@/app/components/product/ProductInfo";
import ProductHead from "@/app/components/product/ProductHead";

interface ProductClientProps {
  product: SafeProduct;
}

const ProductClient: React.FC<ProductClientProps> = ({ product }) => {
  return (
    <Container>
      <div
        className="
          py-24"
      >
        <div
          className="
          grid 
          grid-cols-5
          gap-16"
        >
          <ProductImage name={product.name} images={product.images} />

          <div
            className="
              col-span-3"
          >
            <ProductHead
              name={product.name}
              description={product.description}
            />
            <ProductInfo
              id={product.id}
              price={product.price}
              color={product.color}
              size={product.size}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductClient;
