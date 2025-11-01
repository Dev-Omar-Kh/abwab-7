"use client"

import React from 'react';
import PageTitle from '@/components/page-title/PageTitle';

import titleBg from '@/assets/images/idea-bg.jpg';
import ProjectIdea from './_about-us-sections/project-idea/ProjectIdea';
import OurProjects from './_about-us-sections/our-projects/OurProjects';
import MonthlyStocks from '../_home-sections/stocks/MonthlyStocks';
import Limpidity from './_about-us-sections/Limpidity/Limpidity';
import AboutUsCTA from './_about-us-sections/call-to-action/AboutUsCTA';

export default function OurIdea() {

    return <React.Fragment>

        <section className='flex flex-col gap-20'>

            <PageTitle title='aboutUs.title' image={titleBg} />

            <ProjectIdea />

            <OurProjects />

            <Limpidity />

            <MonthlyStocks />

            <AboutUsCTA />

        </section>

    </React.Fragment> 

}