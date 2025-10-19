"use client";
import { useState, useEffect, useRef } from "react";

export const useElementWidth = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {

        if (!ref.current) return;

        const element = ref.current;
        const updateWidth = () => setWidth(element.offsetWidth);

        updateWidth();

        const resizeObserver = new ResizeObserver(() => {
            updateWidth();
        });

        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };

    }, []);

    return { ref, width };

};
