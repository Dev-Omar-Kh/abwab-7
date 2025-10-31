import React from 'react';
import { useTranslation } from 'react-i18next';
import QuranText from '@/components/texts/QuranText';
import { RegularBtnProps } from '@/types/buttons';
import { LuClipboardList, LuHandshake } from 'react-icons/lu';
import RegularBtn from '@/components/buttons/RegularBtn';
import { GoDotFill } from 'react-icons/go';
import NumbersText from '@/components/texts/NumbersText';

const ctaBtns: RegularBtnProps[] = [
    {id: 1, icon: LuHandshake, title: 'callToAction.cta.contribute', variants: 'primary'},
    {id: 2, icon: LuClipboardList, title: 'callToAction.cta.reports', variants: 'secondary'},
];

export default function CallToAction() {

    const { t } = useTranslation();

    return <React.Fragment>

        <section className='w-full light-pattern-bg shapedividers_com-8085'>

            <div className='w-full py-20 common-px flex flex-col items-center justify-center gap-10 bg-lightColor/80'>

                <QuranText 
                    className='
                        w-4xl max-w-full text-3xl/relaxed text-greenColor font-medium text-center 
                        max-[805px]:text-2xl/relaxed max-[530px]:text-xl/relaxed
                    '
                >
                    ﴿ {t('callToAction.quran')} ﴾
                </QuranText>

                <p className='w-5xl max-w-full text-3xl font-medium text-blackColor text-center opacity-65 max-[550px]:text-xl max-[720px]:w-full'>
                    {t('callToAction.slogan')}
                </p>

                <div 
                    className='
                        w-full flex items-center justify-center gap-5 max-[430px]:gap-2.5 
                        max-[500px]:grid max-[500px]:grid-cols-2 max-[425px]:grid-cols-1
                    '
                >

                    {ctaBtns.map(btn => <button key={btn.id}>
                        <RegularBtn title={btn.title} icon={btn.icon} variants={btn.variants} className='shadow-md'  />
                    </button>)}

                </div>

                {/* <div className='px-5 py-1 bg-blackColor/5 rounded-full flex items-center gap-2.5'>
                    <GoDotFill className='text-greenColor shrink-0' />
                    <p className='text-sm text-blackColor max-[540px]:text-xs'>
                        <NumbersText lang='ar' number={100} className='!text-lg max-[540px]:text-base' />% {t('callToAction.note')}
                    </p>
                </div> */}

                <div className='space-x-2.5 px-5 py-1 bg-blackColor/5 rounded-full'>
                    <GoDotFill className='shrink-0 inline-block text-greenColor' />
                    <span className='text-sm text-blackColor max-[540px]:text-xs'>
                        <NumbersText lang='ar' number={100} className='!text-lg max-[540px]:text-base' />% {t('callToAction.note')}
                    </span>
                </div>

            </div>

        </section>

    </React.Fragment>

}
