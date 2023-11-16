import Nav from "@/components/molekul/nav";
import DetailContent from "@/components/organisme/detailContent";

const DetailEdukasiView = () => {
  return (
    <div className=" flex px-1 flex-col">
      <Nav src={"/hati.svg"}>Edukasi</Nav>
      <DetailContent />
    </div>
  );
};

export default DetailEdukasiView;
