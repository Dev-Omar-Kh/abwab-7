import React from 'react';
import { useTranslation } from 'react-i18next';

type MainTitleProps = {
    title: string;
    textColor?: string
    lineColor?: string
    miniBottom?: boolean
};

export default function MainTitle({ title, textColor = 'var(--blackColor)', lineColor = 'var(--greenColor)', miniBottom = true }: MainTitleProps) {

    const {t} = useTranslation();

    const waveWidth = Math.max(title.length * 12, 80);
    const padding = 8;

    return <React.Fragment>

        <div className="relative inline-block">

            <h2 className="relative px-7.5 text-center text-4xl font-semibold text-blackColor z-10 max-[375px]:text-2xl" style={{color: textColor}}>{t(title)}</h2>

            <svg
                className={`absolute start-0 ${miniBottom ? '-bottom-5' : '-bottom-6'} w-full h-4 z-0`}
                viewBox={`0 0 ${waveWidth} 10`}
                preserveAspectRatio="none"
            >
                <path
                d={`M${padding},5 Q${waveWidth / 4},0 ${waveWidth / 2},5 T${waveWidth - padding},5`}
                stroke={lineColor}
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>

        </div>

    </React.Fragment>

}
