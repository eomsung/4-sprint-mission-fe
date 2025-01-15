"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BestArticle from "./BestArticle";

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

  const bestArticlesData = data.slice(0, number);
  return (
    <div className="flex gap-6">
      {bestArticlesData.map((article) => {
        return (
          <Link key={article.id} href={`/articles/${article.id}`}>
            <BestArticle key={article.id} article={article}></BestArticle>
          </Link>
        );
      })}
    </div>
  );
}

export default BestArticles;
