import ButtonBar from "@/components/molekul/buttonBar";
import SaldoPoint from "@/components/organisme/saldoPoint";
import ContentInformasi from "@/components/template/contentInformasi";
import Hero from "@/components/template/hero";

const DashboardView = () => {
  return (
    <div className="px-1 flex flex-col">
      <Hero />
      <SaldoPoint />
      <ContentInformasi />
      <ButtonBar />
    </div>
  );
};

export default DashboardView;
