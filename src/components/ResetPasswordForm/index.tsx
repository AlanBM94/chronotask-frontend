import React, { useState } from 'react';
import Input from './../Input';
import Button from './../Button';
import './resetPasswordForm.scss';

const ResetPasswordForm: React.FC = () => {
    const [password, setPassword] = useState('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <form action="#" className="resetPasswordForm">
            <p>Recupera tu contraseña</p>
            <Input
                name="password"
                placeholder="Nueva contraseña"
                icon="fas fa-lock"
                type="password"
                color="white"
                value={password}
                onChangeHandler={onChangeHandler}
            />
            <Button
                text="Guardar contraseña"
                color="blue"
                event={() => alert('Se ha guardado la contraseña')}
            />
        </form>
    );
};

export default ResetPasswordForm;
