import axios from "axios";
import { useEffect, useState } from "react";

import FilterButton from "../FilterButton";
import { useFilter } from "@/app/contexts/FilterContext";

type Type = {
  id: number;
  name: string;
  selected: boolean;
  created_at: string;
};

const ListingType = () => {
  const { selectedType } = useFilter();

  const [productTypes, setProductTypes] = useState<Type[]>([]);

  useEffect(() => {
    const getProductTypes = async () => {
      const res = await axios.get("../api/types");
      setProductTypes(res.data);
    };
    getProductTypes();
  }, []);

  return (
    <div>
      <div className="mb-4">PRODUCT TYPE</div>
      <ul className="flex flex-wrap gap-2">
        {productTypes.map((type, index) => (
          <FilterButton
            key={index}
            type={type.name}
            selected={selectedType.includes(type.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListingType;
