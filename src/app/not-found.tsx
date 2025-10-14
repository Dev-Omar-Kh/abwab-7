"use client"

import React from 'react';
import RegularBtn from '@/components/buttons/RegularBtn';
import { useRouter } from 'next/navigation';

export default function NotFound() {

    const router = useRouter();

    return <React.Fragment>

        <section className='w-full h-[100dvh] py-10 common-px flex flex-col gap-5 items-center justify-center bg-lightColor'>

            <p className='text-9xl'>⏳</p>

            <h1 className='text-4xl text-center font-bold text-greenColor max-[370px]:text-2xl'>اصبر لسا مشتغلتش</h1>

            <button onClick={() => router.back()} className='max-[400px]:w-full'>
                <RegularBtn title='إرجــع تـانـي' variants='primary' />
            </button>

        </section>

    </React.Fragment>

}
