import React from 'react';
import './cancelTimerMessage.scss';
import Button from './../Button';
import { Link } from 'react-router-dom';

interface CancelTimerMessageProps {
    onCancel: () => void;
}

const CancelTimerMessage: React.FC<CancelTimerMessageProps> = ({
    onCancel,
}) => {
    return (
        <div className="cancelTimerMessage">
            <div className="cancelTimerMessage__text">
                <h4>¿Estás seguro de querer salir?</h4>
                <p>
                    Si deseas salir, se cancelará el temporizador para esta
                    actividad
                </p>
            </div>
            <div className="cancelTimerMessage__buttons">
                <Link to="/dashboard">Si, deseo salir</Link>
                <Button
                    event={onCancel}
                    color="blue"
                    transparent={true}
                    text="Cancelar"
                />
            </div>
        </div>
    );
};

export default CancelTimerMessage;
