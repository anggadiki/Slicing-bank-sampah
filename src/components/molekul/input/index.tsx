const Input = (props: any) => {
  const { className, placeholder, type } = props;
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        className="font-mulis text-lg px-12 rounded-full bg-transparent border-2 border-white py-3"
      />{" "}
    </div>
  );
};

export default Input;
