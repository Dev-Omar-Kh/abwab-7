import { useElementWidth } from '@/hooks/useElementWidth';
import React, { useEffect } from 'react';
// import bgImage from '@/assets/images/main-bg.webp';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import type { StaticImageData } from 'next/image';

type ServiceCardProps = {
    title: string;
    bgImage: StaticImageData; // Allow both types
    className?: string;
    style?: React.CSSProperties;
    setCardHeight: (height: number) => void;
}

export default function ServiceCard({className, style, setCardHeight, title, bgImage}: ServiceCardProps) {

    const { t } = useTranslation();
    const { ref, width } = useElementWidth();

    useEffect(() => {

        setCardHeight(width)

    }, [width, setCardHeight])
    

    return <React.Fragment>

        <div 
            ref={ref}
            className={`
                relative p-5 rounded-lg bg-lightColor
                hexa-card shrink-0 ${className}
            `}
            style={{height: width, ...style}}
        >

            <div className='absolute w-full h-full top-0 left-0 bottom-0 right-0 opacity-10 z-10'>
                <Image src={bgImage} alt='service image' className='w-full h-full object-cover' priority />
            </div>

            <div className='absolute w-full h-full top-0 left-0 bottom-0 right-0 z-0 bg-lightColor'></div>
            <div className='relative w-full h-full flex items-center justify-center  z-20'>
                <h3 className='text-center text-3xl font-bold text-greenColor text-shadow-2xs max-[460px]:text-2xl'>{t(title)}</h3>
            </div>

        </div>

    </React.Fragment>

}
