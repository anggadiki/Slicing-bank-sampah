const Button = (props: any) => {
  const { children, className } = props;
  return (
    <div className="flex w-full px-6">
      <div className=" bg-white rounded-full px-10 py-3 font-mulis font-bold text-lg w-full">
        <button className={className}>{children}</button>
      </div>
    </div>
  );
};

export default Button;
