import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {

    title: "الأبواب السبعة | فيديوهاتنا",
    description:
        "شاهد مقاطع الفيديو الخاصة بمشروع الأبواب السبعة التي تسلط الضوء على مشاريعنا الخيرية، إنجازاتنا الميدانية، وقصص العطاء التي صنعت فارقًا حقيقيًا في حياة المحتاجين.",

    openGraph: {
        title: "الأبواب السبعة | فيديوهاتنا",
        description:
        "شاهد مقاطع الفيديو الخاصة بمشروع الأبواب السبعة التي تسلط الضوء على مشاريعنا الخيرية، إنجازاتنا الميدانية، وقصص العطاء التي صنعت فارقًا حقيقيًا في حياة المحتاجين.",
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
        title: "الأبواب السبعة | فيديوهاتنا",
        description:
        "شاهد مقاطع الفيديو الخاصة بمشروع الأبواب السبعة التي تسلط الضوء على مشاريعنا الخيرية، إنجازاتنا الميدانية، وقصص العطاء التي صنعت فارقًا حقيقيًا في حياة المحتاجين.",
        images: ["/og-image.png"],
    },

};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <React.Fragment>
        {children}
    </React.Fragment>;
}
