import React, { useState } from 'react';
import MainSubTitle from '@/components/texts/MainSubTitle';
import MainTitle from '@/components/texts/MainTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import { useElementWidth } from '@/hooks/useElementWidth';
import useScreenSize from '@/hooks/useScreenSize';

export default function Abwab() {

    const {width: screenW} = useScreenSize();
    const { ref, width } = useElementWidth();
    const [cardHeight, setCardHeight] = useState(0)

    console.log('(width/4) - (20 - (20/4))', (width/4) - (20 - (20/4)))

    return <React.Fragment>

        <section className='py-10 common-px space-y-10'>

            <div className='w-full flex flex-col items-center justify-center gap-7.5'>
                <MainTitle title='abwab.title' />
                <MainSubTitle subTitle="abwab.slogan" />
            </div>

            <div 
                className='flex justify-center gap-x-5 flex-wrap' 
                ref={ref} style={{height: screenW > 899 ? cardHeight * 1.8 : cardHeight * 5.86 }}
            >

                <ServiceCard setCardHeight={setCardHeight} className='max-[900px]:!w-2/3 max-[900px]:-translate-x-1/4' />
                <ServiceCard setCardHeight={setCardHeight} className='max-[900px]:!w-2/3 max-[900px]:translate-x-1/4 max-[900px]:-translate-y-[19%]' />
                <ServiceCard setCardHeight={setCardHeight} className='max-[900px]:!w-2/3 max-[900px]:-translate-x-1/4 max-[900px]:-translate-y-[38%]' />
                <ServiceCard setCardHeight={setCardHeight} className='max-[900px]:!w-2/3 max-[900px]:translate-x-1/4 max-[900px]:-translate-y-[57%]' />
                <ServiceCard setCardHeight={setCardHeight} className='translate-y-[-20%] max-[900px]:!w-2/3 max-[900px]:-translate-x-1/4 max-[900px]:-translate-y-[76%]' />
                <ServiceCard setCardHeight={setCardHeight} className='translate-y-[-20%] max-[900px]:-translate-y-[95%] max-[900px]:translate-x-1/4 max-[900px]:!w-2/3' />
                <ServiceCard setCardHeight={setCardHeight} className='translate-y-[-20%] max-[900px]:-translate-y-[114%] max-[900px]:!w-2/3 max-[900px]:-translate-x-1/4' />

            </div>

        </section>

    </React.Fragment>

}
