"use client"

import React from 'react';
import PageTitle from '@/components/page-title/PageTitle';

import titleBg from '@/assets/images/idea-bg.jpg';

export default function Reports() {

    return <React.Fragment>

        <section className='flex flex-col gap-20'>

            <PageTitle title='reports.title' image={titleBg} />

        </section>

    </React.Fragment>

}
