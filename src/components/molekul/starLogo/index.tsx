import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

type StarProps = {
  children?: ReactNode;
  src: string | StaticImport;
  className?: string;
};

const Star = (props: StarProps) => {
  const { src, className = " w-4 h-4" } = props;
  return (
    <Image
      src={src}
      alt={"logo"}
      width={100}
      height={100}
      className={className}
    />
  );
};

export default Star;
