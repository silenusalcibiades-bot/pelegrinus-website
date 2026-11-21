"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function LanguageAttribute() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "nl";
  }, [pathname]);
  return null;
}
