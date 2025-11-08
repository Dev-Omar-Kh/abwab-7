import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingInput from './LoadingInput';
import ErrorField from './ErrorField';
import Label from './Label';

// Animation variants
const opacityAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
};

type TextareaInputProps = {
    id: string;
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    isRequired?: boolean;
    error?: string;
    className?: string;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    readOnly?: boolean;
    description?: string;
    rows?: number;
    cols?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
};

export default function TextareaInput({
    id,
    label,
    placeholder = '',
    value = '',
    onChange,
    onBlur,
    description,
    error,
    className = '',
    disabled = false,
    maxLength,
    minLength,
    readOnly = false,
    rows = 4,
    cols,
}: TextareaInputProps) {

    const [hasValue, setHasValue] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setHasValue(value && value.trim() !== '' ? true : false);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHasValue(e.target.value.trim() !== '');
        if (onChange) onChange(e);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };

    return <React.Fragment>

        <div className={`relative flex flex-col gap-0.5 group ${className}`}>

            <Label id={id} label={label} description={description} />

            <textarea 
                id={id}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                className={`
                    w-full px-2.5 py-2.5 rounded-md border min-h-28 max-h-40 overflow-y-auto scrollbar-hide
                    ${hasValue ? 'border-greenColor' : 'border-greenColor/25'} 
                    placeholder:text-blackColor placeholder:opacity-40 bg-whiteColor
                    outline-0 duration-300 focus:border-greenColor font-medium text-blackColor
                    ${error ? 'border-redColor' : ''}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    resize-none pe-12
                `}
                value={value}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
                minLength={minLength}
            />

            {/* Loading animation on focus */}
            <AnimatePresence>
                {(isFocused || hasValue) && (
                    <motion.div 
                        variants={opacityAnimation} 
                        initial="hidden" 
                        animate="visible" 
                        exit="exit"
                        className="absolute bottom-2.5 right-2.5"
                    >
                        <LoadingInput />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

        {error && <ErrorField error={error} />}

    </React.Fragment>

}
