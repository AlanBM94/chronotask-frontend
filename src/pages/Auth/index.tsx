import React, { useState } from 'react';
import Logo from '../../images/logo';
import Login from '../../components/LogIn';
import SignUp from '../../components/SignUp';
import background from './../../images/background.jpg';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import Spinner from './../../components/Spinner';
import Toast from './../../components/Toast';
import { Redirect } from 'react-router-dom';

import './auth.scss';

const Authentication = () => {
    const [formType, setFormType] = useState('signup');
    const auth = useTypedSelector((state) => state.auth);

    const changeFormHandler = () => {
        if (formType === 'signup') {
            setFormType('login');
        } else {
            setFormType('signup');
        }
    };

    if (localStorage.getItem('chronotask-token')) {
        return (
            <Redirect
                to={{
                    pathname: '/dashboard',
                }}
            />
        );
    }

    return (
        <div className="authentication">
            <div className="authentication__image">
                <img src={background} alt="background" />
            </div>
            {auth.error && (
                <Toast info={{ message: auth.error, type: 'error' }} />
            )}

            {auth.message && (
                <Toast
                    info={{
                        message: auth.message,
                        type: 'success',
                    }}
                />
            )}

            {auth.user && (
                <Toast
                    info={{
                        message: `Bienvenido`,
                        type: 'success',
                    }}
                />
            )}

            <div className="authentication__form">
                {auth.loading ? <Spinner /> : <Logo />}

                {formType === 'signup' && (
                    <SignUp changeFormHandler={changeFormHandler} />
                )}
                {formType === 'login' && (
                    <Login changeFormHandler={changeFormHandler} />
                )}
            </div>
        </div>
    );
};

export default Authentication;
