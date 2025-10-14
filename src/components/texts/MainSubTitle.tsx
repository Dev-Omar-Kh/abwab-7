import React from 'react';
import { useTranslation } from 'react-i18next';

type MainSubTitleProps = {
    subTitle: string;
    className?: string;
}

export default function MainSubTitle({subTitle, className}: MainSubTitleProps) {

    const { t } = useTranslation();

    return <React.Fragment>

        <p className={`w-2xl max-w-full text-lg text-center text-blackColor/60 ${className}`}>{t(subTitle)}</p>

    </React.Fragment>

}
