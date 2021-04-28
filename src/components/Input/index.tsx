import React, { useState, useEffect } from 'react';
import './input.scss';

interface InputProps {
    name: string;
    placeholder: string;
    icon: string;
    value: string;
    type: string;
    color?: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    name,
    placeholder,
    icon,
    type,
    color,
    value,
    onChangeHandler,
}) => {
    const [isActive, setIsActive] = useState(false);

    const onFocusHandler = () => {
        setIsActive(true);
    };

    const onBlurHandler = () => {
        setIsActive(false);
    };

    return (
        <div
            className={`input input--${color} ${
                isActive ? 'input--on' : 'input--of'
            }`}
        >
            <div
                className={`input__icon input__icon--${color} ${
                    isActive ? 'input__icon--on' : 'input__icon--of'
                }`}
            >
                <i className={icon}></i>
            </div>
            <div className={`input__element input__element--${color}`}>
                <input
                    autoComplete="off"
                    type={type}
                    name={name}
                    value={value}
                    required
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    );
};

export default Input;
