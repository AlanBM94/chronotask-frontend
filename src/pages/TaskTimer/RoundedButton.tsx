import React from 'react';
import './taskTimer.scss';

interface RoundedButtonProps {
    onClick: () => void;
    disabled?: boolean;
    active?: boolean;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
    children,
    onClick,
    disabled,
    active,
}) => {
    const onClickHandler = () => {
        onClick();
    };

    const taskColor = 'Entretenimiento';

    return (
        <button
            className={`roundedButton ${
                active
                    ? `roundedButton--active roundedButton--active--${taskColor}`
                    : ''
            }`}
            disabled={disabled}
            onClick={() => onClickHandler()}
        >
            {children}
        </button>
    );
};

export default RoundedButton;
