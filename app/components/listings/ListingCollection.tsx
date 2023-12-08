import React, { ReactNode } from "react";

const ListingCollection: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className="
      md:col-span-2 
      lg:col-span-3 
      xl:col-span-4"
  >
    {children}
  </div>
);

export default ListingCollection;
