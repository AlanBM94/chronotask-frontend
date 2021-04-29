import React, { useState } from 'react';
import Input from './../Input';
import Button from './../Button';
import './resetPasswordForm.scss';

const ResetPasswordForm: React.FC = () => {
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const showPasswordHandler = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    };

    return (
        <form action="#" className="resetPasswordForm">
            <p>Recupera tu contraseña</p>
            <Input
                name="password"
                placeholder="Nueva contraseña"
                icon="fas fa-lock"
                type={passwordType}
                color="white"
                value={password}
                onChangeHandler={onChangeHandler}
            />
            <div className="authentication__showPassword authentication__showPassword--black">
                <input type="checkbox" onClick={showPasswordHandler} />
                <p>Mostrar Contraseña</p>
            </div>
            <Button
                text="Guardar contraseña"
                color="blue"
                event={() => alert('Se ha guardado la contraseña')}
            />
        </form>
    );
};

export default ResetPasswordForm;
