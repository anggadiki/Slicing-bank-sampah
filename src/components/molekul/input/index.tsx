const Input = (props: any) => {
  const { className, placeholder } = props;
  return (
    <div className={className}>
      <input
        type="text"
        placeholder={placeholder}
        className="font-mulis text-lg px-5 rounded-full bg-transparent border-2 border-white py-2"
      />{" "}
    </div>
  );
};

export default Input;
