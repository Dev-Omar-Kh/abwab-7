import MainTitle from '@/components/texts/MainTitle'
import React from 'react'

export default function OurProjects() {

    return <React.Fragment>

        <section className='common-px space-y-10'>


            <div className='w-full flex flex-col items-center justify-center gap-7.5 !mb-20'>
                <MainTitle title='aboutUs.projects.title' miniBottom={false} />
                {/* <MainSubTitle subTitle="mission.slogan" /> */}
            </div>

        </section>

    </React.Fragment>

}
