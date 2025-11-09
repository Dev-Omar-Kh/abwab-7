"use client"

import React from 'react'

type LabelProps = {
    id: string;
    label: string;
    error?: string;
    description?: string;
}

export default function Label({ id, label, description, error }: LabelProps) {

    return <React.Fragment>
    {id !== '' 
        ?<label htmlFor={id} className='flex flex-wrap items-end justify-between gap-2.5'>
            <div>
                <p className='text-lg font-medium text-[var(--secondary-color)] opacity-80'>{label}</p>
                {description && <p className='text-sm text-[var(--secondary-color)] opacity-80'>{description}</p>}
            </div>
            {error && <p className='text-xs text-redColor'>{error} *</p>}
        </label>
        :<div>
            <p className='text-lg font-medium text-[var(--secondary-color)]'>{label}</p>
            {description && <p className='text-sm text-[var(--secondary-color)] opacity-80'>{description}</p>}
        </div>
    }

    </React.Fragment>

}
