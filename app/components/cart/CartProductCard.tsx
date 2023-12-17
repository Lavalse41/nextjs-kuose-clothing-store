import { formattedPrice } from "../ProductCard";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartProductCard = () => {
  return (
    <div className="mb-12 flex gap-6">
      <div className="border border-black w-48 h-60"></div>

      <div className="flex flex-col w-full">
        <div className="text-lg mb-3">Vibrant Sweater</div>
        <div>
          <span className="font-semibold">Color:</span> lorem
        </div>
        <div>
          <span className="font-semibold">Size:</span> L
        </div>

        <div className="mt-8 mb-2 flex justify-between w-full">
          <div
            className="
                flex 
                item-center 
                justify-between 
                border-[1.5px] 
                border-neutral-400 
                h-10 
                w-[7rem] "
          >
            <div className="px-2 pt-3">
              <AiOutlineMinus size={15} />
            </div>
            <input
              type="text"
              maxLength={5}
              defaultValue={1}
              className="focus:outline-none w-11 text-center"
            />
            <div className="px-2 pt-3">
              <AiOutlinePlus size={15} />
            </div>
          </div>

          <div className="text-xl font-semibold">
            {formattedPrice("2266")} ฿ x 1
          </div>
        </div>

        <button className="w-[3.8rem] py-0.5 border-black border-b-2">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
