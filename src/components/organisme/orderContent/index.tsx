"use client";

import Star from "@/components/molekul/starLogo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OrderContent = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className=" w-full px-4 ">
        <div className=" flex pt-3">
          <div className=" w-full">
            <div className="flex justify-center">
              <Image
                src={"/card.png"}
                alt={"logo"}
                width={100}
                height={100}
                className=" w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full relative">
        <div className=" flex bg-white rounded-t-[3rem] font-mulis">
          <div className=" pt-12 px-5 w-full">
            <p className=" text-[#143966] font-bold text-3xl">
              Vas Bunga Aesthetic
            </p>
            <div className=" flex pt-2">
              <Star src={"/Star.svg"}></Star>
              <Star src={"/Star.svg"}></Star>
              <Star src={"/Star.svg"}></Star>
              <Star src={"/Star.svg"}></Star>
              <Star src={"/Star.svg"}></Star>
              <p className=" text-[#143966] font-normal text-xs pl-2">(1091)</p>
            </div>
            <div className=" flex pt-2 items-center">
              <p className=" w-6/12 text-2xl text-[#308CFB]">190 Poin</p>
              <div className=" flex w-6/12 items-center justify-end gap-5">
                <button className=" w-8 h-8 bg-[#E0EDFD] rounded-xl flex justify-center items-center">
                  <p className=" text-3xl" onClick={() => setCount(count - 1)}>
                    -
                  </p>
                </button>
                <p className=" text-2xl text-[#143966]">
                  {count <= 0 ? 0 : count}
                </p>
                <button className=" w-8 h-8 bg-[#84BAFB] rounded-xl flex justify-center items-center">
                  <p className=" text-3xl" onClick={() => setCount(count + 1)}>
                    +
                  </p>
                </button>
              </div>
            </div>
            <div className=" w-full pt-7 text-[#143966] pb-40">
              <p className=" font-bold text-base">Deskripsi</p>
              <p className=" text-justify text-sm pt-1">
                Vas bunga yang tidak mudah rusak. Sangat cocok bagi anda yang
                menyukai berbagai jenis tanaman. Semua tanaman akan terlihat
                menarik dengan Vas Bunga Aesthetic ini.
              </p>
            </div>
            <div className=" w-full absolute bottom-0 left-0 px-5">
              <div className=" flex justify-between py-4 items-center">
                <div className=" w-12 h-12 bg-[#C2DCFB] rounded-full flex justify-center items-center">
                  <Image
                    src={"/cart.svg"}
                    alt={"logo"}
                    width={100}
                    height={100}
                    className=" w-6 h-6"
                  />
                </div>
                <Link
                  href={"/shop/cart"}
                  className=" w-64 bg-[#308CFB] h-12 py-7 rounded-full flex justify-center items-center text-white"
                >
                  <div className="">
                    <p className=" font-bold text-lg">Keranjang</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderContent;
