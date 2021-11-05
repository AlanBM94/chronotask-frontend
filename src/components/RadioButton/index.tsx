import React, { ChangeEvent } from 'react';
import './radioButton.scss';

export type RadioChangeEvent = ChangeEvent<{ value: string }>;

interface RadioButtonProps {
    label: string;
    value: string;
    name: string;
    checked?: boolean;
    onChange: (event: RadioChangeEvent) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    value,
    name,
    onChange,
    checked,
}) => {
    return (
        <div className="radioButton">
            <div
                className={`radioButton__circle ${
                    checked ? 'radioButton__circle--active' : ''
                }`}
            >
                <span />
            </div>
            <div className="radioButton__input">
                <label htmlFor={value}>{label}</label>

                <input
                    type="radio"
                    id={value}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default React.memo(RadioButton);
