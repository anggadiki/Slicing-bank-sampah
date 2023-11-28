const Label = (props: any) => {
  const { children, className } = props;
  return (
    <div className={className}>
      <label htmlFor="" className="w-full font-mulis text-base font-bold">
        {children}
      </label>
    </div>
  );
};

export default Label;
