import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {

    title: "الأبواب السبعة | تواصل معنا",
    description:
        "تواصل مع فريق مشروع الأبواب السبعة للصدقة الجارية للإستفسار، المشاركة، أو تقديم الدعم. يسعدنا خدمتك والإجابة عن جميع تساؤلاتك حول المشروع ومجالاته.",

    openGraph: {
        title: "الأبواب السبعة | تواصل معنا",
        description:
        "تواصل مع فريق مشروع الأبواب السبعة للصدقة الجارية للإستفسار، المشاركة، أو تقديم الدعم. يسعدنا خدمتك والإجابة عن جميع تساؤلاتك حول المشروع ومجالاته.",
        images: [
            {
                url: "/og-image.png",
                alt: "الأبواب السبعة",
            },
        ],
        locale: "ar_EG",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "الأبواب السبعة | تواصل معنا",
        description:
        "تواصل مع فريق مشروع الأبواب السبعة للصدقة الجارية للإستفسار، المشاركة، أو تقديم الدعم. يسعدنا خدمتك والإجابة عن جميع تساؤلاتك حول المشروع ومجالاته.",
        images: ["/og-image.png"],
    },

};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <React.Fragment>
        {children}
    </React.Fragment>;
}
