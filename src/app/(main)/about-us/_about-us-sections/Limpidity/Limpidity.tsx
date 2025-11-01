import React from 'react';
import MainTitle from '@/components/texts/MainTitle';
import { RegularCardProps } from '@/types/cards';
import RegularCard from '@/components/cards/RegularCard';
import { BsCameraReels } from 'react-icons/bs';
import { PiChartLineUpLight, PiClipboardText } from 'react-icons/pi';

// const projectIdeaData = [

//     {id: 1, text: 'aboutUs.limpidity.documentation'},
//     {id: 2, text: 'aboutUs.limpidity.sendReports'},
//     {id: 3, text: 'aboutUs.limpidity.monitoringImpact'},

// ]

// const limpidityData = (t: TFunction) => [

//     {
//         id: 1,
//         title: 'aboutUs.limpidity.limpidityCard1.title',
//         list: [
//             {id: 1, text: 'aboutUs.limpidity.limpidityCard1.list1'},
//             {id: 2, text: 'aboutUs.limpidity.limpidityCard1.list2'},
//             {id: 3, text: 'aboutUs.limpidity.limpidityCard1.list3'},
//         ],
//     },

//     // {
//     //     id: 2,
//     //     title: 'aboutUs.limpidity.limpidityCard2.title',
//     //     list: [
//     //         {id: 1, text: <span>{t('aboutUs.limpidity.limpidityCard2.list')} <NumbersText lang='ar' number={2025} withSeparator={false} /></span>},
//     //         {id: 2, text: <span>{t('aboutUs.limpidity.limpidityCard2.list')} <NumbersText lang='ar' number={2024} withSeparator={false} /></span>},
//     //         {id: 3, text: <span>{t('aboutUs.limpidity.limpidityCard2.list')} <NumbersText lang='ar' number={2023} withSeparator={false} /></span>},
//     //     ],
//     // }

// ]

const cardsData: RegularCardProps[] = [

    {id: 1, icon: BsCameraReels, title: 'aboutUs.limpidity.limpidityCard1'},
    {id: 2, icon: PiClipboardText, title: 'aboutUs.limpidity.limpidityCard2'},
    {id: 3, icon: PiChartLineUpLight, title: 'aboutUs.limpidity.limpidityCard3'},

];

export default function Limpidity() {

    // const { t } = useTranslation();

    return<React.Fragment>

        <section className='common-px space-y-10'>

            <div className='w-full flex flex-col items-center justify-center gap-7.5 !mb-20'>
                <MainTitle title='aboutUs.limpidity.title' miniBottom={false} />
                {/* <MainSubTitle subTitle="mission.slogan" /> */}
            </div>

            <div className='grid grid-cols-3 gap-5 max-[1020px]:grid-cols-2 max-[675px]:grid-cols-1'>

                {cardsData.map(card => <RegularCard 
                    key={card.id} icon={card.icon} 
                    title={card.title}  
                    className='max-[1020px]:last:col-span-2 max-[675px]:last:col-span-1'
                />)}

            </div>

            {/* <div className='grid grid-cols-2 gap-5 max-[800px]:grid-cols-1'>

                <div className='space-y-5'>

                    {limpidityData(t).map(lim => <div key={lim.id} className='space-y-2.5 max-[800px]:order-2'>

                        <h3 className='text-2xl font-semibold text-greenColor max-[650px]:text-xl'>{t(lim.title)}</h3>

                        <div className='space-y-1.5'>
                            {lim.list.map(idea => <ListText 
                                key={idea.id} icon={IoMdCheckmarkCircleOutline} text={idea.text} 
                                iconStyle='max-[650px]:text-lg' textStyle=' max-[650px]:text-base'
                            />)}
                        </div>

                    </div>)}

                </div>

                <ImageCard src={fakeImg} alt='fake image' className='rounded-xl' />

            </div> */}

        </section>

    </React.Fragment>

}
