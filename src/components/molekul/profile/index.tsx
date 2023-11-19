import Image from "next/image";

const CardProfile = () => {
  return (
    <div className="w-full px-4 pt-12">
      <div className=" flex flex-col rounded-[48px] bg-[#308CFB]">
        <div className=" w-full flex justify-end  ">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={100}
            height={100}
            className=" w-[210px] h-auto bg-cover"
          />
        </div>
        <div className=" w-full -mt-[55%] flex justify-center font-bold text-2xl pb-12 font-mulis text-white">
          <p>Profile</p>
        </div>
        <div className=" w-full flex  justify-center">
          <div
            className="rounded-full  w-28 h-28 bg-white bg-center bg-cover"
            style={{ backgroundImage: `url(/avatar.png)` }}
          ></div>
        </div>
        <div className=" w-full text-sm text-white flex justify-center py-2 ">
          <p>Mahasiswa aktif</p>
        </div>
        <div className=" w-full text-white text-2xl flex justify-center pb-10">
          <p>Ahmad Naufal Azbar</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
