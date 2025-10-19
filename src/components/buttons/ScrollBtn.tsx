"use client"

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { useScrollTop } from '@/hooks/useScrollTop';
import useScrollPosition from '@/hooks/useScrollPosition';
import { displayOpacity } from '@/animations/animations';

export default function ScrollBtn() {

    const {y} = useScrollPosition();
    const scrollTop = useScrollTop();

    return <React.Fragment>

        <AnimatePresence>

            {y > 200 && <motion.button 
                variants={displayOpacity}
                initial='hidden' animate='visible' exit={'exit'}
                className='
                    fixed bottom-5 start-5 z-30 w-10 h-10 flex items-center justify-center 
                    text-xl text-greenColor rounded-full bg-lightColor cursor-pointer duration-300
                    border border-greenColor hover:bg-greenColor hover:text-whiteColor
                '
                onClick={scrollTop}
            >
                <IoMdArrowRoundUp />
            </motion.button>}

        </AnimatePresence>

    </React.Fragment>

}
