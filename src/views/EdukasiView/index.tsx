import ButtonBar from "@/components/molekul/buttonBar";
import Nav from "@/components/molekul/nav";
import Seacrh from "@/components/molekul/seacrh";
import SectionEdukasi from "@/components/template/sectionEdukasi";

const EdukasiView = () => {
  return (
    <>
      <div className=" flex flex-col px-1">
        <Nav>Edukasi</Nav>
        <Seacrh />
        <SectionEdukasi />
      </div>
      <ButtonBar />
    </>
  );
};

export default EdukasiView;
