import Image from "next/image";
import Link from "next/link";

const Sreen = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className=" flex justify-center relative -top-[50px] w-full h-8/12">
          <div className=" flex justify-center items-center w-[554px] h-[554px] rounded-full opacity-[20%] border-2 border-white ">
            <div className=" flex justify-center items-center w-[356px] h-[356px] rounded-full border-2 border-white"></div>
          </div>
          <Image
            src={"/logo-2.png"}
            alt={"logo"}
            width={100}
            height={100}
            className=" w-auto h-auto absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className=" -mt-1 flex flex-col items-center justify-center font-mulis text-white ">
          <p className=" text-lg">Selamat datang di</p>
          <p className=" text-4xl font-bold pt-3">Peduli Sampah</p>
        </div>
      </div>
      <Link href={"/auth/login"} className=" py-12 px-5 w-full">
        <button className=" bg-white w-full rounded-full py-4 font-mulis font-bold text-lg text-[#308CFB]">
          Lanjutkan
        </button>
      </Link>
    </>
  );
};

export default Sreen;
