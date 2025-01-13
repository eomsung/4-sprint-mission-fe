"use client";

import BestArticle from "./BestArticle";

const NUMBER = 3;
function BestArticles({ data }) {
  const BestArticlesData = data.slice(0, NUMBER);
  return (
    <div className="flex gap-6">
      {BestArticlesData.map((article) => {
        return <BestArticle key={article.id} article={article}></BestArticle>;
      })}
    </div>
  );
}

export default BestArticles;
