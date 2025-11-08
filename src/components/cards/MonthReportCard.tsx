import React from 'react';
// import ImageCard from './ImageCard';
import { GoArrowUpLeft } from 'react-icons/go';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

type MonthReportCardProps = {

    data: {
        image: StaticImageData;
        month: string;
        desc: string[];
        url: string;
    }

}

export default function MonthReportCard({data}: MonthReportCardProps) {

    const { t } = useTranslation();

    return <React.Fragment>

        <Link 
            href={data.url} target='_blank'
            className='p-2.5 space-y-2.5 rounded-lg bg-whiteColor border border-greenColor/25 shadow-sm group hover:scale-103 duration-300'
        >

            {/* <ImageCard src={data.image} alt={`${data.month}-${data.url}`} /> */}

            <div className='flex items-center justify-between gap-2.5'>

                <div>
                    <h3 className='text-xl font-semibold text-blackColor/80'>{t(data.month)}</h3>
                    <p className='font-medium text-blackColor/65'>{data.desc.map(item => t(item)).join(' - ')}</p>
                </div>

                <button 
                    className='
                        p-2.5 rounded-md bg-lightColor text-greenColor shrink-0
                        group-hover:bg-greenColor group-hover:text-whiteColor duration-300 cursor-pointer
                    '
                >
                    <GoArrowUpLeft className='text-2xl' />
                </button>

            </div>

        </Link>

    </React.Fragment>

}
