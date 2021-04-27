import React from 'react';
import './button.scss';

interface ButtonProps {
    text: string;
    color: string;
    event?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, event }) => {
    return (
        <button className={`button button--${color}`} onClick={event}>
            {text}
        </button>
    );
};

export default Button;
