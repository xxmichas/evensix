import Link from "next/link";
import React from "react";
import LogoSVG from "../../public/logo.svg";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <a title="Logo" className={className}>
        <LogoSVG width="145" height="33" />
      </a>
    </Link>
  );
};

export default Logo;
