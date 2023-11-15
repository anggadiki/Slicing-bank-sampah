const Filter = () => {
  return (
    <div className="w-full px-4 pb-3 overflow-x-auto -mt-2">
      <div className="flex gap-5 font-mulis items-center">
        <div className=" shrink-0 text-[#143966] font-bold text-base bg-[#E0EDFD] rounded-full px-[15px] py-1">
          Semua
        </div>
        <div className=" shrink-0 text-[#84BAFB] text-sm">Terbaru</div>
        <div className=" shrink-0 text-[#84BAFB] text-sm">
          Jenis-jenis sampah
        </div>
        <div className=" shrink-0 text-[#84BAFB] text-sm">
          Daur ulang sampah
        </div>
      </div>
    </div>
  );
};

export default Filter;
