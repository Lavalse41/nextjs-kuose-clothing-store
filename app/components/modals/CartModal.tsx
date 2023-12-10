import { IoIosClose } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import Image from "next/image";

import { formattedPrice } from "../ProductCard";
import ButtonFilter from "../button/ButtonFilter";

const CartModal = () => {
  return (
    <div className="relative">
      <div
        className="
        p-10
        absolute 
        bg-white 
        drop-shadow-xl
        top-4
        right-4
        xl:w-[500px]
        "
      >
        <div className="flex flex-col gap-8">
          <div className="absolute p-2 top-0 right-0 hover:cursor-pointer">
            <IoIosClose size={35} />
          </div>

          <div className="flex text-lg mt-5">
            <BiCheck size={30} />
            <div className="pt-1 pl-1">Added to your cart</div>
          </div>

          <div className="flex gap-8">
            <div className="border border-black w-24">
              {/* <Image src={}/> */}
            </div>
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

          <div className="flex flex-col gap-6 mt-3">
            <div>
              <span className="text-neutral-500 text-lg">Cart subtotal</span>
              <span className="pl-3 text-2xl font-semibold">
                {formattedPrice("4555")} ฿
              </span>
            </div>

            <div className="space-y-3">
              <ButtonFilter text={"View cart"} size={"sm"} />
              <ButtonFilter text={"Checkout"} size={"sm"} fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
