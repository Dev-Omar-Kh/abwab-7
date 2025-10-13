import React from 'react';
import { useTranslation } from 'react-i18next';
import { RegularBtnProps } from '@/types/buttons';

export default function RegularBtn({title, icon: Icon, className, variants}: RegularBtnProps) {

    const {t} = useTranslation();

    return <React.Fragment>

        <div 
            className={`
                flex items-center justify-center gap-2.5 rounded-lg px-5 py-2.5 cursor-pointer ${className} 
                ${variants === 'primary' 
                    ? 'bg-greenColor text-whiteColor' 
                    : (variants === 'secondary' ? 'bg-whiteColor text-blackColor' : 'bg-whiteColor text-blackColor')
                }
            `}
        >
            {Icon && <Icon className='text-xl' />}
            <p className='text-lg font-medium'>{t(title)}</p>
        </div>

    </React.Fragment>

}
