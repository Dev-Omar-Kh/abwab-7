import React from 'react';
import Image from 'next/image';
import QuranText from '@/components/texts/QuranText';
import { useTranslation } from 'react-i18next';
import { RegularBtnProps } from '@/types/buttons';
import { LuHandshake } from 'react-icons/lu';
import RegularBtn from '@/components/buttons/RegularBtn';
import { IoIosAddCircleOutline } from 'react-icons/io';

import bgImg from '@/assets/images/main-bg.webp';

const ctaBtns: RegularBtnProps[] = [

    {id: 1, icon: IoIosAddCircleOutline, title: 'header.cta.learnMore', variants: 'secondary'},
    {id: 2, icon: LuHandshake, title: 'header.cta.contribute', variants: 'primary'},

]

export default function Main() {

    const {t} = useTranslation();

    return <React.Fragment>

        <main className='relative w-full h-[100dvh] common-px pt-34 max-[1020px]:pt-28 bg-lightColor'>

            <Image 
                src={bgImg} alt='main-bg' 
                fill placeholder="blur"
                className='absolute top-0 start-0 w-full h-full object-cover opacity-10 z-0' priority 
            />

            <div className='relative w-full h-full flex flex-col justify-center items-center gap-15 z-10 max-[550px]:gap-10'>

                <QuranText className='text-3xl text-greenColor font-medium text-center max-[550px]:text-xl'>
                    {t('header.quran')}
                </QuranText>

                <div className='space-y-10 text-center max-[550px]:space-y-5'>
                    <h1 className='text-7xl font-bold text-blackColor max-[550px]:text-5xl max-[360px]:text-4xl'>{t('header.headTitle')}</h1>
                    <p className='text-xl font-medium text-blackColor opacity-65 max-[550px]:text-base'>{t('header.slogan')}</p>
                </div>

                <div 
                    className='
                        w-full flex items-center justify-center gap-5 max-[430px]:gap-2.5 
                        max-[430px]:grid max-[430px]:grid-cols-2 max-[370px]:grid-cols-1
                    '
                >

                    {ctaBtns.map(btn => <button key={btn.id}>
                        <RegularBtn title={btn.title} icon={btn.icon} variants={btn.variants} className='shadow-md'  />
                    </button>)}

                </div>

            </div>

        </main>

    </React.Fragment>

}
