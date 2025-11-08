import React, { ReactNode } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';

type SocialCardProps = {
    url: string;
    text: string | ReactNode;
    title: string;
    icon: IconType;
    className?: string;
}

export default function SocialCard({url, icon: Icon, title, text, className}: SocialCardProps) {

    const { t } = useTranslation();

    return <React.Fragment>

        <Link 
            href={url} target='_blank'
            className={`
                p-2.5 space-y-2.5 rounded-lg bg-whiteColor border border-greenColor/25
                group hover:border-greenColor duration-300 group ${className}
            `}
        >

            <div className='flex items-center gap-2.5'>

                <div className='p-2.5 rounded-md bg-lightColor text-greenColor group-hover:bg-greenColor group-hover:text-whiteColor duration-300'>
                    <Icon size={32} />
                </div>

                <div>
                    <h3 className='text-lg text-blackColor'>{t(title)}</h3>
                    <p className='text-xs text-blackColor opacity-65'>{typeof text === "string" ? t(text) : text}</p>
                </div>

            </div>

        </Link>

    </React.Fragment>

}
