import SaldoPoint from "../saldoPoint";

const SectionProfile = () => {
  return (
    <>
      <div className=" pt-6">
        <SaldoPoint />
      </div>
      <div className=" w-full px-4 py-32">
        <div className=" w-full text-white flex justify-center bg-[#308CFB] py-4 rounded-full">
          <button className=" font-mulis font-bold text-lg">Keluar</button>
        </div>
      </div>
    </>
  );
};

export default SectionProfile;
