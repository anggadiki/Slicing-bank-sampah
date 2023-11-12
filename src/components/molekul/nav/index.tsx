import Image from "next/image";

const Nav = () => {
  return (
    <div className=" w-full pt-3 px-3">
      <div className=" flex text-[#143966]">
        <div className=" flex w-3/12 py-2 items-center justify-center">
          <div className=" w-9 h-9 rounded-full border-2">
            <Image
              src={"/avatar.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className=" flex w-6/12 justify-center items-center font-mulis font-bold text-lg">
          Informasi
        </div>
        <div className=" flex w-3/12 items-center justify-center">
          <div className=" w-9 h-9 rounded-full border-2 bg-[#E0EDFD]">
            <Image
              src={"/shopping-cart.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=" w-auto h-auto mx-auto mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
