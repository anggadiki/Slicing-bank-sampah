import Nav from "@/components/molekul/nav";
import Seacrh from "@/components/molekul/seacrh";
import SectionEdukasi from "@/components/template/sectionEdukasi";

const EdukasiView = () => {
  return (
    <div className=" flex flex-col px-1">
      <Nav src={"/notif.svg"}>Edukasi</Nav>
      <Seacrh />
      <SectionEdukasi />
    </div>
  );
};

export default EdukasiView;