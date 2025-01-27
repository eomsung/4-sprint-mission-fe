import api from "@/api";
import Link from "next/link";
import React from "react";

function ProductPage() {
  return (
    <div>
      <Link href="/products/553">
        553번 물건 보러 가기/ 테스트용 /아이디 :testtest0000@test.com
        /비밀번호:12345678{" "}
      </Link>
    </div>
  );
}

export default ProductPage;
