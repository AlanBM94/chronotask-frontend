import React, { useState } from 'react';
import { useActions } from './../../hooks/use-action';
import { useTypedSelector } from './../../hooks/use-typed-selector';
import { useRouteMatch } from 'react-router';
import Input from './../Input';
import Button from './../Button';
import './resetPasswordForm.scss';

const ResetPasswordForm: React.FC = () => {
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const match = useRouteMatch();
    const { resetPassword } = useActions();

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

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const token = match.url.split('/').slice(-1)[0];
        if (token) {
            resetPassword({ password, token });
        }
    };

    return (
        <form
            action="#"
            className="resetPasswordForm"
            onSubmit={onSubmitHandler}
        >
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
            <Button text="Guardar contraseña" color="blue" />
        </form>
    );
};

export default ResetPasswordForm;
