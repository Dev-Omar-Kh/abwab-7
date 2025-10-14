import React from 'react';
import { useTranslation } from 'react-i18next';

type MainTitleProps = {
    title: string;
};

export default function MainTitle({ title }: MainTitleProps) {

    const {t} = useTranslation();

    const waveWidth = Math.max(title.length * 12, 80);
    const padding = 8;

    return <React.Fragment>

        <div className="relative inline-block">

            <h2 className="relative px-7.5 text-4xl font-semibold text-blackColor z-10">{t(title)}</h2>

            <svg
                className="absolute start-0 -bottom-5 w-full h-4 z-0"
                viewBox={`0 0 ${waveWidth} 10`}
                preserveAspectRatio="none"
            >
                <path
                d={`M${padding},5 Q${waveWidth / 4},0 ${waveWidth / 2},5 T${waveWidth - padding},5`}
                stroke="var(--greenColor)"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>

        </div>

    </React.Fragment>

}
