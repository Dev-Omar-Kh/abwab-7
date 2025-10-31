"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image, { StaticImageData } from 'next/image';

import bgImg from '@/assets/images/main-bg.jpg';

type PageTitleProps = {
    title: string;
    image: StaticImageData;
    description?: string;
}

export default function PageTitle({ title, description, image }: PageTitleProps) {

    const { t } = useTranslation();

    return <React.Fragment>

        <section className='space-y-5'>

            <div className={`relative w-full bg-lightColor flex items-end justify-start common-px pt-33 max-[1020px]:pt-25 pb-12 shapedividers_com-219`}>

                <Image src={image || bgImg} alt={title} className='absolute top-0 left-0 w-full h-full object-cover opacity-8' />
                <h1 className='relative text-4xl font-bold text-blackColor'>{t(title)}</h1>

            </div>

            {description && <div className='common-px'>
                <h3 className='w-2xl text-start max-w-full text-lg text-blackColor opacity-65 font-medium'>
                    {t(description)}
                </h3>
            </div>}

        </section>

    </React.Fragment>

}