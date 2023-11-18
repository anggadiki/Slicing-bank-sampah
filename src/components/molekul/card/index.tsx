import Image from "next/image";
import Star from "../starLogo";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
type CardProps = {
  src?: string | StaticImport;
  className?: string;
};

const Card = (props: CardProps) => {
  const { src = "/card.png" } = props;
  return (
    <Link href={"/shop/detail"} className=" w-full pt-4 px-4">
      <div className=" w-full shadow-xl rounded-3xl">
        <div className=" w-full flex justify-end pr-2">
          <div className=" w-8 h-8 bg-[#E0EDFD] rounded-full flex items-center justify-center ">
            <div className=" flex justify-center">
              <Image
                src={"/hati.svg"}
                alt={"logo"}
                width={100}
                height={100}
                className=" w-auto h-auto"
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <Image
            src={src}
            alt={"logo"}
            width={100}
            height={100}
            className=" w-auto h-32"
          />
        </div>
        <div className=" w-full flex pl-3 font-mulis text-xs font-bold text-[#143966]">
          <p>Vas Bunga Aesthetic</p>
        </div>
        <div className=" w-full pb-3 flex justify-between items-center font-mulis text-xs text-[#308CFB] pl-3">
          <p>190 Poin</p>
          <div className=" flex items-center mx-auto">
            <Star src={"/Star.svg"} className=" w-2 h-2"></Star>
            <Star src={"/Star.svg"} className=" w-2 h-2"></Star>
            <Star src={"/Star.svg"} className=" w-2 h-2"></Star>
            <Star src={"/Star.svg"} className=" w-2 h-2"></Star>
            <Star src={"/Star.svg"} className=" w-2 h-2"></Star>
            <p className=" text-[#143966] font-normal text-[6px] pl-2">(280)</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
