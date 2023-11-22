import Star from "@/components/molekul/starLogo";
import Link from "next/link";

const BankContent = () => {
  return (
    <>
      <div className=" w-full px-4 pt-80 ">
        <div className=" flex space-x-4 overflow-x-auto relative">
          <div className=" w-full py-9 px-5 flex bg-white rounded-[20px] font-mulis">
            <div className=" w-7/12 ">
              <p className=" text-[#143966] font-bold text-2xl">
                Bank Sampah La Tonteria
              </p>
              <div className=" flex py-1">
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
              </div>
              <p className=" text-[#143966] text-xs">1 juta Reviewers</p>
            </div>
            <div className=" w-5/12 flex flex-col justify-center items-center">
              <div className=" w-full text-[#143966] text-center">
                <p className=" font-bold text-2xl">+20 km</p>
                <p className=" text-base text-[#84BAFB]">15 min</p>
              </div>
            </div>
          </div>{" "}
          <div className=" w-full py-9 px-5 flex bg-sky-100 rounded-[20px] font-mulis left-full absolute">
            <div className=" w-7/12 ">
              <p className=" text-[#143966] font-bold text-2xl">
                Bank Sampah La Tonteria
              </p>
              <div className=" flex py-1">
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
                <Star src={"/Star.svg"} />
              </div>
              <p className=" text-[#143966] text-xs">1 juta Reviewers</p>
            </div>
            <div className=" w-5/12 flex flex-col justify-center items-center">
              <div className=" w-full text-[#143966] text-center">
                <p className=" font-bold text-2xl">+20 km</p>
                <p className=" text-base text-[#84BAFB]">15 min</p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <Link href={"/banksampah/detail"} className=" px-4 py-8">
        <button className=" w-full bg-[#308CFB] py-[18px] rounded-full font-mulis font-bold text-lg text-white">
          Jelajahi
        </button>
      </Link>
    </>
  );
};

export default BankContent;
