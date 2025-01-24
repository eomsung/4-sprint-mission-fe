"use client";

import DropdownMenuButton from "@/components/DropdownMenuButton";
import { useModal } from "@/contexts/ModalContext";
import React from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function DropdownMenuForProduct() {
  const modal = useModal();

  return (
    <DropdownMenuButton
      menus={[
        { label: "수정하기", onClick: () => {} },
        {
          label: "삭제하기",
          onClick: () =>
            modal.open(
              <DeleteConfirmationModal>
                정말로 상품을 삭제하시겠어요?
              </DeleteConfirmationModal>
            ),
        },
      ]}
    />
  );
}

export default DropdownMenuForProduct;
