import React from 'react';

export default function LoadingInput() {

    return <React.Fragment>

        <div className="flex flex-row gap-1">

            <div className="w-[7px] h-[7px] rounded-full bg-greenColor shrink-0 animate-bounce [animation-delay:-.0s]"></div>

            <div className="w-[7px] h-[7px] rounded-full bg-greenColor shrink-0 animate-bounce [animation-delay:-.3s]"></div>

            <div className="w-[7px] h-[7px] rounded-full bg-greenColor shrink-0 animate-bounce [animation-delay:-.5s]"></div>

        </div>

    </React.Fragment>

}