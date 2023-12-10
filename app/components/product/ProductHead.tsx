interface ProductHeadProps {
  name: string;
  description: string;
}

const ProductHead: React.FC<ProductHeadProps> = ({ name, description }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="text-2xl font-semibold">{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default ProductHead;
