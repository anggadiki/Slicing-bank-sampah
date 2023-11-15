import Image from "next/image";

const Headline = () => {
  return (
    <div className=" w-full px-4">
      <div className=" flex flex-col ">
        <div className=" w-full font-mulis text-[#143966]">
          <p className=" font-bold text-[28px]">Headline</p>
          <p className=" font-bold text-base">Trending</p>
        </div>
        <div className=" w-full pt-4">
          <div
            className=" w-full bg-center h-56 bg-cover rounded-3xl"
            style={{ backgroundImage: `url(/bg-2.png)` }}
          ></div>
        </div>
        <div className=" w-full font-mulis text-[#143966] font-bold text-2xl pr-5 pt-2">
          <p>Perkembangan Sampah hingga Hari ini</p>
        </div>
        <div className=" w-full flex">
          <div className=" w-11/12 flex justify-end pr-4">
            <Image
              src={"/clock.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
            <p className=" text-[#84BAFB] text-xs pl-1">2 hari yang lalu</p>
          </div>
          <div className=" w-1/12 flex justify-end">
            <Image
              src={"/messages.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto"
            />
            <p className=" text-[#84BAFB] text-xs pl-1">78</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
