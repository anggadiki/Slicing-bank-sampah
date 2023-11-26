"use client";

import Star from "@/components/molekul/starLogo";
import { useEffect, useState } from "react";

const CheckOut = () => {
  const [items, setItems] = useState([
    { id: 1, selectItem: false, count: 0 },
    { id: 2, selectItem: false, count: 0 },
    { id: 3, selectItem: false, count: 0 },
    { id: 4, selectItem: false, count: 0 },
  ]);
  const [count, setCount] = useState(0);

  const handleChange = (itemID: number) => {
    setItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === itemID ? { ...item, selectItem: !item.selectItem } : item
      )
    );
  };

  // Fungsi untuk meng-handle perubahan jumlah item
  const handleCountChange = (itemId: number, increment: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, count: Math.max(0, item.count + increment) }
          : item
      )
    );
  };

  useEffect(() => {
    const totalCount = items.reduce(
      (acc: any, item: any) => acc + (item.selectItem ? 1 : 0),
      0
    );
    setCount(totalCount);
  }, [items]);

  return (
    <div className=" w-full px-3">
      {items.map((item: any) => (
        <div key={item.id} className=" flex pt-8">
          <div className=" w-1/12 flex justify-center items-center">
            <input
              type="checkbox"
              checked={item.selectItem}
              onChange={() => handleChange(item.id)}
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
                  onClick={() => handleCountChange(item.id, -1)}
                >
                  -
                </button>
              </div>
              <p className=" font-medium text-lg">{item.count}</p>
              <div className=" w-5 h-5 rounded-md flex justify-center items-center bg-[#84BAFB]">
                <button
                  className=" text-xl font-medium"
                  onClick={() => handleCountChange(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
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
