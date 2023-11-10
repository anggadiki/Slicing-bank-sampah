const Button = (props: any) => {
  const { children, className } = props;
  return (
    <div className="flex">
      <div className=" bg-white rounded-full px-16 py-3 font-mulis font-bold text-lg">
        <button className={className}>{children}</button>
      </div>
    </div>
  );
};

export default Button;
