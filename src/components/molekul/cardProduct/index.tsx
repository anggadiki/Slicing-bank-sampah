import Image from "next/image";
import Star from "../starLogo";

const CardProdut = () => {
  return (
    <div className=" w-full px-4">
      <div className=" flex px-2 rounded-2xl py-3 font-mulis shadow-lg">
        <div className=" w-3/12">
          <div className=" px-1">
            <Image
              src={"/product-1.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-full h-auto rounded-xl"
            />
          </div>
        </div>
        <div className=" w-7/12 pl-4 pt-2">
          <p className=" font-bold text-base text-[#143966]">
            Vas Valentine’s Day
          </p>
          <div className=" flex py-1 items-center">
            <Star src={"/Star.svg"}></Star>
            <Star src={"/Star.svg"}></Star>
            <Star src={"/Star.svg"}></Star>
            <Star src={"/Star.svg"}></Star>
            <Star src={"/Star.svg"}></Star>
            <p className=" text-[#143966] font-normal text-xs pl-2">(280)</p>
          </div>
          <p className=" text-[#308CFB]">200 Poin</p>
        </div>
        <div className=" w-2/12 pt-2 flex justify-center">
          <Image
            src={"/hati.svg"}
            alt=""
            width={100}
            height={100}
            className="w-5 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProdut;
