"use client"
import { useEffect } from "react";
import i18n from "../../../i18n";

export default function Direction() {

    useEffect(() => {

        const apply = (lng: string) => {
            const isRTL = lng.startsWith("ar");
            document.documentElement.setAttribute("lang", lng);
            document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
        };

        apply(i18n.language);
        const handler = (lng: string) => apply(lng);
        i18n.on("languageChanged", handler);

        return () => {
            i18n.off("languageChanged", handler);
        };

    }, []);

    return null;

}