"use client";

import { useCallback } from "react";

export function useScrollTop() {
    return useCallback(() => {
        if (typeof window === "undefined") return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
}