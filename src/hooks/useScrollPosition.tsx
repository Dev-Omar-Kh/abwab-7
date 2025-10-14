"use client";
import { useState, useLayoutEffect } from "react";

type Pos = { x: number; y: number };

const useScrollPosition = () => {

    const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });

    useLayoutEffect(() => {

        if (typeof window === "undefined") return;

        const getPos = (): Pos => ({
            x: window.pageXOffset ?? window.scrollX ?? 0,
            y: window.pageYOffset ?? window.scrollY ?? 0,
        });

        const onScroll = () => setPos(getPos());

        setPos(getPos());

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    return pos;

};

export default useScrollPosition;
