"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonBar = () => {
  const [selectedICon, setSelectedIcon] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (iconName: string, destinationPage: string) => {
    setSelectedIcon(iconName);
    router.push(destinationPage);
  };

  const isIconSelected = (iconName: string) => {
    return selectedICon === iconName;
  };

  return (
    <nav className=" w-full h-20 shadow-2xl shadow-black bg-white flex fixed bottom-0">
      <div className=" flex py-8 px-9 gap-12 justify-center items-center">
        <div className="">
          <Image
            src={"/home.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className={` w-7 h-auto fill-sky-500 hover:shadow-[#308CFB] ${
              isIconSelected("/home.svg") ? " fill-sky-500" : ""
            }`}
            onClick={() => handleClick("/home.svg", "/dashboard")}
          />
        </div>
        <div className="">
          <Image
            src={"/note-2.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className={` w-7 h-auto border-[#E0EDFD] hover:shadow-[#308CFB] ${
              isIconSelected("/account.svg") ? " border-blue-500" : ""
            }`}
            onClick={() => handleClick("/note-2.svg", "/edukasi")}
          />
        </div>
        <div className="">
          <Image
            src={"/wallet.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className={` w-7 h-auto border-[#E0EDFD] hover:shadow-[#308CFB] ${
              isIconSelected("/account.svg") ? " border-blue-500" : ""
            }`}
            onClick={() => handleClick("/wallet.svg", "/banksampah")}
          />
        </div>
        <div className="">
          <Image
            src={"/bag-happy.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className={` w-7 h-auto border-[#E0EDFD] hover:shadow-[#308CFB] ${
              isIconSelected("/account.svg") ? " border-blue-500" : ""
            }`}
            onClick={() => handleClick("/bag-happy.svg", "/shop")}
          />
        </div>
        <div className="">
          <Image
            src={"/account.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className={` w-7 h-auto border-[#E0EDFD] hover:shadow-[#308CFB] ${
              isIconSelected("/account.svg") ? " border-blue-500" : ""
            }`}
            onClick={() => handleClick("/account.svg", "/profile")}
          />
        </div>
      </div>
    </nav>
  );
};

export default ButtonBar;
