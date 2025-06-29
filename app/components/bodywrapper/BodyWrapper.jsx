// components/BodyWrapper.tsx
"use client";
import { ReactNode, useEffect, useState } from "react";

export default function BodyWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.classList.add("highlighter-code-class"); // or your actual class
    }
  }, [mounted]);

  return <>{children}</>;
}
