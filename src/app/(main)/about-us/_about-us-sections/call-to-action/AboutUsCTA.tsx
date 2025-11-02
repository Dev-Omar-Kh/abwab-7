import React from 'react'
import MainTitle from '@/components/texts/MainTitle'
import QuranText from '@/components/texts/QuranText'
import { useTranslation } from 'react-i18next'
import RegularBtn from '@/components/buttons/RegularBtn';
import { RegularBtnProps } from '@/types/buttons';
import { LuClipboardList, LuHandshake } from 'react-icons/lu';

const ctaBtns: RegularBtnProps[] = [
    {id: 1, icon: LuHandshake, title: 'callToAction.cta.contribute', variants: 'primary'},
    {id: 2, icon: LuClipboardList, title: 'callToAction.cta.reports', variants: 'secondary'},
];

export default function AboutUsCTA() {

    const { t } = useTranslation();

    return <React.Fragment>
    <section className='w-full light-pattern-bg shapedividers_com-393'>
        <div className='py-20 common-px space-y-10 bg-lightColor/80'>

            <div className='w-full flex flex-col items-center justify-center gap-7.5 !mb-20'>
                <MainTitle title='aboutUs.cta.title' miniBottom={false} />
                {/* <MainSubTitle subTitle="mission.slogan" /> */}
            </div>

            <div className='flex flex-col items-center gap-10'>

                {/* <QuranText>{t('aboutUs.cta.quran')}</QuranText> */}
                <QuranText 
                    className='
                        w-4xl max-w-full text-3xl/relaxed text-greenColor font-medium text-center 
                        max-[805px]:text-2xl/relaxed max-[530px]:text-xl/relaxed
                    '
                >
                    ﴿ {t('aboutUs.cta.quran')} ﴾
                </QuranText>

                <p className='w-5xl max-w-full text-3xl font-medium text-blackColor text-center opacity-65 max-[550px]:text-xl max-[720px]:w-full'>
                    {t('aboutUs.cta.slogan')}
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

            </div>

        </div>
    </section>
    </React.Fragment>

}
