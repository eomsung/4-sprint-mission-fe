import Button from "@/components/Button";
import React from "react";

function CreateCommentInProduct() {
  return (
    <div>
      {/* 문의하기 */}
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">문의하기</h2>
        <textarea
          name="title"
          className="w-full h-[104px] px-6 py-4 bg-[#F3F4F6] rounded-xl resize-none"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></textarea>
        <Button className="w-[74px] h-[42px] rounded-lg px-[23px] py-3 self-end">
          등록
        </Button>
      </div>
    </div>
  );
}

export default CreateCommentInProduct;
