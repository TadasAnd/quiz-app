import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  white?: boolean;
}

const Logo = ({
  width = 177,
  height = 56,
  className,
  white = false,
}: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src={white ? "/images/logo_white.png" : "/images/logo.png"}
        alt="Logo"
        width={width}
        height={height}
        style={{ width: "auto", height: "auto" }}
        className={`cursor-pointer ${className}`}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
