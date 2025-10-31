import React from 'react';
import MainTitle from '@/components/texts/MainTitle';
import MainSubTitle from '@/components/texts/MainSubTitle';
import ProjectCard from '@/components/cards/ProjectCard';
import { StaticImageData } from 'next/image';

import qeswa from '@/assets/images/more-qeswa.jpg';
import khemar from '@/assets/images/more-khemar.jpg';
import quafel from '@/assets/images/more-quafel.png';
import daaoa from '@/assets/images/more-daaoa.jpg';
import omraa from '@/assets/images/more-omraa.jpg';
import masharee3 from '@/assets/images/more-masharee3.jpg';
import herfa from '@/assets/images/more-herfa.jpg';
import matbo3at from '@/assets/images/more-matbo3at.jpg';
import zawag from '@/assets/images/more-zawag.jpg';
import elhad from '@/assets/images/more-elhad.png';

type ProjectsDataType = {
    id: number;
    img: StaticImageData;
    title: string;
    className?: string;
}

const projectsData: ProjectsDataType[] = [

    { id: 0, img: qeswa, title: 'moreAbwab.projects.qeswa' },
    { id: 1, img: khemar, title: 'moreAbwab.projects.khemar' },
    { id: 2, img: quafel, title: 'moreAbwab.projects.quafel' },
    { id: 3, img: daaoa, title: 'moreAbwab.projects.daaoa' },
    { id: 4, img: omraa, title: 'moreAbwab.projects.omraa' },
    { id: 5, img: masharee3, title: 'moreAbwab.projects.masharee3' },
    { id: 6, img: herfa, title: 'moreAbwab.projects.herfa' },
    { id: 7, img: matbo3at, title: 'moreAbwab.projects.matbo3at' },
    { id: 8, img: zawag, title: 'moreAbwab.projects.zawag' },
    { id: 9, img: elhad, title: 'moreAbwab.projects.elhad' },

];

export default function MoreAbwab() {

    return <React.Fragment>

        <section className='common-px space-y-10'>

            <div className='w-full flex flex-col items-center justify-center gap-7.5'>
                <MainTitle title='moreAbwab.title' miniBottom={false} />
                <MainSubTitle subTitle="moreAbwab.slogan" />
            </div>

            <div className='grid grid-cols-4 gap-5 max-[1080px]:grid-cols-3 max-[850px]:grid-cols-2 max-[520px]:grid-cols-1'>

                {projectsData.map(pro => <ProjectCard key={pro.id} image={pro.img} title={pro.title} />)}

            </div>

            <div></div>

        </section>

    </React.Fragment>

}
