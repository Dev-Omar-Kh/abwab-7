import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTranslation } from 'react-i18next';

type ProjectCardProps = {
    title: string;
    image: StaticImageData;
}

export default function ProjectCard({image, title}: ProjectCardProps) {

    const {t} = useTranslation();

    return <React.Fragment>

        <div className='relative rounded-lg overflow-hidden shadow-lg group'>

            <Image src={image} alt={title} className='w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 duration-300' />

            <div className='absolute bottom-0 start-0 w-full h-full flex items-end p-5 bg-gradient-to-t from-blackColor via-blackColor/80 to-transparent'>
                <p className='text-xl text-whiteColor'>{t(title)}</p>
            </div>

        </div>

    </React.Fragment>

}
