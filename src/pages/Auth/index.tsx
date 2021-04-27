import React, { useState } from 'react';
import Logo from './../../images/logo';
import Login from '../../components/LogIn';
import SignUp from '../../components/SignUp';
import './auth.scss';

const Authentication = () => {
    const [formType, setFormType] = useState('signup');

    const changeFormHandler = () => {
        if (formType === 'signup') {
            setFormType('login');
        } else {
            setFormType('signup');
        }
    };

    return (
        <div className="auth">
            <div className="auth__image">
                <img src="./../../images/background.jpg" alt="logo" />
            </div>

            <div className="auth__content">
                <Logo />
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
