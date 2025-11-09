"use client"

import React from 'react';
import RegularBtn from '@/components/buttons/RegularBtn';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function NotFound() {

    const { back } = useRouter();
    const { t } = useTranslation();

    return <React.Fragment>

        <section className='w-full h-[100dvh] py-10 common-px flex flex-col gap-5 items-center justify-center bg-lightColor'>

            <p className='text-[10rem]'>🧭</p>

            <h1 className='w-3xl max-w-full text-3xl text-center font-bold text-blackColor opacity-80 max-[370px]:text-xl'>
                {t('notFound.text')}
            </h1>

            <button onClick={() => back()} className='max-[400px]:w-full'>
                <RegularBtn title='notFound.btn' variants='primary' />
            </button>

        </section>

    </React.Fragment>

}
