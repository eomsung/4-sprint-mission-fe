"use client";

import Modal from "@/components/Modal";

function LoginErrorModal({ children }) {
  return (
    <Modal>
      <p className="text-[18px] font-medium text-nowrap">{children}</p>
    </Modal>
  );
}

export default LoginErrorModal;
