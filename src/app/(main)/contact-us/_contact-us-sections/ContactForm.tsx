"use client"

import React from 'react';
import { useTranslation } from 'react-i18next';
import RegularBtn from '@/components/buttons/RegularBtn';
import dynamic from 'next/dynamic';
import { useFormik } from 'formik';
import { ContactSchema } from '@/validation/contactUs';

const RegularInput = dynamic(() => import('@/components/inputs/RegularInput'), {
    ssr: false,
    loading: () => <div className="h-19 bg-whiteColor border-greenColor/25 animate-pulse rounded-lg"></div>
});
const TextareaInput = dynamic(() => import('@/components/inputs/TextareaInput'), {
    ssr: false,
    loading: () => <div className="h-37 bg-whiteColor border-greenColor/25 animate-pulse rounded-lg"></div>
});

type ValuesType = {
    name: string;
    phone: string;
    message: string
}

const values: ValuesType = {
    name: "",
    phone: "",
    message: ""
}

export default function ContactForm({className}: {className?: string}) {

    const { t } = useTranslation();

    const onSubmit = (values: ValuesType) => {
        console.log('values :>> ', values);
    };

    const formikObj = useFormik({
        initialValues: values,
        onSubmit: onSubmit,
        validationSchema: ContactSchema,
    });

    const getError = (name: keyof ValuesType) => {
        const isTouched = formikObj.touched[name];
        const error = formikObj.errors[name];
        if (!isTouched && !formikObj.submitCount) return undefined;
        return error ? t(error) : undefined;
    };

    return <React.Fragment>

        <div className={`w-full min-h-125 p-5 space-y-5 rounded-xl light-pattern-bg bg-lightColor/75 ${className}`}>

            <h3 className='text-2xl font-semibold text-greenColor max-[550px]:text-xl'>{t('contactUs.form.title')}</h3>

            <form className='grid grid-cols-1 gap-2.5' onSubmit={formikObj.handleSubmit}>

                <RegularInput 
                    id={'name'} type='text' 
                    label={t('contactUs.form.nameField.label')} 
                    placeholder={t('contactUs.form.nameField.placeholder')} 
                    {...formikObj.getFieldProps('name')}
                    error={getError('name')}

                />

                <RegularInput 
                    id={'phone'} 
                    label={t('contactUs.form.phoneField.label')} 
                    placeholder={t('contactUs.form.phoneField.placeholder')} 
                    type='text' 
                    {...formikObj.getFieldProps('phone')}
                    error={getError('phone')}
                />

                <div className='col-span-1'>

                    <TextareaInput 
                        id={'message'} 
                        label={t('contactUs.form.descriptionField.label')} 
                        placeholder={t('contactUs.form.descriptionField.placeholder')}
                        {...formikObj.getFieldProps('message')}
                        error={getError('message')}
                    />

                </div>

                <button type='submit'>
                    <RegularBtn title={t('contactUs.form.submit')} variants='primary' />
                </button>

            </form>

        </div>

    </React.Fragment>

}
