import React, { ReactNode } from "react";

const ListingCollection: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="col-span-4">{children}</div>
);

export default ListingCollection;
