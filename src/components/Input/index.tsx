import React, { useState, useEffect } from 'react';
import './input.scss';

interface InputProps {
    name: string;
    placeholder: string;
    icon: string;
    value: string;
    type: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    name,
    placeholder,
    icon,
    type,
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
        <div className={`input ${isActive ? 'input--on' : 'input--of'}`}>
            <div
                className={`input__icon ${
                    isActive ? 'input__icon--on' : 'input__icon--of'
                }`}
            >
                <i className={icon}></i>
            </div>
            <div className="input__element">
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
