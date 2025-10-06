"use client";

import Image from "next/image";
import SaleText from "../SaleText";
import { useCountdown } from "@/app/hooks/useCountdown";

const SaleHeader = ({
  title,
  discount,
}: {
  title: string;
  discount: string;
}) => {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <header className="w-full flex flex-col lg:flex-row items-center justify-center text-white  lg:h-12 bg-brand-indigo-dark isolate gap-2 py-2 lg:py-0 lg:gap-6">
      <SaleText title={title} discount={discount} />
      <div className="w-9/10 h-[1px] bg-white lg:hidden" />
      <div className="flex items-center lg:gap-6 gap-2">
        <div className="w-px h-5 bg-white hidden lg:block" />
        <div className="flex items-center lg:gap-2 gap-1">
          <Image
            src="/images/icons/shipping.svg"
            alt="shipping"
            width={16}
            height={12}
            role="presentation"
          />
          <p className="text-body-2-semibold uppercase whitespace-nowrap">
            Free shipping
          </p>
        </div>
        <div className="w-px h-5 bg-white hidden lg:block" />
        <div className="flex items-center lg:gap-2 gap-1">
          <Image
            src="/images/icons/guide.svg"
            alt="guide"
            width={12}
            height={16}
            role="presentation"
          />
          <p className="text-body-2-semibold uppercase whitespace-nowrap">
            DETOX GUIDE INCLUDED
          </p>
        </div>
        <div className="bg-brand-yellow w-[70px] lg:w-[78px] text-brand-indigo-dark px-2 py-1 rounded-md text-body-2-semibold order-first lg:order-last">
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    </header>
  );
};

export default SaleHeader;
