"use client"

import React from 'react';
import PageTitle from '@/components/page-title/PageTitle';
import dynamic from 'next/dynamic';

import titleBg from '@/assets/images/idea-bg.jpg';
import SocialLinks from './_contact-us-sections/SocialLinks';

const ContactForm = dynamic(() => import('./_contact-us-sections/ContactForm'), {
    ssr: false
});

export default function ContactUs() {

    return <React.Fragment>

        <section className='flex flex-col gap-20'>

            <PageTitle title='contactUs.title' image={titleBg} />

            <section className='pb-20 common-px grid  grid-cols-2 gap-5 max-[985px]:grid-cols-1'>

                <ContactForm className='max-[985px]:order-2' />

                <SocialLinks />

            </section>

        </section>

    </React.Fragment>

}
