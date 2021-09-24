import React from 'react';
import './display.scss';

interface DisplayProps {
    time: {
        ms: number;
        s: number;
        m: number;
        h: number;
    };
}

const Display: React.FC<DisplayProps> = ({ time: { ms, s, m, h } }) => {
    return (
        <div className="display">
            <span>{h >= 10 ? h : `0${h}`}:</span>
            <span>{m >= 10 ? m : `0${m}`}:</span>
            <span>{s >= 10 ? s : `0${s}`}:</span>
            <span>{ms >= 10 ? ms : `0${ms}`}</span>
        </div>
    );
};

export default Display;
