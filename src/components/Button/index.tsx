import React from 'react';
import './button.scss';

interface ButtonProps {
    text: string;
    color: string;
    customStyles?: {};
    transparent?: boolean;
    event?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    color,
    event,
    customStyles,
    transparent,
}) => {
    return (
        <button
            className={`button button--${color} ${
                transparent ? `button--${color}--transparent` : ''
            }`}
            onClick={event}
            style={customStyles}
        >
            {text}
        </button>
    );
};

export default Button;
