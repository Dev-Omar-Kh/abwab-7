import React from 'react';
import { StaticImageData } from 'next/image';
import ListText from '../texts/ListText';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import ImageCard from './ImageCard';

type CollectionCardProps = {
    title: string;
    list: string[];
    className?: string;
    image: StaticImageData;
}

export default function CollectionCard({image, title, list, className}: CollectionCardProps) {

    const { t } = useTranslation();

    return <React.Fragment>

        <div className={`p-2.5 space-y-5 rounded-lg bg-whiteColor ${className}`}>

            <ImageCard src={image} alt={title} className='rounded-md' />

            <h3 className='text-xl font-semibold text-greenColor'>{t(title)}</h3>

            <div className='space-y-1.5 pb-2.5'>

                {list.map((li, idx) => <ListText 
                    key={idx} icon={IoMdCheckmarkCircleOutline} text={li} 
                    iconStyle='!text-lg' textStyle='!text-base'
                />)}

            </div>

        </div>

    </React.Fragment>

}
