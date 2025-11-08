
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import LoadingInput from './LoadingInput';
import ErrorField from '@/components/inputs/ErrorField';
import Label from '@/components/inputs/Label';

// Animation variants
const opacityAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
};

type RegularInputProps = {
    id: string;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    error?: string;
    className?: string;
    disabled?: boolean;
    autoComplete?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    readOnly?: boolean;
    description?: string;
};

export default function RegularInput({
    id,
    label,
    placeholder = '',
    type = 'text',
    value = '',
    onChange,
    onBlur,
    description,
    error,
    className = '',
    disabled = false,
    autoComplete,
    maxLength,
    minLength,
    pattern,
    readOnly = false
}: RegularInputProps) {

    const [hasValue, setHasValue] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [passType, setPassType] = useState<string>(type === 'password' ? 'password' : type);

    useEffect(() => {
        setHasValue(value && value.trim() !== '' ? true : false);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(e.target.value.trim() !== '');
        if (onChange) onChange(e);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };

    const handlePasswordVisibility = () => {
        setPassType(prev => prev === 'password' ? 'text' : 'password');
    };

    return<React.Fragment>

        <div className={`relative flex flex-col gap-0.5 group ${className}`}>

            <Label id={id} label={label} description={description} />

            <input 
                id={id}
                type={passType || type}
                placeholder={placeholder}
                className={`
                    w-full h-10 px-2.5 ${type === 'password' ? 'pr-10' : ''} rounded-md border 
                    ${hasValue ? 'border-greenColor' : 'border-greenColor/25'}  font-medium
                    placeholder:text-blackColor placeholder:opacity-40 bg-whiteColor
                    outline-0 duration-300 focus:border-greenColor text-blackColor
                    ${error ? 'border-redColor' : ''} pe-12
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${readOnly ? 'bg-[var(--gray-color)]/50' : ''}
                    [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                `}
                value={value}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                readOnly={readOnly}
                autoComplete={autoComplete}
                maxLength={maxLength}
                minLength={minLength}
                pattern={pattern}
            />

            {/* Loading animation on focus */}
            <AnimatePresence>
                {(isFocused || hasValue) && type !== 'password' && (
                    <motion.div 
                        variants={opacityAnimation} 
                        initial="hidden" 
                        animate="visible" 
                        exit="exit"
                        className="absolute bottom-4.25 end-2.5"
                    >
                        <LoadingInput />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Password visibility toggle */}
            {type === 'password' && (
                <div 
                    onClick={handlePasswordVisibility} 
                    className={`
                        absolute right-2.5 bottom-0 text-2xl h-10 flex items-center duration-300
                        ${hasValue ? 
                            'text-[var(--blue-color)]' : (isFocused ? 'text-[var(--blue-color)]' : 'text-[var(--secondary-color)]/40')
                        } 
                        cursor-pointer
                    `}
                >
                    {passType === 'password' ? 
                        <motion.button 
                            key="show" 
                            type="button" 
                            className="cursor-pointer" 
                            variants={opacityAnimation} 
                            initial="hidden" 
                            animate="visible" 
                        >
                            <VscEye />
                        </motion.button> : 
                        <motion.button 
                            key="hide" 
                            className="cursor-pointer" 
                            type="button"
                            variants={opacityAnimation} 
                            initial="hidden" 
                            animate="visible" 
                        >
                            <VscEyeClosed />
                        </motion.button>
                    }
                </div>
            )}
        </div>

        {error && <ErrorField error={error} />}

    </React.Fragment>

}
