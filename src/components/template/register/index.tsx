import Button from "@/components/molekul/button";
import Title from "@/components/molekul/title";
import Form from "@/components/organisme/formAuth";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className="w-full flex flex-col pt-10">
        <Title>Registrasi</Title>
      </div>
      <div className="">
        <Form />
      </div>
      <Link
        href="/auth/login"
        className=" flex w-full justify-center pt-5 text-center"
      >
        <Button className="text-[#308CFB]">Registrasi</Button>
      </Link>
      <div className=" flex w-full py-3">
        <div className=" flex w-3/12 pl-3 justify-center items-center ">
          <hr className=" w-full" color="white " />
        </div>{" "}
        <div className=" flex w-6/12 justify-center flex-row">
          <p className="text-center py-3 font-mulis text-white">
            Atau Masuk dengan
          </p>
        </div>
        <div className=" flex w-3/12 pr-3 justify-center items-center ">
          <hr className=" w-full" color="white " />
        </div>{" "}
      </div>
      <div className=" flex w-full justify-center text-center">
        <Button className="text-black">Google</Button>
      </div>
      <div className=" flex w-full pt-3 justify-center text-white">
        <p>Sudah memiliki akun? </p>
        <Link href="/auth/login" className="pl-1 font-semibold">
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;
