import { formattedPrice } from "../ProductCard";
import ButtonFilter from "../button/ButtonFilter";

interface ProductInfoProps {
  id: number;
  price: string;
  size: string[];
  color: string[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  price,
  size,
  color,
}) => {
  return (
    <div className="mt-5">
      <div className="font-semibold text-2xl">{formattedPrice(price)} ฿</div>

      <div className="mt-8">
        <div className="font-semibold">Color</div>
        <div className="mt-3 flex flex-wrap gap-3">
          {color.map((color) => {
            return (
              <div key={id} className="uppercase">
                <ButtonFilter label={color} size="sm" rounded />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <div className="font-semibold">Size</div>
        <div className="mt-3 flex flex-wrap gap-3">
          {size.map((size) => {
            return (
              <div key={id} className="uppercase w-11">
                <ButtonFilter label={size} size="sm" rounded />{" "}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 space-y-3 capitalize">
        <ButtonFilter label="add to cart" size="lg" />
        <ButtonFilter label="buy now" size="lg" fill />
      </div>
    </div>
  );
};

export default ProductInfo;
