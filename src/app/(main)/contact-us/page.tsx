"use client"

import React from 'react';
import PageTitle from '@/components/page-title/PageTitle';

import titleBg from '@/assets/images/idea-bg.jpg';

export default function ContactUs() {

    return <React.Fragment>

        <section className='flex flex-col gap-20'>

            <PageTitle title='contactUs.title' image={titleBg} />

        </section>

    </React.Fragment>

}
