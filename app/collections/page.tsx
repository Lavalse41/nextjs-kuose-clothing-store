import { productType, color } from "../mockdata";

export default function Collections() {
  const product = productType.map((type, index) => (
    <li key={index} className="border border-1 border-black py-1 px-4">
      {type}
    </li>
  ));

  const colorSet = color.map((color, index) => (
    <li key={index} className="border border-1 border-black py-1 px-4">
      {color}
    </li>
  ));

  return (
    <div className="flex min-h-screen w-screen flex-col items-center py-24 px-20">
      <div className="mb-16">All Products</div>
      <div className="w-full grid grid-cols-5 border border-2 border-lime-900">
        <div className="col-span-1 border border-1 border-lime-900">
          <div>
            <ul className="flex flex-wrap gap-2">{product}</ul>
          </div>
          <div>
            COLOR
            <div>
              <ul className="flex flex-wrap gap-2">{colorSet}</ul>
            </div>
          </div>
        </div>
        <div className="col-span-4 border border-1 border-lime-900">2</div>
      </div>
    </div>
  );
}
