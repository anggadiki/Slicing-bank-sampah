import { AlertIcon } from "@/components/molekul/alert";
import Sreen from "@/components/molekul/screen";

export default function Home() {
  return (
    <>
      <div className=" flex px-1 flex-col min-h-screen justify-center items-center overflow-hidden bg-[#308CFB]">
        <div className="hidden md:flex absolute top-[15%] translate-y-[-50%]">
          <AlertIcon />
        </div>
        <Sreen />
      </div>
    </>
  );
}
