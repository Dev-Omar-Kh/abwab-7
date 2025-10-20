"use client"

import { useCallback } from "react";

type Locale = "en" | "ar";

export function useLocalizedNumber(locale: Locale = "en") {

    const formatNumber = useCallback((num: number | string) => {

        const number = Number(num);
        if (isNaN(number)) return num;
        return number.toLocaleString(locale === "ar" ? "ar-EG" : "en-US");

    },[locale]);

    return { formatNumber };

}
