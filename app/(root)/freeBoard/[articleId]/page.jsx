import api from "@/api";
import React from "react";
import Image from "next/image";
import profile from "@/assets/svg/ic_profile.svg";
import CreateComments from "./_components/CreateComments";
import ArticleComments from "./_components/ArticleComments";
import Button from "@/components/Button";
import Link from "next/link";

async function articlePage({ params }) {
  const param = await params;
  const articleId = param.articleId;
  const article = await api.getArticle(articleId);
  const createDate = article.createdAt;
  let date = createDate.split("T")[0];

  const commentData = await api.getComments(articleId);
  const comments = commentData.comments;

  return (
    <div className="flex flex-col items-center w-[1200px] m-auto  gap-16">
      {/* 본문문 */}
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col gap-4 border-b border-[#E5E7EB]">
          <div>
            <h1 className="font-bold text-xl">{article.title}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={profile.src} width={40} height={40} alt="profile" />
            <div className="flex gap-2 text-[14px]">
              <p className="font-medium text-[#4B5563]">총명한 판다</p>
              <p className="text-[#9CA3AF]">{date}</p>
            </div>
          </div>
        </div>
        <p>{article.content}</p>
      </div>

      {/* 댓글 작성  */}
      <CreateComments></CreateComments>
      {/* 댓글들  */}
      <ArticleComments comments={comments}></ArticleComments>
      {/* 버튼 */}
      <Link href={`/freeBoard`}>
        <Button className="w-[240px] h-12 rounded-[40px] px=16 py-3">
          목록으로 돌아가기
        </Button>
      </Link>
    </div>
  );
}

export default articlePage;
