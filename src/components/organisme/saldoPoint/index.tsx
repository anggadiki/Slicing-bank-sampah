import Image from "next/image";

const SaldoPoint = () => {
  return (
    <div className=" flex flex-col w-full px-3">
      <div className=" flex flex-row bg-gradient-to-l from-[#308CFB] to-[#84BAFB] rounded-[2.1rem] w-full font-mulis font-bold text-lg pb-5">
        <div className=" w-8/12">
          <div className=" flex flex-col w-full pl-6 pt-6 font-mulis leading-relaxed text-white">
            <p>Saldo Point</p>
            <p className=" text-5xl">203</p>
          </div>
        </div>
        <div className=" w-4/12">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={100}
            height={100}
            className=" w-full h-30"
          />
        </div>
      </div>
      <div className=" flex justify-between bg-white rounded-full w-5/6 py-5 px-10 -mt-9   mx-auto font-mulis drop-shadow-lg">
        <p className=" text-[#143966]">Profit</p>
        <p className=" text-[#308CFB] font-bold font-mulis"> 200 Point</p>
      </div>
    </div>
  );
};

export default SaldoPoint;
