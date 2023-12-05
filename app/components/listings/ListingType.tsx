import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import FilterButton from "../FilterButton";

type Type = {
  id: number;
  name: string;
  selected: boolean;
  created_at: string;
};

const ListingType = () => {
  const [productTypes, setProductTypes] = useState<Type[]>([]);

  useEffect(
    () =>
      async function getProductTypes() {
        const res = await axios.get("../api/types");
        // console.log("type:", res.data);
        setProductTypes(res.data);
      },
    []
  );

  return (
    <div>
      <div className="mb-4">PRODUCT TYPE</div>
      <ul className="flex flex-wrap gap-2">
        {productTypes.map((type) => (
          <FilterButton key={type.name} name={type.name} selected={false} />
        ))}
      </ul>
    </div>
  );
};

export default ListingType;
