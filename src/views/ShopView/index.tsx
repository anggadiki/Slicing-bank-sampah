import ButtonBar from "@/components/molekul/buttonBar";
import Nav from "@/components/molekul/nav";
import Seacrh from "@/components/molekul/seacrh";

import SaldoPoint from "@/components/organisme/saldoPoint";
import ShopContent from "@/components/organisme/shopContent";

const ShopView = () => {
  return (
    <>
      <div className=" flex flex-col px-1">
        <Nav>Shop Points</Nav>
        <Seacrh />
        <SaldoPoint />
        <ShopContent />
      </div>
      <ButtonBar />
    </>
  );
};

export default ShopView;
