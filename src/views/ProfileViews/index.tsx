import ButtonBar from "@/components/molekul/buttonBar";
import CardProfile from "@/components/molekul/profile";
import SectionProfile from "@/components/organisme/sectionProfile";

const ProfileViews = () => {
  return (
    <>
      <div className=" w-full flex flex-col px-1">
        <CardProfile />
        <SectionProfile />
      </div>
      <ButtonBar />
    </>
  );
};

export default ProfileViews;
