import ContentInfo from "@/components/molekul/contentInfo";
import Filter from "@/components/molekul/filter";
import SubTittle from "@/components/molekul/subTittle";
import Headline from "@/components/organisme/headline";

const SectionEdukasi = () => {
  return (
    <>
      <Headline />
      <SubTittle>Mengikuti</SubTittle>
      <Filter />
      <div className=" pb-24">
        <ContentInfo />
      </div>
    </>
  );
};

export default SectionEdukasi;
