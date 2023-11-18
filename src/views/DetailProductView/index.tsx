import Nav from "@/components/molekul/nav";
import OrderContent from "@/components/organisme/orderContent";

const DetailProductView = () => {
  return (
    <>
      <div className=" bg-[#C2DCFB]">
        <div className=" flex flex-col px-1">
          <Nav src={"/hati.svg"}>Detail Pesanan</Nav>
        </div>
        <OrderContent />
      </div>
    </>
  );
};

export default DetailProductView;
