import api from "@/api";
import DropdownMenuButton from "@/components/DropdownMenuButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

function DropdownMenuForItem() {
  const queryClient = useQueryClient();
  const params = useParams();
  const productId = params.productId;
  const { mutate: deleteItem } = useMutation({
    mutationFn: () => api.deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product", { productId }],
      });
    },
    onError: () => {
      alert("삭제할 수 없는 상품입니다.");
    },
  });

  return (
    <DropdownMenuButton
      menus={[
        { label: "수정하기", onClick: () => {} },
        { label: "삭제하기", onClick: deleteItem },
      ]}
    />
  );
}

export default DropdownMenuForItem;
