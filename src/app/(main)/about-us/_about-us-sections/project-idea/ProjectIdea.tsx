import React from 'react';
import VideoCard from '@/components/cards/VideoCard';
import MainTitle from '@/components/texts/MainTitle';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const projectIdeaData = [

    {id: 1, title: 'aboutUs.idea.project', desc: 'aboutUs.idea.projectDesc'},
    {id: 2, title: 'aboutUs.idea.goal', desc: 'aboutUs.idea.goalDesc'},
    {id: 3, title: 'aboutUs.idea.mission', desc: 'aboutUs.idea.missionDesc'},

]

export default function ProjectIdea() {

    const { t } = useTranslation();

    return <React.Fragment>

        <section className='common-px space-y-10'>


            <div className='w-full flex flex-col items-center justify-center gap-7.5 !mb-20'>
                <MainTitle title='aboutUs.idea.title' miniBottom={false} />
                {/* <MainSubTitle subTitle="mission.slogan" /> */}
            </div>

            <div className='grid grid-cols-2 gap-5 max-[1070px]:grid-cols-1'>

                <div className='space-y-5 max-[1070px]:order-2'>

                    {projectIdeaData.map(idea => <div key={idea.id} className='space-y-1.5'>

                        <h3 className='text-2xl font-semibold text-greenColor max-[650px]:text-xl'>{t(idea.title)}</h3>

                        <div className='space-x-2.5'>
                            <IoMdCheckmarkCircleOutline className='shrink-0 inline-block text-xl text-greenColor max-[650px]:text-lg' />
                            <span className='text-lg text-blackColor max-[650px]:text-base'>{t(idea.desc)}</span>
                        </div>

                    </div>)}

                </div>

                <VideoCard src='https://www.youtube.com/embed/6UCAS_Jn8CY?si=O77gfYBYSlkNyaku' />

            </div>

        </section>

    </React.Fragment>

}
