import React, { useState } from 'react';
import Logo from './../../images/logo';
import Login from '../../components/LogIn';
import SignUp from '../../components/SignUp';
import './auth.scss';
import background from './../../images/background.jpg';

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
        <div className="authentication">
            <div className="authentication__image">
                <img src={background} alt="background" />
            </div>

            <div className="authentication__form">
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
