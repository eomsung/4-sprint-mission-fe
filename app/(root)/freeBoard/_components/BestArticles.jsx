"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import defualtImage from "@/assets/svg/img_default.svg";
import heart from "@/assets/svg/ic_heart.svg";
import medal from "@/assets/svg/ic_medal.svg";
import Link from "next/link";

function BestArticles({ data }) {
  const [number, setNumber] = useState(3);
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);

  useEffect(() => {
    const getNumber = () => {
      if (windowWidth >= 1280) {
        // xl
        return setNumber(3);
      } else if (windowWidth >= 768) {
        // md
        return setNumber(2);
      } else {
        return setNumber(1);
      }
    };

    getNumber();
  }, [windowWidth]);

  const BestArticlesData = data.slice(0, number);
  return (
    <div className="flex gap-6">
      {BestArticlesData.map((article) => {
        return (
          <Link key={article.id} href={`/freeBoard/${article.id}`}>
            <BestArticle key={article.id} article={article}></BestArticle>
          </Link>
        );
      })}
    </div>
  );
}

function BestArticle({ article }) {
  const createDate = article.createdAt;
  let date = createDate.split("T")[0];
  return (
    <div className="w-[384px] h-[169px] flex flex-col bg-[#F9FAFB] rounded-lg px-6 gap-[10px]">
      <div className="bg-Blue w-[102px] rounded-b-2xl px-6 py-[2px] text-white flex gap-1 justify-center items-center">
        <Image src={medal.src} width={16} height={16} alt="medalImage" />
        Best
      </div>
      {/* 제목과 이미지지 */}
      <div className="text-[20px] font-semibold flex justify-between items-center">
        {article.title}
        <div className="w-[72px] h-[72px] rounded-md border-b border-[#E5E7Eb] flex justify-center items-center bg-white">
          <Image
            src={defualtImage.src}
            width={48}
            height={44.57}
            alt="defualtImage"
          />
        </div>
      </div>
      {/* 하단부분 유저네임, 좋아요수, 날짜짜 */}
      <div className="flex justify-between items-center">
        <span className="flex gap-2">
          <p className="text-[14px] text-[#4B5563]">총명한 판다</p>
          <span className="flex gap-1 text-[#6B7280]">
            <Image src={heart.src} width={16} height={16} alt="heart" />
            {article.favoriteCount}
          </span>
        </span>

        <p className="text-[#9CA3AF]">{date}</p>
      </div>
    </div>
  );
}

export default BestArticles;
