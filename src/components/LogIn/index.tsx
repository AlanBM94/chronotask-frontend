import React, { useState } from 'react';
import Input from './../Input';
import Button from './../Button';
import { useActions } from './../../hooks/use-action';
import { useTypedSelector } from './../../hooks/use-typed-selector';

interface ILogIn {
    changeFormHandler: (formType: string) => void;
}

const LogIn: React.FC<ILogIn> = ({ changeFormHandler }) => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [passwordType, setPasswordType] = useState('password');
    const { logIn } = useActions();
    const auth = useTypedSelector((state) => state.auth);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
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
        logIn(formState);
    };

    return !auth.loading ? (
        <form action="#" onSubmit={onSubmitHandler}>
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formState.email}
                icon="fas fa-envelope"
                onChangeHandler={onChangeHandler}
            />
            <Input
                name="password"
                type={passwordType}
                placeholder="Contraseña"
                value={formState.password}
                icon="fas fa-lock"
                onChangeHandler={onChangeHandler}
            />
            <div className="authentication__showPassword">
                <input type="checkbox" onClick={showPasswordHandler} />
                <p>Mostrar Contraseña</p>
            </div>
            <Button text="Iniciar sesión" color="blue" />
            <div className="authentication__bottom">
                <p>Aún no tienes una cuenta?</p>
                <span onClick={() => changeFormHandler('signup')}>
                    Registrarse
                </span>
            </div>
        </form>
    ) : (
        <div></div>
    );
};

export default LogIn;
