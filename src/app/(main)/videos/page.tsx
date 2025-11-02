"use client"

import React, { useState } from 'react';
import PageTitle from '@/components/page-title/PageTitle';
import MainTitle from '@/components/texts/MainTitle';
import VideoCard from '@/components/cards/VideoCard';
import { useTranslation } from 'react-i18next';

import titleBg from '@/assets/images/idea-bg.jpg';

const videosData = [

    {id: 2, title: 'videos.videos.titles.video1', src: 'https://www.youtube.com/embed/-g7YQ2KbsAE?si=nLch7Fh9w-9RN622'},
    {id: 1, title: 'videos.videos.titles.video2', src: 'https://www.youtube.com/embed/Pdyab5YbN6c?si=TNbfS8HUITQyqw1k'},
    {id: 3, title: 'videos.videos.titles.video3', src: 'https://www.youtube.com/embed/DU01tB2QQDs?si=zJiGJxPoiYcSdXyp'},
    {id: 4, title: 'videos.videos.titles.video4', src: 'https://www.youtube.com/embed/mW-oH8Tx04A?si=rAKOkh62l4OhpxVF'},
    {id: 5, title: 'videos.videos.titles.video5', src: 'https://www.youtube.com/embed/AyQiFWv3UqI?si=koTPZtPxMHjUdQQK'},
    {id: 6, title: 'videos.videos.titles.video6', src: 'https://www.youtube.com/embed/BtzNzrSYwAQ?si=pUJ1ZoB6uamflATe'},
    {id: 7, title: 'videos.videos.titles.video7', src: 'https://www.youtube.com/embed/o6j9IKdMJW8?si=1mQUN771eIgKkea4'},
    {id: 8, title: 'videos.videos.titles.video8', src: 'https://www.youtube.com/embed/0CqwzUpNyeo?si=YRYxgfFbT0iW0V87'},
    {id: 9, title: 'videos.videos.titles.video9', src: 'https://www.youtube.com/embed/0xdFQL_0SM8?si=HaKs7EFS77b52VVF'},
    {id: 10, title: 'videos.videos.titles.video10', src: 'https://www.youtube.com/embed/GK8dUr8pdPc?si=MzE7V52J08At4XzS'},
    {id: 11, title: 'videos.videos.titles.video11', src: 'https://www.youtube.com/embed/5_bT6NmfSBU?si=iIpxlJ_YrwYeh5l5'},

];

export default function VideosPage() {

    const { t } = useTranslation();
    const [playingId, setPlayingId] = useState<number | null>(null);

    return <React.Fragment>

        <section className='flex flex-col gap-20'>

            <PageTitle title='videos.title' image={titleBg} />

            <section className='common-px space-y-10'>


                <div className='w-full flex flex-col items-center justify-center gap-7.5 !mb-20'>
                    <MainTitle title='videos.videos.title' miniBottom={false} />
                    {/* <MainSubTitle subTitle="mission.slogan" /> */}
                </div>

                <div className='pb-20 grid grid-cols-2 gap-5 max-[850px]:grid-cols-1'>

                    {videosData.map(vid => <div key={vid.id} className='p-2.5 rounded-xl space-y-2.5 border border-blackColor/15 bg-whiteColor'>

                        <VideoCard src={vid.src} playing={playingId === vid.id} onPlay={() => setPlayingId(vid.id)} className='!rounded-md' />
                        <h3 className='text-xl font-bold text-blackColor/80 max-[600px]:text-lg'>{t(vid.title)}</h3>

                    </div>)}

                </div>

            </section>

        </section>

    </React.Fragment>

}
