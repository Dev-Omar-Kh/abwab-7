import React, { useState, useRef, ReactNode } from 'react';


type Trigger = {
    label: number | string | ReactNode;
    value: number;
}
type TriggerBtnProps = {
    triggers: Trigger[];
    onTriggerChange: (value: number) => void;
    defaultValue?: number;
    className?: string;
}

export default function TriggerBtn({triggers, onTriggerChange, defaultValue = triggers[0]?.value || 1, className = ''}: TriggerBtnProps) {


    const [activeValue, setActiveValue] = useState<number>(defaultValue);
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);


    const handleTriggerClick = (value: number) => {
        setActiveValue(value);
        onTriggerChange(value);
    };


    return <React.Fragment>

        <div 
            ref={containerRef}
            className={`w-fit max-w-full overflow-auto scroll-hidden flex items-center p-2.5 rounded-xl bg-lightColor/75 relative ${className}`}
        >

            {triggers.map((trigger, idx) => (
                <button 
                    key={idx}
                    ref={(el) => { buttonsRef.current[idx] = el; }}
                    onClick={() => handleTriggerClick(trigger.value)}
                    className={`
                        px-10 py-1.5 text-xl rounded-lg font-semibold cursor-pointer relative z-10 duration-300 max-[400px]:px-5
                        ${activeValue === trigger.value ? 'text-whiteColor bg-greenColor' : 'text-blackColor/80 bg-transparent'}
                    `}
                >
                    {trigger.label}
                </button>
            ))}

        </div>

    </React.Fragment>
}