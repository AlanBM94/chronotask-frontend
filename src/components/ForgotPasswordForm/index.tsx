import React, { useState } from 'react';
import { useActions } from '../../hooks/use-action';
import Input from './../Input';
import Button from './../Button';
import './forgotPasswordForm.scss';

const ForgotPasswordForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const { forgotPassword } = useActions();

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        forgotPassword(email, () => setEmail(''));
    };

    return (
        <form
            action="#"
            className="resetPasswordForm"
            onSubmit={onSubmitHandler}
        >
            <p>Olvidaste tu contraseña?</p>
            <Input
                name="password"
                placeholder="Ingresa ru correo electrónico"
                icon="fas fa-lock"
                type="email"
                color="white"
                value={email}
                onChangeHandler={onChangeHandler}
            />

            <Button
                text="Enviar correo"
                color="blue"
                customStyles={{ marginTop: '20px' }}
            />
        </form>
    );
};

export default ForgotPasswordForm;
