import { ReactNode } from "react";

type SubTittleProps = {
  children: ReactNode;
};
const SubTittle = (props: SubTittleProps) => {
  const { children } = props;
  return (
    <div className=" w-full px-4 py-[14px]">
      <div className=" flex font-mulis py-1">
        <div className=" w-6/12">
          <p className=" text-[#143966] text-base font-bold">{children}</p>
        </div>
        <div className=" w-6/12 flex justify-end text-[#308CFB] text-sm">
          Lihat semua
        </div>
      </div>
    </div>
  );
};

export default SubTittle;
