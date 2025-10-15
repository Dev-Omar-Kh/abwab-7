import React from 'react';

type BurgerBtnProps = {
    isMenuOpen: boolean;
}

export default function BurgerBtn({isMenuOpen}: BurgerBtnProps) {

    return <React.Fragment>

        <span
            className={`
                w-8 h-1 rounded-full transition-all duration-300 bg-blackColor
                ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}
            `}
        />

        <span
            className={`
                w-8 h-1 rounded-full transition-all duration-300 bg-blackColor
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
            `}
        />

        <span
            className={`
                w-8 h-1 rounded-full transition-all duration-300 bg-blackColor
                ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}
            `}
        />

    </React.Fragment>

}
