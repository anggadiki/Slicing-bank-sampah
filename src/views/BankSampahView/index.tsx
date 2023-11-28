import ButtonBar from "@/components/molekul/buttonBar";
import Nav from "@/components/molekul/nav";
import Seacrh from "@/components/molekul/seacrh";
import BankContent from "@/components/organisme/bankContent";

const BankSampahView = () => {
  return (
    <>
      <div
        className=" w-full min-h-screen h-screen"
        style={{ backgroundImage: `url(/Map.png)` }}
      >
        <div className=" flex px-1 flex-col">
          <Nav src={"/map.svg"}>Bank Sampah</Nav>
          <Seacrh />
          <BankContent />
        </div>
      </div>
      <ButtonBar />
    </>
  );
};

export default BankSampahView;
