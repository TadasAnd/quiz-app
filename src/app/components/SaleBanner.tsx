import Image from "next/image";
import React from "react";

interface SaleBannerProps {
  title: string;
  discount: string;
}

const SaleBanner = ({ title, discount }: SaleBannerProps) => {
  return (
    <div className="relative flex-1 text-white flex items-center gap-1 justify-center w-full rounded-lg bg-brand-indigo-dark py-3">
      <div className="absolute left-1/5 -top-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-brand-indigo-dark" />
      <div className="absolute right-1/5 -top-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-brand-indigo-dark" />
      <Image
        src="/images/icons/sale.svg"
        alt="discount"
        width={16}
        height={16}
        role="presentation"
      />
      <p className="text-body-2-semibold uppercase ml-1">{title}</p>
      <p className="text-body-2-regular">up to</p>
      <p className="text-body-2-semibold uppercase">{discount} off!</p>
    </div>
  );
};

export default SaleBanner;
