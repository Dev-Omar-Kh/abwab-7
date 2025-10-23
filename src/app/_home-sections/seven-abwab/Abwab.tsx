import React, { useState } from 'react';
import MainSubTitle from '@/components/texts/MainSubTitle';
import MainTitle from '@/components/texts/MainTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import useScreenSize from '@/hooks/useScreenSize';
import type { StaticImageData } from 'next/image';

import kafalatAytam from '@/assets/images/kafalat-aytam.jpg';
import soqya from '@/assets/images/soqya-almaa.jpeg';
import masaged from '@/assets/images/benaa-al-masajed.jpg';
import etaam from '@/assets/images/etaam-foqaraa.jpg';
import tepaa from '@/assets/images/tepaa-masahef.jpg';
import tolaap from '@/assets/images/kafalat-tolap.jpg';
import tahfez from '@/assets/images/door-tahfez.jpg';

type AlAbwabDataTypes = {
    id: number;
    img: StaticImageData;
    title: string;
    className?: string;
}

const alAbwabData: AlAbwabDataTypes[] = [

    {
        id: 0,
        img: kafalatAytam,
        title: 'abwab.services.kafalah',
        className: 'max-[900px]:!w-2/3 max-[900px]:even:translate-x-1/4 max-[900px]:odd:-translate-x-1/4',
    },

    {
        id: 1,
        img: soqya,
        title: 'abwab.services.soqya',
        className: 'max-[900px]:!w-2/3 max-[900px]:even:translate-x-1/4 max-[900px]:odd:-translate-x-1/4 max-[900px]:-translate-y-[19%]',
    },

    {
        id: 2,
        img: masaged,
        title: 'abwab.services.benaa',
        className: 'max-[900px]:!w-2/3 max-[900px]:even:translate-x-1/4 max-[900px]:odd:-translate-x-1/4 max-[900px]:-translate-y-[38%]',
    },

    {
        id: 3,
        img: etaam,
        title: 'abwab.services.etaam',
        className: 'max-[900px]:!w-2/3 max-[900px]:even:translate-x-1/4 max-[900px]:odd:-translate-x-1/4 max-[900px]:-translate-y-[57%]',
    },

    {
        id: 4,
        img: tepaa,
        title: 'abwab.services.tepaa',
        className: 'max-[900px]:!w-2/3 max-[900px]:even:translate-x-1/4 max-[900px]:odd:-translate-x-1/4 translate-y-[-20%] max-[900px]:-translate-y-[76%]',
    },

    {
        id: 5,
        img: tolaap,
        title: 'abwab.services.kafalatOlamaa',
        className: `max-[900px]:!w-2/3 max-[900px]:even:translate-x-1/4 max-[900px]:odd:-translate-x-1/4 translate-y-[-20%] max-[900px]:-translate-y-[95%]`,
    },

    {
        id: 6,
        img: tahfez,
        title: 'abwab.services.kafalahDoorTahfez',
        className: `
            max-[900px]:!w-2/3 max-[900px]:even:translate-x-1/4 max-[900px]:odd:-translate-x-1/4 
            translate-y-[-20%] max-[900px]:-translate-y-[114%]
        `,
    },

]

export default function Abwab() {

    const {width: screenW} = useScreenSize();
    const [cardHeight, setCardHeight] = useState(0)

    return <React.Fragment>

        <section className='common-px space-y-10'>

            <div className='w-full flex flex-col items-center justify-center gap-7.5'>
                <MainTitle title='abwab.title' miniBottom={false} />
                <MainSubTitle subTitle="abwab.slogan" />
            </div>

            <div 
                className='flex justify-center gap-x-5 flex-wrap' 
                style={{height: screenW > 899 ? cardHeight * 1.8 : cardHeight * 5.86 }}
            >

                {alAbwabData.map(card => <ServiceCard 
                    key={card.id} 
                    setCardHeight={setCardHeight} title={card.title} bgImage={card.img}
                    className={`${card.className}`} 
                />)}

            </div>

        </section>

    </React.Fragment>

}
