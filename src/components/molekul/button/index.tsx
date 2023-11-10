const Button = (props: any) => {
  const { children, className } = props;
  return (
    <div className="flex w-8/12">
      <div className=" bg-white rounded-full px-10 py-3 font-mulis font-bold text-lg w-screen">
        <button className={className}>{children}</button>
      </div>
    </div>
  );
};

export default Button;
