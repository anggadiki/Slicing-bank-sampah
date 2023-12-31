import Card from "@/components/molekul/card";
import CardProdut from "@/components/molekul/cardProduct";
import SubTittle from "@/components/molekul/subTittle";

const ShopContent = () => {
  return (
    <>
      <div className=" w-full px-4">
        <div className=" flex pt-5 gap-5 font-mulis items-center text-[#84BAFB] overflow-x-auto text-sm ">
          <div className=" bg-[#E0EDFD] font-bold text-base px-3 py-1 rounded-full text-[#143966]">
            Rekomendasi
          </div>
          <div className="">Teratas</div>
          <div className="">Plastik</div>
          <div className="">Perabotan</div>
        </div>
      </div>
      <div className=" flex">
        <Card></Card>
        <Card src={"/card-2.png"}></Card>
      </div>
      <SubTittle> Sering dikunjungi</SubTittle>
      <div className=" pb-24">
        <CardProdut />
      </div>
    </>
  );
};

export default ShopContent;
