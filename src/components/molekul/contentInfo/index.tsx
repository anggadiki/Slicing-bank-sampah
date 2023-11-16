import Image from "next/image";
import Link from "next/link";

const ContentInfo = () => {
  return (
    <div className=" w-full px-4 py-0">
      <div className=" flex">
        <div className=" w-9/12">
          <Link href={"/edukasi/detail"} className=" font-mulis text-[#143966]">
            <p className=" text-sm">Taukah kamu?</p>
            <p className=" text-base font-bold pr-2">
              Ada berapa jenis sampah di dunia saat ini?
            </p>
            <div className=" w-full flex items-center">
              <div className=" w-1/2 flex">
                <Image
                  src={"/clock.svg"}
                  alt={"logo"}
                  width={100}
                  height={100}
                  className=" w-auto h-auto"
                />
                <p className=" text-[#84BAFB] text-xs pl-1">3 jam yang lalu</p>
              </div>
              <div className=" w-1/2 flex">
                <Image
                  src={"/messages.svg"}
                  alt={"logo"}
                  width={100}
                  height={100}
                  className=" w-auto h-auto"
                />
                <p className=" text-[#84BAFB] text-xs pl-1">12</p>
              </div>
            </div>
          </Link>
        </div>
        <div className=" w-3/12">
          <div
            className=" w-full h-full bg-no-repeat bg-center rounded-xl"
            style={{ backgroundImage: 'url("/bg-1.png")' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContentInfo;
