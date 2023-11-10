import { productType } from "../mockdata";

export default function Collections() {
  const product = productType.map((type, index) => (
    <li key={index} className="border border-1 border-black py-2 px-4">
      {type}
    </li>
  ));

  return (
    <div className="flex min-h-screen w-screen flex-col items-center py-24 px-20">
      <div className="mb-16">All Products</div>
      <div className="w-full grid grid-cols-5 border border-2 border-lime-900">
        <div className="col-span-1 border border-1 border-lime-900">
          <ul className="flex flex-wrap gap-2">{product}</ul>
          <div>COLORS</div>
        </div>
        <div className="col-span-4 border border-1 border-lime-900">2</div>
      </div>
    </div>
  );
}
