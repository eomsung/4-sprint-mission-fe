"use client";
import api from "@/api";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import ProductDetailData from "./_component/ProductDetailData";

function ItemDetailPage() {
  const { loggedIn } = useAuth();
  const params = useParams();
  const itemId = params.itemId;

  const { data: product } = useQuery({
    queryFn: () => api.getProduct(itemId),
    queryKey: ["item", { itemId }],
    enabled: loggedIn,
    initialData: {},
  }); // 여기 다음 프로젝트 진행할때 initialData를 Products에서 받아서 넣기

  const { data: userData } = useQuery({
    queryFn: () => api.getUserData(),
    queryKey: ["userData"],
    enabled: loggedIn,
    initialData: {},
  });

  return (
    <div className="flex flex-col items-center m-auto w-[1200px] justify-center mt-6">
      <ProductDetailData product={product} userData={userData} />
      <div className="flex flex-col gap-6 w-full">
        <div>
          문의하기
          <textarea
            name="title"
            className="w-full h-[104px] px-6 py-4 bg-[#F3F4F6] rounded-xl resize-none"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></textarea>
        </div>
        <div className="flex flex-col gap-10"></div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
