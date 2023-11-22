import Star from "@/components/molekul/starLogo";
import Image from "next/image";

const MapContent = () => {
  return (
    <div className="w-full flex">
      <div className="w-full flex flex-col bg-white rounded-[48px] py-10">
        <div className=" w-full flex">
          <div className=" w-2/12 flex justify-center ">
            <Image
              src={"/Union.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
          </div>
          <div className=" w-8/12 flex flex-col items-start font-mulis">
            <div className=" flex w-full pb-4">
              <div className=" w-full">
                <p className=" text-[#308CFB] text-lg">La Tonteria</p>
              </div>
              <div className=" w-full">
                <div className=" w-full justify-center py-1 rounded h-auto flex border border-[#84BAFB]">
                  <p className=" text-xs font-bold text-[#84BAFB]">
                    11 Juli 2023, 11:43
                  </p>
                </div>
              </div>
            </div>
            <hr className=" w-full border-dashed border-1 border-[#84BAFB] " />
            <div className=" flex w-full pt-4">
              <div className=" w-full">
                <p className=" text-[#308CFB] text-lg">Tegnerlunden</p>
              </div>
              <div className=" w-full">
                <div className=" w-full justify-center py-1 rounded h-auto flex border border-[#84BAFB]">
                  <p className=" text-xs font-bold text-[#84BAFB]">
                    11 Juli 2023, 11:28
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/12 flex items-center justify-center">
            <Image
              src={"/arrow.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
          </div>
        </div>
        <div className=" w-full flex font-mulis py-8">
          <div className=" w-8/12 pl-4">
            <p className=" text-[#143966] font-bold text-[28px] leading-8 pr-5">
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
          <div className=" w-4/12 flex text-center flex-col justify-center  font-mulis ">
            <p className=" font-normal text-[26px] text-[#143966]">+20 km</p>
            <p className=" text-base text-[#84BAFB]">15 min</p>
          </div>
        </div>
        <div className=" px-4">
          <hr className=" w-full border-dashed border-1 border-[#84BAFB] " />
        </div>
        <div className=" w-full flex justify-center gap-5 px-3 py-7 font-mulis">
          <div className=" flex justify-center items-center">
            <Image
              src={"/helicopter.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
            <p className=" text-[#84BAFB] text-xs pl-1">5 min</p>
          </div>{" "}
          <div className=" flex justify-center items-center bg-[#308CFB] rounded-3xl px-3">
            <Image
              src={"/moped.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
            <p className=" text-white text-xs pl-1">15 min</p>
          </div>{" "}
          <div className=" flex justify-center items-center">
            <Image
              src={"/car.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
            <p className=" text-[#84BAFB] text-xs pl-1">20 min</p>
          </div>{" "}
          <div className=" flex justify-center items-center">
            <Image
              src={"/bus.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
            <p className=" text-[#84BAFB] text-xs pl-1">22 min</p>
          </div>
        </div>
        <div className=" w-full px-3">
          <button className=" w-full h-16 bg-[#308CFB] rounded-full font-mulis text-white text-lg font-bold">
            Mulai
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapContent;
