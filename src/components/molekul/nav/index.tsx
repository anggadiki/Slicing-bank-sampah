import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type NavProps = {
  children?: ReactNode;
  src?: string | StaticImport;
  className?: string;
};

const Nav = (props: NavProps) => {
  const { children, src = "/shopping-cart.png" } = props;
  return (
    <div className=" w-full pt-3 px-4">
      <div className=" flex text-[#143966]">
        <div className=" flex w-3/12 py-2 items-center ">
          <Link href="/profile" className=" w-9 h-9 rounded-full border-2">
            <Image
              src={"/avatar.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-full h-full"
            />
          </Link>
        </div>
        <div className=" flex w-6/12 justify-center items-center font-mulis font-bold text-lg">
          {children}
        </div>
        <div className=" flex w-3/12 items-center justify-end">
          <div className=" w-9 h-9 rounded-full border-2 bg-[#E0EDFD] flex items-center justify-center">
            <Image
              src={src}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
