"use client"

import React from 'react'

type LabelProps = {
    id: string;
    label: string;
    description?: string;
}

export default function Label({ id, label, description }: LabelProps) {

    return <React.Fragment>
    {id !== '' 
        ?<label htmlFor={id}>
            <p className='text-lg font-medium text-[var(--secondary-color)] opacity-80'>{label}</p>
            {description && <p className='text-sm text-[var(--secondary-color)] opacity-80'>{description}</p>}
        </label>
        :<div>
            <p className='text-lg font-medium text-[var(--secondary-color)]'>{label}</p>
            {description && <p className='text-sm text-[var(--secondary-color)] opacity-80'>{description}</p>}
        </div>
    }

    </React.Fragment>

}
