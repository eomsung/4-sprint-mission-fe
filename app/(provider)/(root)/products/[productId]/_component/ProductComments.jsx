"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import backIcon from "@/assets/svg/ic_back.svg";
import { useQuery } from "@tanstack/react-query";
import api from "@/api";
import { useParams } from "next/navigation";
import ProductComment from "./ProductComment";

function ProductComments() {
  const params = useParams();
  const productId = params.productId;
  const { data: comments } = useQuery({
    queryFn: () =>
      api.getCommentsInProduct(productId).then((comment) => comment.list),
    queryKey: ["comments", { productId }],
    initialData: [],
  });

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col w-full gap-10">
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <ProductComment comment={comment} />
            </div>
          );
        })}
      </div>
      <Link href={`/products`}>
        <Button className="w-[240px] h-12 rounded-[40px] px=16 py-3">
          <p className="mr-1">목록으로 돌아가기</p>
          <Image src={backIcon.src} width={24} height={24} alt="backicon" />
        </Button>
      </Link>
    </div>
  );
}

export default ProductComments;
