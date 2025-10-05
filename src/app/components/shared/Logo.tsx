import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({ width = 126, height = 40, className }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={width}
        height={height}
        style={{ width: "auto", height: "auto" }}
        className={`cursor-pointer ${className}`}
      />
    </Link>
  );
};

export default Logo;
