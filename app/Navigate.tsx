"use client";

import { useRouter } from "next/navigation";

export default function Navigate() {
  const router = useRouter();
  router.push("/dashboard");
  return <></>;
}
