import React from 'react';
import { Scheherazade_New } from "next/font/google";

const scheherazadeTest = Scheherazade_New({
    subsets: ["arabic"],
    weight: ["400", "700"],
});

type QuranTextPros = {
    className?: string;
    children: React.ReactNode;
}

export default function QuranText({className = '', children}: QuranTextPros) {

    return <React.Fragment>

        <p className={`${scheherazadeTest.className} ${className}`}>
            {children}
        </p>

    </React.Fragment>

}
