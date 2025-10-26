import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import NumbersText from "../texts/NumbersText";
import { FaFacebookF } from "react-icons/fa";
import { LinksData } from "@/types/header";

import lightLogo from "@/assets/images/light-logo-2.png";
import { SocialLinks } from "@/types/footer";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

const linksData: LinksData[] = [
    {id: 2, title: 'header.links.idea', href: '/idea'},
    {id: 3, title: 'header.links.videos', href: '/videos'},
    {id: 4, title: 'header.links.recommendations', href: '/recommendations'},
    {id: 5, title: 'header.links.reports', href: '/reports'},
];

const achievementsYears = [2023, 2024, 2025];

const socialLinks: SocialLinks[]  = [
    {id: 1, icon: FaFacebookF, href: 'https://www.facebook.com/AbwabSaba'},
    {id: 2, icon: MdOutlineWhatsapp, href: 'https://whatsapp.com/channel/0029Va8jmTZ2phHLqRGI2g1k'},
    {id: 3, icon: FaYoutube, href: 'https://www.youtube.com/@BasmtAmal'},
    {id: 4, icon: RiTelegram2Fill, href: 'https://t.me/abwab777'},
]

export default function Footer() {
    const { t } = useTranslation();

    return <React.Fragment>

        <footer className="w-full pattern-bg">

            <div className="w-full pt-12 pb-10 common-px space-y-10 bg-greenColor/80">

                <div className="grid grid-cols-4 gap-10 max-[720px]:grid-cols-2 max-[350px]:grid-cols-1">
                
                    <div className="col-span-2 flex flex-col gap-5 max-[350px]:col-span-1">

                        <Link href={'/'} className="w-fit flex items-center gap-3 max-[600px]:flex-col max-[600px]:items-start">
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

                        {socialLinks.map(link => <Link
                            key={link.id} href={link.href} target="_blank"
                            className="p-2 rounded-full bg-lightColor/10 text-lightColor/80 hover:bg-lightColor/20 duration-300"
                        >
                            {link.icon && <link.icon size={18} />}
                        </Link>)}

                    </div>

                    <div className="text-lightColor/70 text-sm ">

                        <p className="flex items-center gap-1">
                            <span>©</span>
                            {t("footer.rights")}
                            <NumbersText lang="ar" number={2025} withSeparator={false} className="text-lg" /> 
                            {t('header.title')}
                        </p>

                        <div className="flex items-center gap-1 text-lightColor/50 text-xs max-[600px]:justify-center">

                            <Link href={'/'}>{t('footer.rightsDesc1')}</Link>
                            |
                            <Link href={'https://basmtamal.com/'} target="_blank">{t('footer.rightsDesc2')}</Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>

    </React.Fragment>
}
