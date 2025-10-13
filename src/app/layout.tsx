import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Direction from "../components/dir/Direction";
import { Cairo } from "next/font/google";

const cairo = Cairo({
    subsets: ["latin", "arabic"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "الأبواب السبعة",
    description: "مشروع الأبواب السبعة للصدقة الجارية — مشروع العمر الذي يجمع بين الأجر المستمر وأثر الخير الباقي. خير ساقه الله إليك، فلا تحرم نفسك المشاركة.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

    return <React.Fragment>

        <html lang="ar" dir="rtl" suppressHydrationWarning>

            <body className={`${cairo.className} antialiased`}>

                <Direction />
                {children}

            </body>

        </html>

    </React.Fragment>

}