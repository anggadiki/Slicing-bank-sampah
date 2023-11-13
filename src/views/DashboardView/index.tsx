import SaldoPoint from "@/components/organisme/saldoPoint";
import Hero from "@/components/template/hero";

const DashboardView = () => {
  return (
    <div className="px-1 flex flex-col">
      <Hero />
      <SaldoPoint />
    </div>
  );
};

export default DashboardView;
