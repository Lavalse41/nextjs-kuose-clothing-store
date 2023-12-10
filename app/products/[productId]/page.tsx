import getProductById from "@/app/actions/getProductById";

import EmptyPage from "@/app/components/EmptyPage";
import ProductClient from "./ProductClient";

interface IParams {
  productId?: number;
}

const ProductPage = async ({ params }: { params: IParams }) => {
  const data = await getProductById(params);

  if (!data || data.length === 0) {
    return (
      <div>
        <EmptyPage />
      </div>
    );
  }

  const product = data[0];

  return (
    <div>
      <ProductClient product={product} />
    </div>
  );
};

export default ProductPage;
