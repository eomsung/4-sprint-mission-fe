"use client";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import React from "react";

function LogInButton() {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Button
          color="blue"
          className="px-[23px] py-[23px] rounded-lg w-[128px] h-12 "
          onClick={logOut}
        >
          로그아웃
        </Button>
      ) : (
        <Link href="/login">
          <Button
            color="blue"
            className="px-[23px] py-[23px] rounded-lg w-[128px] h-12 "
          >
            로그인
          </Button>
        </Link>
      )}
    </>
  );
}

export default LogInButton;
