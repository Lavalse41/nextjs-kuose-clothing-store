"use client";

import { BsBag } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-end p-6 hover:cursor-pointer">
      <BsBag size={25} onClick={() => router.push(`/cart`)} />
    </div>
  );
};

export default Navbar;
