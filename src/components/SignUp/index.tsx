import React, { useState } from 'react';
import Input from './../Input';
import Button from './../Button';
import { useActions } from '../../hooks/use-action';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import useRegister from '../../hooks/useRegisterForm';

interface ISignUp {
    changeFormHandler: (formType: string) => void;
}

const SignUp: React.FC<ISignUp> = ({ changeFormHandler }) => {
    const { signUp } = useActions();
    const auth = useTypedSelector((state) => state.auth);
    const {
        name,
        email,
        password,
        passwordInputType,
        showPasswordHandler,
        onNameChangeHandler,
        onEmailChangeHandler,
        onPasswordChangeHandler,
        onSubmitHandler,
    } = useRegister(signUp);

    return !auth.loading ? (
        <form action="#" onSubmit={onSubmitHandler}>
            <Input
                name="name"
                placeholder="Usuario"
                type="text"
                value={name}
                icon="fas fa-user"
                onChangeHandler={onNameChangeHandler}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                icon="fas fa-envelope"
                onChangeHandler={onEmailChangeHandler}
            />
            <Input
                name="password"
                type={passwordInputType}
                placeholder="Contraseña"
                value={password}
                icon="fas fa-lock"
                onChangeHandler={onPasswordChangeHandler}
            />
            <div className="authentication__showPassword">
                <input type="checkbox" onClick={showPasswordHandler} />
                <p>Mostrar Contraseña</p>
            </div>
            <Button
                text="Registrar"
                color="blue"
                customStyles={{ width: '100%' }}
            />
            <div className="authentication__bottom">
                <p>Ya tienes una cuenta?</p>
                <span onClick={() => changeFormHandler('login')}>
                    Iniciar sesión
                </span>
            </div>
        </form>
    ) : (
        <div></div>
    );
};

export default SignUp;
