import Description from "@/components/molekul/description";

const DetailContent = () => {
  return (
    <div className=" w-full px-4">
      <div className=" flex pt-3">
        <div className=" font-mulis text-[#143966]">
          <p className=" text-xl">Taukah kamu?</p>
          <p className=" text-2xl font-bold">
            Ada berapa jenis sampah di dunia saat ini?
          </p>
        </div>
      </div>
      <div className=" pt-1">
        <div className=" w-full flex justify-between items-center font-mulis">
          <p className=" text-[#308CFB] font-bold">Sehat Indah</p>
          <div className=" bg-[#C2DCFB] px-4 py-1 rounded-full font-bold">
            <p>Follow</p>
          </div>
        </div>
      </div>
      <div className=" pt-4">
        <div
          className=" w-full h-52 bg-center bg-cover rounded-3xl"
          style={{ backgroundImage: `url(/bg-1.png)` }}
        ></div>
      </div>
      <Description />
    </div>
  );
};

export default DetailContent;
