import Button from "@/components/molekul/button";
import Title from "@/components/molekul/title";
import Form from "@/components/organisme/formAuth";

const Register = () => {
  return (
    <>
      <div className="w-full flex flex-col pt-10">
        <Title>Registrasi</Title>
      </div>
      <div className="">
        <Form />
      </div>
      <div className=" flex w-full justify-center pt-5 text-center">
        <Button className="text-[#308CFB]">Registrasi</Button>
      </div>
      <p className="text-center py-3 font-mulis text-white">
        Atau Masuk dengan
      </p>
      <div className=" flex w-full justify-center text-center">
        <Button className="text-black">Google</Button>
      </div>
    </>
  );
};

export default Register;
