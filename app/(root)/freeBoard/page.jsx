import api from "@/api";
import React from "react";
import BestArticles from "./_components/BestArticles";

async function freeBorad() {
  const data = await api.getArticle();

  return (
    <div>
      <div>베스트 게시글</div>
      <BestArticles data={data} />
    </div>
  );
}

export default freeBorad;
