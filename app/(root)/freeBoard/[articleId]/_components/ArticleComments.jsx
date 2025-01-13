import React from "react";
import Image from "next/image";
import profile from "@/assets/svg/ic_profile.svg";

function ArticleComments({ comments }) {
  // const ArticlesData = data.slice(0, NUMBER);
  return (
    <div className="flex flex-col w-full gap-10">
      {comments.map((comment) => {
        return (
          <div>
            <ArticleComment comment={comment}></ArticleComment>
          </div>
        );
      })}
    </div>
  );
}

const ArticleComment = ({ comment }) => {
  // console.log(comment);
  const createDate = new Date(comment.updatedAt).getTime();
  const currentDate = new Date().getTime();

  const seconds = Math.floor((currentDate - createDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeDiff;

  if (seconds < 60) {
    timeDiff = `${seconds}초 전`;
  } else if (minutes < 60) {
    timeDiff = `${minutes}분 전`;
  } else if (hours < 24) {
    timeDiff = `${hours}시간 전`;
  } else {
    timeDiff = `${days}일 전`;
  }

  return (
    <div className=" bg-[#FCFCFC] border-b border-[#E5E7EB] pb-3 flex flex-col gap-6">
      {comment.content}
      <div className="flex gap-2">
        <Image src={profile.src} width={32} height={32} alt="profile" />
        <div className="flex flex-col gap-1 text-[12px]">
          <p className=" text-[#4B5563]">총명한 판다</p>
          <p className="text-[#9CA3AF]">{timeDiff}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleComments;
