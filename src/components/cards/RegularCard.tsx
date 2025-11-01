import { RegularCardProps } from '@/types/cards';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function RegularCard({icon: Icon, title, description, className}: RegularCardProps) {

    const {t} = useTranslation();

    return <React.Fragment>

        <div className={`p-5 flex flex-col items-center justify-center gap-5 rounded-lg bg-lightColor/85 ${className}`}>

            <div className='w-24 h-24 p-2.5 flex items-center justify-center rounded-full bg-whiteColor border-2 border-greenColor'>
                <Icon className='text-5xl text-greenColor' />
            </div>

            <div className='space-y-2.5 text-center'>

                <h3 className='text-xl font-semibold text-blackColor'>{t(title)}</h3>

                {description && <p className='text-lg text-blackColor/65'>{t(description)}</p>}

            </div>

        </div>

    </React.Fragment>

}
