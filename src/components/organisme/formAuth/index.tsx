import Input from "@/components/molekul/input";
import Label from "@/components/molekul/label";

const Form = () => {
  return (
    <div className="flex w-full">
      <div className="">
        <form action="" className=" flex flex-col text-white">
          <Label>Alamat Email</Label>
          <Input className="py-4" placeholder="ahmadnaufalaz@gmail.com" />
          <Label>Password</Label>
          <Input className="py-4" placeholder="*********" />
        </form>
      </div>
    </div>
  );
};

export default Form;
