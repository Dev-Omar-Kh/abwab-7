"use client"

import React, { useState } from 'react';
import PageTitle from '@/components/page-title/PageTitle';

import titleBg from '@/assets/images/idea-bg.jpg';
import MainTitle from '@/components/texts/MainTitle';
import VideoCard from '@/components/cards/VideoCard';
import { useTranslation } from 'react-i18next';

const recommendationsData = [

    {id: 2, title: 'recommendations.recommendations.titles.title1', src: 'https://www.youtube.com/embed/eVt44mb2GqA?si=WvZdGLVbraQxArpg'},
    {id: 1, title: 'recommendations.recommendations.titles.title2', src: 'https://www.youtube.com/embed/KdNDnJOz35c?si=NRus4oQbbJ5h1NiV'},
    {id: 3, title: 'recommendations.recommendations.titles.title3', src: 'https://www.youtube.com/embed/gvh7FqQ4MV4?si=B2DacQuhu44qs5EK'},
    {id: 4, title: 'recommendations.recommendations.titles.title4', src: 'https://www.youtube.com/embed/JDrfJIdYPy0?si=QAc5hr0Mgi06Em6Q'},
    {id: 5, title: 'recommendations.recommendations.titles.title5', src: 'https://www.youtube.com/embed/ZtN2lqIr8nY?si=etXJk4hBCW3mHDt6'},
    {id: 6, title: 'recommendations.recommendations.titles.title6', src: 'https://www.youtube.com/embed/UpuX8gm6A_k?si=HfkqFaTYCkElWKNG'},
    {id: 7, title: 'recommendations.recommendations.titles.title7', src: 'https://www.youtube.com/embed/60ocLkWwSBU?si=YDhaElGxpMEpr5tN'},
    {id: 8, title: 'recommendations.recommendations.titles.title8', src: 'https://www.youtube.com/embed/W5tPTSPgR3Q?si=EYIaWgj4i5QWt58B'},
    {id: 9, title: 'recommendations.recommendations.titles.title9', src: 'https://www.youtube.com/embed/uwwFFC60SA0?si=SynrAWEqykWkNYIK'},
    {id: 10, title: 'recommendations.recommendations.titles.title10', src: 'https://www.youtube.com/embed/tzO5zLOST-8?si=q4EkXlMD4g47j8eB'},
    {id: 11, title: 'recommendations.recommendations.titles.title11', src: 'https://www.youtube.com/embed/dZrEceMpJM8?si=EQnUJP_q7HrFns76'},

];

export default function RecommendationsPage() {

    const { t } = useTranslation();
    const [playingId, setPlayingId] = useState<number | null>(null);

    return <React.Fragment>

        <section className='flex flex-col gap-20'>

            <PageTitle title='recommendations.title' image={titleBg} />

            <section className='common-px space-y-10'>

                <div className='w-full flex flex-col items-center justify-center gap-7.5 !mb-20'>
                    <MainTitle title='recommendations.recommendations.title' miniBottom={false} />
                    {/* <MainSubTitle subTitle="mission.slogan" /> */}
                </div>

                <div className='pb-20 grid grid-cols-2 gap-5 max-[850px]:grid-cols-1'>

                    {recommendationsData.map(vid => <div key={vid.id} className='p-2.5 rounded-xl space-y-2.5 border border-blackColor/15 bg-whiteColor'>

                        <VideoCard src={vid.src} playing={playingId === vid.id} onPlay={() => setPlayingId(vid.id)} className='!rounded-md' />
                        <h3 className='text-xl font-bold text-blackColor/80 max-[600px]:text-lg'>{t(vid.title)}</h3>

                    </div>)}

                </div>

            </section>

        </section>

    </React.Fragment>

}
