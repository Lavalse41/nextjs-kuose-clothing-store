import { ReactNode } from "react";

function Sidebar({ children }: { children: ReactNode }) {
  return <div className="col-span-1">{children}</div>;
}
export default Sidebar;
