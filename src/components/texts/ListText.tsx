import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';

type ListTextProps = {
    text: string | ReactNode;
    icon: IconType;
    className?: string;
    iconStyle?: string;
    textStyle?: string;
}

export default function ListText({icon: ICon, text, className = '', iconStyle = '', textStyle = ''}: ListTextProps) {

    const { t } = useTranslation();

    return <React.Fragment>

        <div className={`space-x-2.5 ${className}`}>
            <ICon className={`shrink-0 inline-block text-xl text-greenColor ${iconStyle}`} />
            <span className={`text-lg text-blackColor ${textStyle}`}>{typeof(text) === "string" ? t(text) : text}</span>
        </div>

    </React.Fragment>

}
