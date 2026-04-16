"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navigator() {
  const route = useRouter();
  useEffect(() => {
    route.push("/login/login-password");
  }, []);
  return <div>navigator</div>;
}
