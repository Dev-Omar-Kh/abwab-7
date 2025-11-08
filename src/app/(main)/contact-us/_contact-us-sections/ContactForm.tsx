"use client"

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RegularBtn from '@/components/buttons/RegularBtn';
import dynamic from 'next/dynamic';
// import RegularInput from '@/components/inputs/RegularInput';
// import TextareaInput from '@/components/inputs/TextareaInput';

const RegularInput = dynamic(() => import('@/components/inputs/RegularInput'), {
    ssr: false,
    loading: () => <div className="h-19 bg-whiteColor border-greenColor/25 animate-pulse rounded-lg"></div>
});

const TextareaInput = dynamic(() => import('@/components/inputs/TextareaInput'), {
    ssr: false,
    loading: () => <div className="h-37 bg-whiteColor border-greenColor/25 animate-pulse rounded-lg"></div>
});

export default function ContactForm({className}: {className?: string}) {

    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    return <React.Fragment>

        <div className={`w-full min-h-125 p-5 space-y-5 rounded-xl light-pattern-bg bg-lightColor/75 ${className}`}>

            <h3 className='text-2xl font-semibold text-greenColor max-[550px]:text-xl'>{t('contactUs.form.title')}</h3>

            <form className='grid grid-cols-1 gap-2.5'>

                <RegularInput 
                    id={'name'} 
                    label={t('contactUs.form.nameField.label')} 
                    placeholder={t('contactUs.form.nameField.placeholder')} 
                    type='text' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <RegularInput 
                    id={'phone'} 
                    label={t('contactUs.form.phoneField.label')} 
                    placeholder={t('contactUs.form.phoneField.placeholder')} 
                    type='text' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <div className='col-span-1'>

                    <TextareaInput 
                        id={'description'} 
                        label={t('contactUs.form.descriptionField.label')} 
                        placeholder={t('contactUs.form.descriptionField.placeholder')}
                        value={description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                    />

                </div>

                <button>
                    <RegularBtn title={t('contactUs.form.submit')} variants='primary' />
                </button>

            </form>

        </div>

    </React.Fragment>

}
