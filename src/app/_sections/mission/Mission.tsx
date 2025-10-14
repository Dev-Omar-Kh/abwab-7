"use client"
import RegularCard from '@/components/cards/RegularCard';
import MainSubTitle from '@/components/texts/MainSubTitle';
import MainTitle from '@/components/texts/MainTitle';
import { RegularCardProps } from '@/types/cards';
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';

const cardsData: RegularCardProps[] = [

    {id: 1, icon: IoEarthOutline, title: 'mission.cards.impact', description: 'mission.cards.impactDesc'},
    {id: 2, icon: LuUsers, title: 'mission.cards.community', description: 'mission.cards.communityDesc'},
    {id: 3, icon: IoMdHeartEmpty, title: 'mission.cards.f&c', description: 'mission.cards.f&cDesc'},

];

export default function Mission() {

    return <React.Fragment>

        <section className='py-10 common-px space-y-10'>

            <div className='w-full flex flex-col items-center justify-center gap-7.5'>
                <MainTitle title='رسالتنا' />
                <MainSubTitle subTitle="مشروع الأبواب السبعة للصدقة الجارية — مشروع العمر الذي يجمع بين الأجر المستمر وأثر الخير الباقي. خير ساقه الله إليك، فلا تحرم نفسك المشاركة." />
            </div>

            <div className='grid grid-cols-3 gap-5 max-[1020px]:grid-cols-2 max-[675px]:grid-cols-1'>

                {cardsData.map(card => <RegularCard 
                    key={card.id} icon={card.icon} 
                    title={card.title} description={card.description} 
                    className='max-[1020px]:last:col-span-2 max-[675px]:last:col-span-1'
                />)}

            </div>

        </section>

    </React.Fragment>

}
