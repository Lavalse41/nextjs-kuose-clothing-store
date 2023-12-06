import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import FilterButton from "../FilterButton";

import { useSearchParams } from "next/navigation";

type Type = {
  id: number;
  name: string;
  selected: boolean;
  created_at: string;
};

interface ListingTypeProps {
  onSelected: (value: string) => void;
}

const ListingType: React.FC<ListingTypeProps> = ({ onSelected }) => {
  const [productTypes, setProductTypes] = useState<Type[]>([]);

  const params = useSearchParams();
  const type = params?.get("type");

  useEffect(() => {
    const getProductTypes = async () => {
      const res = await axios.get("../api/types");
      // console.log("type:", res.data);
      setProductTypes(res.data);
    };
    getProductTypes();
  }, []);

  return (
    <div>
      <div className="mb-4">PRODUCT TYPE</div>
      <ul className="flex flex-wrap gap-2">
        {productTypes.map((type) => (
          <FilterButton
            onSelected={onSelected}
            key={type.name}
            name={type.name}
            selected={type === type.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListingType;
