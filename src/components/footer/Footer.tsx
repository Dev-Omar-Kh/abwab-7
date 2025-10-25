import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import NumbersText from "../texts/NumbersText";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LinksData } from "@/types/header";

import lightLogo from "@/assets/images/light-logo-2.png";

const linksData: LinksData[] = [
    {id: 2, title: 'header.links.idea', href: '/idea'},
    {id: 3, title: 'header.links.videos', href: '/videos'},
    {id: 4, title: 'header.links.recommendations', href: '/recommendations'},
    {id: 5, title: 'header.links.reports', href: '/reports'},
];

const achievementsYears = [2023, 2024, 2025];

export default function Footer() {
    const { t } = useTranslation();

    return <React.Fragment>

        <footer className="w-full pattern-bg">

            <div className="w-full pt-12 pb-10 common-px space-y-10 bg-greenColor/80">

                <div className="grid grid-cols-4 gap-10 max-[720px]:grid-cols-2 max-[350px]:grid-cols-1">
                
                    <div className="col-span-2 flex flex-col gap-5 max-[350px]:col-span-1">

                        <Link href={'/'} className="w-fit flex items-center gap-3">
                            <Image src={lightLogo} alt={t("header.title")} className="h-16 w-auto" priority />
                            <h2 className="text-2xl font-semibold text-lightColor">{t("header.title")}</h2>
                        </Link>

                        <p className="text-lightColor/75 text-base leading-relaxed">
                            {t("footer.slogan")}
                        </p>

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold text-lightColor mb-4">{t("footer.quickLinks.title")}</h3>

                        <ul className="flex flex-col gap-2 text-lightColor/75">

                            {linksData.map(link => <li key={link.id}>
                                <Link href={link.href} className="hover:text-lightColor duration-300">
                                {t(link.title)}
                                </Link>
                            </li>)}

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold text-lightColor mb-4">{t("footer.achievements.title")}</h3>

                        <ul className="flex flex-col gap-2 text-lightColor/75">

                            {achievementsYears.map((year, idx) => <li key={idx}>
                                <Link href="#" className="hover:text-lightColor duration-300">
                                    {t('footer.achievements.yearReport')} <NumbersText lang="ar" number={year} withSeparator={false} />
                                </Link>
                            </li>)}

                        </ul>

                    </div>

                </div>

                <div className="w-full h-px bg-lightColor/30"></div>

                <div className="flex flex-wrap justify-between max-[600px]:flex-col max-[600px]:justify-center items-center gap-5">

                    <div className="flex items-center gap-4">
                        <Link
                        href="#"
                        className="p-2 rounded-full bg-lightColor/10 text-lightColor/80 hover:bg-lightColor/20 duration-300"
                        >
                        <FaFacebookF size={18} />
                        </Link>
                        <Link
                        href="#"
                        className="p-2 rounded-full bg-lightColor/10 text-lightColor/80 hover:bg-lightColor/20 duration-300"
                        >
                        <FaTwitter size={18} />
                        </Link>
                        <Link
                        href="#"
                        className="p-2 rounded-full bg-lightColor/10 text-lightColor/80 hover:bg-lightColor/20 duration-300"
                        >
                        <FaInstagram size={18} />
                        </Link>
                        <Link
                        href="#"
                        className="p-2 rounded-full bg-lightColor/10 text-lightColor/80 hover:bg-lightColor/20 duration-300"
                        >
                        <FaLinkedinIn size={18} />
                        </Link>
                    </div>

                    <div className="text-lightColor/70 text-sm max-[600px]:text-center md:text-right">
                        <p>
                        © <NumbersText lang="ar" number={2025} withSeparator={false} />{" "}
                        Islamic Charity. {t("footer.rights") || "All rights reserved."}
                        </p>
                        <p className="text-lightColor/50 text-xs">
                        100% transparent fund distribution | Registered charity organization
                        </p>
                    </div>

                </div>

            </div>

        </footer>

    </React.Fragment>
}
