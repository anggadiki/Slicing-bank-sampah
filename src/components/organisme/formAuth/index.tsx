import Input from "@/components/molekul/input";
import Label from "@/components/molekul/label";

const Form = () => {
  return (
    <div className="w-full">
      <form action="" className=" w-full flex flex-col  text-white">
        <Label className=" px-6">Alamat Email</Label>
        <Input
          className="py-4 w-full px-6"
          placeholder="ahmadnaufalaz@gmail.com"
          type="email"
        />
        <Label className=" px-6">Password</Label>
        <Input
          className="py-4 w-full px-6"
          placeholder="*********"
          type="password"
        />
      </form>
    </div>
  );
};

export default Form;
