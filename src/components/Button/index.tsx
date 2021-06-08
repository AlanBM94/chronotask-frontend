import React from 'react';
import './button.scss';

interface ButtonProps {
    text: string;
    color: string;
    customStyles?: {};
    event?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    color,
    event,
    customStyles,
}) => {
    return (
        <button
            className={`button button--${color}`}
            onClick={event}
            style={customStyles}
        >
            {text}
        </button>
    );
};

export default Button;
