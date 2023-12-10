import { formattedPrice } from "../ProductCard";

const CartProductCard = () => {
  return (
    <div className="col-span-2">
      <div className="flex gap-6">
        <div className="border border-black w-36"></div>

        <div className="flex flex-col">
          <div className="text-lg mb-3">Vibrant Sweater</div>
          <div>
            <span className="font-semibold">Color:</span> lorem
          </div>
          <div>
            <span className="font-semibold">Size:</span> L
          </div>

          <div className="text-xl font-semibold">
            {formattedPrice("2266")} ฿ x 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
