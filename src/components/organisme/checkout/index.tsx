"use client";

import Star from "@/components/molekul/starLogo";
import { useEffect, useState } from "react";

const CheckOut = () => {
  const [selectItem, setSelectItem] = useState(true);
  const [count, setCount] = useState(-1);
  const [count2, setCount2] = useState(1);

  const handleChange = (e: any) => {
    setSelectItem(e.target.checked);
  };

  useEffect(() => {
    selectItem ? setCount((c) => c + 1) : setCount((c) => c - 1);
  }, [selectItem]);

  return (
    <div className=" w-full px-3">
      <div className=" flex pt-8">
        <div className=" w-1/12 flex justify-center items-center">
          <input
            type="checkbox"
            checked={selectItem}
            onChange={handleChange}
            className="w-5 h-5 rounded-md border border-sky-400 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" w-9/12 flex pl-3 items-center">
          <div
            className=" w-5/12 bg-center bg-cover rounded-md h-20"
            style={{ backgroundImage: `url(/product-1.png)` }}
          ></div>
          <div className=" w-full pl-3 font-mulis">
            <p className=" font-bold text">Vas Valentine’s Day</p>
            <div className=" flex items-center">
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <p className=" text-[#143966] text-xs pl-2">(280)</p>
            </div>
            <div className="">
              <p className=" text-[#308CFB] text-sm pt-1">200 Poin</p>
            </div>
          </div>
        </div>
        <div className=" w-2/12 flex items-end">
          <div className=" w-full flex items-center gap-2 pb-1">
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#E0EDFD]">
              <button
                className=" text-xl font-medium"
                onClick={() => setCount2(count2 - 1)}
              >
                -
              </button>
            </div>
            <p className=" font-medium text-lg">{count2 <= 0 ? 0 : count2}</p>
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#84BAFB]">
              <button
                className=" text-xl font-medium"
                onClick={() => setCount2(count2 + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className=" flex pt-5">
        <div className=" w-1/12 flex justify-center items-center">
          <input
            type="checkbox"
            className="w-5 h-5 rounded-md border border-sky-400 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" w-9/12 flex pl-3 items-center">
          <div
            className=" w-5/12 bg-center bg-cover rounded-md h-20"
            style={{ backgroundImage: `url(/card-2.png)` }}
          ></div>
          <div className=" w-full pl-3 font-mulis">
            <p className=" font-bold text">Vas Valentine’s Day</p>
            <div className=" flex items-center">
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <p className=" text-[#143966] text-xs pl-2">(280)</p>
            </div>
            <div className="">
              <p className=" text-[#308CFB] text-sm pt-1">200 Poin</p>
            </div>
          </div>
        </div>
        <div className=" w-2/12 flex items-end">
          <div className=" w-full flex items-center gap-2 pb-1">
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#E0EDFD]">
              <button className=" text-xl font-medium">-</button>
            </div>
            <p className=" font-medium text-lg">1</p>
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#84BAFB]">
              <button className=" text-xl font-medium">+</button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className=" flex pt-5">
        <div className=" w-1/12 flex justify-center items-center">
          <input
            type="checkbox"
            className="w-5 h-5 rounded-md border border-sky-400 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" w-9/12 flex pl-3 items-center">
          <div
            className=" w-5/12 bg-center bg-cover rounded-md h-20"
            style={{ backgroundImage: `url(/product-1.png)` }}
          ></div>
          <div className=" w-full pl-3 font-mulis">
            <p className=" font-bold text">Vas Valentine’s Day</p>
            <div className=" flex items-center">
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <p className=" text-[#143966] text-xs pl-2">(280)</p>
            </div>
            <div className="">
              <p className=" text-[#308CFB] text-sm pt-1">200 Poin</p>
            </div>
          </div>
        </div>
        <div className=" w-2/12 flex items-end">
          <div className=" w-full flex items-center gap-2 pb-1">
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#E0EDFD]">
              <button className=" text-xl font-medium">-</button>
            </div>
            <p className=" font-medium text-lg">1</p>
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#84BAFB]">
              <button className=" text-xl font-medium">+</button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className=" flex pt-5">
        <div className=" w-1/12 flex justify-center items-center">
          <input
            type="checkbox"
            className="w-5 h-5 rounded-md border border-sky-400 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" w-9/12 flex pl-3 items-center">
          <div
            className=" w-5/12 bg-center bg-cover rounded-md h-20"
            style={{ backgroundImage: `url(/product-1.png)` }}
          ></div>
          <div className=" w-full pl-3 font-mulis">
            <p className=" font-bold text">Vas Valentine’s Day</p>
            <div className=" flex items-center">
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <Star src={"/Star.svg"} className=" w-3 h-3" />
              <p className=" text-[#143966] text-xs pl-2">(280)</p>
            </div>
            <div className="">
              <p className=" text-[#308CFB] text-sm pt-1">200 Poin</p>
            </div>
          </div>
        </div>
        <div className=" w-2/12 flex items-end">
          <div className=" w-full flex items-center gap-2 pb-1">
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#E0EDFD]">
              <button className=" text-xl font-medium">-</button>
            </div>
            <p className=" font-medium text-lg">1</p>
            <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#84BAFB]">
              <button className=" text-xl font-medium">+</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full font-mulis pt-56 pb-10">
        <p className=" font-bold text-[#143966] text-xl pb-8">
          Item terpilih ({count})
        </p>
        <button className=" w-full bg-[#308CFB] rounded-full py-4 font-bold text-white text-lg">
          Beli
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
