import Button from "@/components/molekul/button";

const Register = () => {
  return (
    <div className=" flex px-1 flex-col min-h-screen items-center  bg-[#308CFB]">
      <div className="w-full flex flex-col pt-10">
        <div className="flex flex-col items-center justify-center py-10">
          <h5 className=" font-mulis text-white text-lg">Silahkan</h5>
          <h1 className=" text-[40px] py-1 font-mulis text-white font-semibold">
            Registrasi
          </h1>
        </div>
      </div>
      <div className=" flex w-full justify-center">
        <Button className="text-[#308CFB]">Button</Button>
      </div>
    </div>
  );
};

export default Register;
