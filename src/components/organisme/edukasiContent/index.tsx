import CardProdut from "@/components/molekul/cardProduct";
import ContentInfo from "@/components/molekul/contentInfo";
import SubTittle from "@/components/molekul/subTittle";

const EdukasiContent = () => {
  return (
    <>
      <SubTittle>Edukasi</SubTittle>
      <ContentInfo />
      <SubTittle>Barang Pilihan</SubTittle>
      <CardProdut></CardProdut>
      <CardProdut></CardProdut>
      <CardProdut></CardProdut>
    </>
  );
};

export default EdukasiContent;
