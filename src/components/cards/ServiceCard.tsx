import { useElementWidth } from '@/hooks/useElementWidth';
import React, { useEffect } from 'react';

type ServiceCardProps = {
    className?: string;
    style?: React.CSSProperties;
    setCardHeight: (height: number) => void;
}

export default function ServiceCard({className, style, setCardHeight}: ServiceCardProps) {

    const { ref, width } = useElementWidth();

    useEffect(() => {

        setCardHeight(width)

    }, [width, setCardHeight])
    

    return <React.Fragment>

        <div 
            ref={ref}
            className={`
                relative p-5 rounded-lg bg-lightColor
                hexa-card shrink-0 ${className}
            `}
            style={{height: width, ...style}}
        >
            
        </div>

    </React.Fragment>

}
