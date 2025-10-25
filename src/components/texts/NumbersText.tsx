import { useLocalizedNumber } from '@/hooks/useLocalizedNumber';
import { Tajawal } from 'next/font/google';
import React from 'react';

const tajawal = Tajawal({
    subsets: ['arabic', 'latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});

type NumbersTextProps = {
    number: number;
    lang: 'ar' | 'en';
    className?: string;
    withSeparator?: boolean
};

export default function NumbersText({lang, number, className, withSeparator = true}: NumbersTextProps) {

    const { formatNumber } = useLocalizedNumber(lang);

    return <React.Fragment>

        <span className={`${tajawal.className} ${className}`}>
            {formatNumber(number, withSeparator)}
        </span>

    </React.Fragment>

}
