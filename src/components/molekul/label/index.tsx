const Label = (props: any) => {
  const { children, className } = props;
  return (
    <div className={className}>
      <label htmlFor="" className="font-mulis text-base font-bold">
        {children}
      </label>
    </div>
  );
};

export default Label;
