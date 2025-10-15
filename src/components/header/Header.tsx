import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { BiBrain } from "react-icons/bi";
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { LuClipboardList, LuHandHeart, LuHeadset } from 'react-icons/lu';
import { LinksData } from '@/types/header';
import NavLink from '../nav-link/NavLink';
import { GoHome } from 'react-icons/go';

import logo from "@/assets/images/logo.png";
import useScreenSize from '@/hooks/useScreenSize';
import useScrollPosition from '@/hooks/useScrollPosition';
import BurgerBtn from './BurgerBtn';


const linksData: LinksData[] = [

    {id: 1, icon: GoHome, title: 'header.links.home', href: '/'},
    {id: 2, icon: BiBrain, title: 'header.links.idea', href: '/idea'},
    {id: 3, icon: MdOutlineOndemandVideo, title: 'header.links.videos', href: '/videos'},
    {id: 4, icon: LuHandHeart, title: 'header.links.recommendations', href: '/recommendations'},
    {id: 5, icon: LuClipboardList, title: 'header.links.reports', href: '/reports'},
    {id: 6, icon: LuHeadset, title: 'header.links.contactUs', href: 'contact-us'},

];

export default function Header() {

    const {t} = useTranslation();
    const { width } = useScreenSize();
    const { y: scrollY } = useScrollPosition();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if(width <= 1019){
            setIsMenuOpen(prev => !prev);
        }
    }

    return <React.Fragment>

        <header 
            className={`
                fixed top-0 start-0 w-full py-2.5 common-px flex flex-wrap items-center justify-between gap-5 z-50
                ${isMenuOpen || scrollY > 50 ? 'bg-whiteColor' : ''} duration-150
            `}
        >

            <Link href={'/'}>
                <Image src={logo} alt={t('header.title')} className='h-24 w-fit max-[1020px]:h-18' priority />
            </Link>

            <nav 
                className={`
                    max-[1020px]:fixed max-[1020px]:opacity-0 max-[1020px]:bottom-0 max-[1020px]:bg-whiteColor
                    max-[1020px]:top-22.5 max-[1020px]:left-0 max-[1020px]:right-0 max-[1020px]:!w-[100vw] 
                    max-[1020px]:-translate-y-2.5 duration-300 max-[1020px]:z-40 max-[1020px]:invisible
                    ${isMenuOpen ? 'max-[1020px]:translate-y-0 max-[1020px]:opacity-100 max-[1020px]:visible' : ''}
                `}
                onClick={toggleMenu}
            >

                <ul 
                    className='
                        flex items-center gap-2.5 max-[1020px]:w-full max-[1020px]:h-full max-[1020px]:flex-col 
                        max-[1020px]:py-10 max-[1020px]:px-[4.5%]
                    '
                >

                    {linksData.map(link => <li key={link.id} className='max-[1020px]:w-full'>
                        <NavLink 
                            href={link.href} 
                            activeClassName='!bg-greenColor !text-whiteColor' 
                            className='
                                p-2.5 flex items-center gap-1.5 text-blackColor/70 rounded-lg
                                hover:bg-greenColor hover:text-whiteColor duration-300
                                max-[1020px]:w-full
                            '
                        >
                            <link.icon className='text-xl' />
                            <p className='text-base font-medium'>{t(link.title)}</p>
                        </NavLink>
                    </li>)}

                </ul>

            </nav>

            <div className='w-24 max-[1280px]:hidden'></div>

            <button
                onClick={toggleMenu}
                className="hidden flex-col items-center justify-center gap-1.5 p-2 max-[1020px]:flex max-[1020px]:w-fit opacity-70"
                aria-label="Toggle menu"
            >
                <BurgerBtn isMenuOpen={isMenuOpen} />
            </button>

        </header>

    </React.Fragment>

}
