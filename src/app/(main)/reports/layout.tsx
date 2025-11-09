import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {

    title: "الأبواب السبعة | التقارير الشهرية",
    description:
        "اطّلع على التقارير الشهرية لمشروع الأبواب السبعة للصدقة الجارية، وتعرّف على تفاصيل المشاريع المنفذة، وأوجه الصرف، وأثر التبرعات في تحقيق الأهداف الخيرية والإنسانية.",

    keywords: [
        "التقارير الشهرية",
        "مشروع الأبواب السبعة",
        "تقارير التبرعات",
        "شفافية العمل الخيري",
        "الصدقة الجارية",
        "مشاريع خيرية",
    ],

    openGraph: {
        title: "الأبواب السبعة | التقارير الشهرية",
        description:
        "اطّلع على التقارير الشهرية لمشروع الأبواب السبعة للصدقة الجارية، وتعرّف على تفاصيل المشاريع المنفذة، وأوجه الصرف، وأثر التبرعات في تحقيق الأهداف الخيرية والإنسانية.",
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
        title: "الأبواب السبعة | التقارير الشهرية",
        description:
        "اطّلع على التقارير الشهرية لمشروع الأبواب السبعة للصدقة الجارية، وتعرّف على تفاصيل المشاريع المنفذة، وأوجه الصرف، وأثر التبرعات في تحقيق الأهداف الخيرية والإنسانية.",
        images: ["/og-image.png"],
    },

};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <React.Fragment>
        {children}
    </React.Fragment>;
}
