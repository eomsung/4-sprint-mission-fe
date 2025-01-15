"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/assets/svg/pandaLogo.svg";
import Google from "@/assets/svg/ic_google.svg";
import Kakao from "@/assets/svg/ic_kakao.svg";
import Link from "next/link";
import Button from "@/components/Button";

function loginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="md:w-[640px] flex flex-col md:gap-10 gap-6 m-auto w-[343px] ">
      {/* 로고 */}
      <div className="md:w-[369px] md:h-[132px] w-[198px] h-[66px] relative self-center">
        <Link href="/">
          <Image src={Logo.src} alt="logo" fill />
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* 입력 칸 */}
          <div className="flex flex-col md:gap-4 gap-2">
            <p className="font-bold md:text-[18px] text-[14px]">이메일</p>
            <input
              className="md:w-[640px] md:h-p[56px] rounded-xl px-6 py-4 bg-[#F3F4F6] w-[343px] h-14"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div className="flex flex-col md:gap-4 gap-2">
            <p className="font-bold md:text-[18px] text-[14px]">비밀번호</p>
            <input
              className="md:w-[640px] md:h-p[56px] rounded-xl px-6 py-4 bg-[#F3F4F6] w-[343px] h-14 "
              placeholder="비밀번호를 입력해주세요"
            />
          </div>

          {/* 버튼 */}
          <Button className="w-full h-14 rounded-[40px] px-[124px] py-4">
            로그인
          </Button>
        </form>

        {/* 간편 로그인 */}
        <div className="w-full h-[74px] px-[23px] py-4 flex justify-between items-center rounded-lg bg-[#E6F2FF]">
          <p className="font-medium"> 간편 로그인하기</p>
          <div className="flex gap-4">
            <Image src={Google.src} alt="googleicon" width={42} height={42} />
            <Image src={Kakao.src} alt="kakaoicon" width={42} height={42} />
          </div>
        </div>

        {/* 회원가입 이동 */}
        <div className="flex justify-center gap-1 font-medium">
          <p>판다마켓이 처음이신가요?</p>{" "}
          <Link href="/signup" className="text-blue">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
