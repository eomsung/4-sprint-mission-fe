"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/svg/pandaLogo.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  const showMenu = pathName === "/" ? false : true;
  return (
    <header className="flex justify-between items-center  w-full min-w-max h-[70px] px-[200px] border-b border-[#DFDFDF] sticky box-border top-0 z-10 bg-white">
      <div className="flex items-center  text-nowrap">
        <Link className="mr-4 " href="/">
          <Image
            src={Logo.src}
            width={153}
            height={51}
            alt="logo"
            className="object-contain"
          />
        </Link>
        {showMenu && (
          <>
            <Link
              className={`px-[15px] py-[21px] text-[18px] ${
                pathName === "/freeBoard" ? "text-Blue" : "text-[#4B5563]"
              } font-bold`}
              href="/freeBoard"
            >
              자유게시판
            </Link>
            <Link
              className={`px-[15px] py-[21px] text-[18px] ${
                pathName === "/market" ? "text-Blue" : "text-[#4B5563]"
              } font-bold`}
              href="/market"
            >
              중고마켓
            </Link>
          </>
        )}
      </div>

      <Button
        color="blue"
        className="px-[23px] py-[23px] rounded-lg w-[128px] h-[48px] "
      >
        로그인
      </Button>
    </header>
  );
}

export default Header;
