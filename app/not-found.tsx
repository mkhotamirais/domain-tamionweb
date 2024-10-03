"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage after component mounts
    router.replace("/");
  }, [router]);

  return null; // Render nothing since we're redirecting
}
