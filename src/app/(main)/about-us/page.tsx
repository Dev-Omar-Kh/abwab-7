"use client"

import React from 'react';
import PageTitle from '@/components/page-title/PageTitle';

import titleBg from '@/assets/images/idea-bg.jpg';
import ProjectIdea from './_about-us-sections/project-idea/ProjectIdea';
import OurProjects from './_about-us-sections/project-idea/OurProjects';

export default function OurIdea() {

    return <React.Fragment>

        <section className='flex flex-col gap-10'>

            <PageTitle title='aboutUs.title' image={titleBg} />

            <ProjectIdea />

            <OurProjects />

        </section>

    </React.Fragment> 

}