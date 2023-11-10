const Title = (props: any) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center justify-center py-5 pb-8">
      <h5 className=" font-mulis text-white text-lg">Silahkan</h5>
      <h1 className=" text-[40px] py-1 font-mulis text-white font-semibold">
        {children}
      </h1>
    </div>
  );
};

export default Title;
