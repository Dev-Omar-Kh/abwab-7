import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {

    title: "الأبواب السبعة | من نحن",
    description:
        "تعرف على مشروع الأبواب السبعة للصدقة الجارية، رؤيتنا ورسالتنا في بناء مشاريع خيرية مستدامة تُحدث أثرًا دائمًا في حياة الناس وتنشر الخير في سبعة مجالات متنوعة.",

    openGraph: {
        title: "الأبواب السبعة | من نحن",
        description:
        "تعرف على مشروع الأبواب السبعة للصدقة الجارية، رؤيتنا ورسالتنا في بناء مشاريع خيرية مستدامة تُحدث أثرًا دائمًا في حياة الناس وتنشر الخير في سبعة مجالات متنوعة.",
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
        title: "الأبواب السبعة | من نحن",
        description:
        "تعرف على مشروع الأبواب السبعة للصدقة الجارية، رؤيتنا ورسالتنا في بناء مشاريع خيرية مستدامة تُحدث أثرًا دائمًا في حياة الناس وتنشر الخير في سبعة مجالات متنوعة.",
        images: ["/og-image.png"],
    },

};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <React.Fragment>
        {children}
    </React.Fragment>;
}
