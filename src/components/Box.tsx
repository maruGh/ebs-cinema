import { useState } from "react";
import Button from "./Button";

type BoxProps = {
  children: React.ReactNode;
};

const Box = ({ children }: BoxProps) => {
  const [show, setShow] = useState(true);
  return (
    <div className="mt-5 py-5 bg-slate-900 rounded-md pl-10 h-[calc(100vh-10rem)] relative overflow-scroll">
      <Button show={show} onClick={() => setShow((p) => !p)} />
      {show && children}
    </div>
  );
};
// flex flex-col gap-4
export default Box;
