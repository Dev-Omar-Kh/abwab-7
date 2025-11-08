"use client"

import React, { useState } from 'react';
import PageTitle from '@/components/page-title/PageTitle';
import TriggerBtn from '@/components/buttons/TriggerBtn';
import NumbersText from '@/components/texts/NumbersText';
import MonthReportCard from '@/components/cards/MonthReportCard';

import titleBg from '@/assets/images/idea-bg.jpg';
import fakeImage from '@/assets/images/benaa-al-masajed.jpg';
import ReportsData from '@/assets/data/db.json';

const triggers = ReportsData.reports.map(rep => ({ 
    label: <NumbersText lang='ar' number={Number(rep.year)} withSeparator={false} />, value: Number(rep.year) 
}));

export default function Reports() {

    const [currentView, setCurrentView] = useState<number>(Number(ReportsData.reports[ReportsData.reports.length - 1].year));

    const handleViewChange = (value: number) => {
        setCurrentView(value);
    };

    return <React.Fragment>

        <section className='flex flex-col gap-20'>

            <PageTitle title='reports.title' image={titleBg} />

            <section className='common-px !space-y-10 mb-20'>

                <TriggerBtn triggers={triggers} onTriggerChange={handleViewChange} defaultValue={currentView} className='m-auto' />

                <div className='grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[750px]:grid-cols-1'>

                    {ReportsData.reports.find(rep => Number(rep.year) === currentView)?.reports.map((rep, idx) => 

                        <MonthReportCard key={idx} data={{...rep, image: fakeImage}} />

                    )}

                </div>

            </section>

        </section>

    </React.Fragment>

}
