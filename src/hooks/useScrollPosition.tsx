import { useState, useEffect } from 'react';

const useScrollPosition = () => {

    const [scroll, setScroll] = useState({
        x: typeof window !== 'undefined' ? window.scrollX : 0,
        y: typeof window !== 'undefined' ? window.scrollY : 0,
    });

    useEffect(() => {

        const handleScroll = () => {
            setScroll({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return scroll;

};

export default useScrollPosition;
