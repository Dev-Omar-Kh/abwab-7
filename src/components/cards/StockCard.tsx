import React from 'react';
import { useTranslation } from 'react-i18next';
import RegularBtn from '../buttons/RegularBtn';
import NumbersText from '../texts/NumbersText';
import Link from 'next/link';

type StockCardProps = {
    price: number;
    currency: string;
    stockColor: string;
    className?: string;
}

export default function StockCard({price, currency, className}: StockCardProps) {

    const { t } = useTranslation();

    return <React.Fragment>

        <div className={`relative p-5 space-y-5 rounded-lg bg-lightColor ${className}`}>

            {/* <div className='absolute top-5 end-5 w-3.5 h-3.5 rounded-full bg-blackColor shadow-2xs' style={{backgroundColor: stockColor}}></div> */}

            <div className='flex flex-col items-center justify-center gap-2.5'>
                <p className="text-5xl font-extrabold text-blackColor">{<NumbersText lang='ar' number={price} />}</p>
                <p className='text-blackColor opacity-65'><span className='font-medium'>{t(currency)}</span> / {t('stocks.monthly')}</p>
            </div>

            <div className="my-5 border-t border-dashed border-blackColor/15" />

            <Link href={'https://api.whatsapp.com/send/?phone=201069418701&text&type=phone_number&app_absent=0'} target='_blank' className='w-full'>
                <RegularBtn title='stocks.subscribe' variants='primary' />
            </Link>

        </div>

    </React.Fragment>

}
