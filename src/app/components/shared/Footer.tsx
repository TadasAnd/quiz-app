import Image from "next/image";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative flex flex-col bg-[url('/images/backgrounds/bg_blue.webp')] bg-cover isolate pb-4 pt-8 gap-10">
      <div className="absolute inset-0 bg-black/50" />
      <div className="flex flex-col gap-10 z-10 px-6 lg:pl-24">
        <Logo width={126} height={40} white />
        <div className="flex w-full">
          <div className="flex flex-col text-white gap-6 w-1/2">
            <p className="text-body-semibold">FAQ</p>
            <p className="text-body-semibold">Privacy Policy</p>
            <p className="text-body-semibold">Terms of Service</p>
            <p className="text-body-semibold">Contact Us</p>
            <div className="flex gap-4">
              <Image
                src="/images/icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
                role="presentation"
              />
              <Image
                src="/images/icons/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
                role="presentation"
              />
            </div>
          </div>
          <div className="lg:flex flex-col hidden text-white w-1/4">
            The statements on this site have not been evaluated by the FDA. Our
            products are not intended to diagnose, treat, cure, or prevent any
            disease and do not replace medical advice. Individual results may
            differ from person to person. Exercise and healthy diet are
            necessary to achieve and maintain weight loss.
          </div>
        </div>
      </div>
      <div className="bg-white/10 py-4 flex justify-center">
        <p className="text-body-regular text-white z-10">
          Suniflow 2025 © All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
