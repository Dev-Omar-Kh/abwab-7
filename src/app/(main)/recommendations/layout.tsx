import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {

    title: "الأبواب السبعة | تزكيات المشايخ والعلماء",
    description:
        "استمع إلى تزكيات ومداخلات العلماء والمشايخ حول مشروع الأبواب السبعة، وشهاداتهم في أهمية دعم هذا المشروع الخيري المبارك وأثره الكبير في نفع الناس.",

    openGraph: {
        title: "الأبواب السبعة | تزكيات المشايخ والعلماء",
        description:
        "استمع إلى تزكيات ومداخلات العلماء والمشايخ حول مشروع الأبواب السبعة، وشهاداتهم في أهمية دعم هذا المشروع الخيري المبارك وأثره الكبير في نفع الناس.",
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
        title: "الأبواب السبعة | تزكيات المشايخ والعلماء",
        description:
        "استمع إلى تزكيات ومداخلات العلماء والمشايخ حول مشروع الأبواب السبعة، وشهاداتهم في أهمية دعم هذا المشروع الخيري المبارك وأثره الكبير في نفع الناس.",
        images: ["/og-image.png"],
    },

};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <React.Fragment>
        {children}
    </React.Fragment>;
}
