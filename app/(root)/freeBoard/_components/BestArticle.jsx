import React from "react";

function BestArticle({ article }) {
  return (
    <div className="w-[384px] h-[169px] flex flex-col bg-[#F9FAFB] rounded-lg px-6 gap-[10px]">
      <div className="bg-Blue w-[102px] rounded-b-2xl px-6 py-[2px]">Best</div>
      <div className="text-[20px] font-semibold">{article.title}</div>
      <div>{article.createdAt}</div>
    </div>
  );
}

export default BestArticle;
