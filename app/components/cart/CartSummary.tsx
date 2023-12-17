import ButtonFilter from "../button/ButtonFilter";

const CartSummary = () => {
  return (
    <div className="col-span-1">
      <div className="bg-neutral-100 w-full p-8">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>361000</div>
          </div>

          <div className="flex justify-between">
            <div>Expected discount</div>
            <div>Free Shiping</div>
          </div>

          <div className="flex justify-between">
            <div>Total</div>
            <div>361000</div>
          </div>

          <div className="mt-2 space-y-3 capitalize">
            <ButtonFilter label="Checkout" size="sm" />
            <ButtonFilter label="Continue shoping" size="sm" fill />
          </div>

          <div className="mt-1 text-sm text-neutral-700 text-center">
            Taxes and shipping fee will be calculated at checkout
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
