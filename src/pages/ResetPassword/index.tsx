import React from 'react';
import './resetPassword.scss';
import chronotask_black_logo from './../../images/chronotask-black-logo.png';
import ResetPasswordForm from './../../components/ResetPasswordForm';
import Toast from './../../components/Toast';
import Spinner from './../../components/Spinner';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { Redirect } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const auth = useTypedSelector((state) => state.auth);

    if (auth.user) {
        return (
            <Redirect
                to={{
                    pathname: '/dashboard',
                }}
            />
        );
    }

    return (
        <div className="resetPassword">
            <div className="resetPassword__content">
                {auth.loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="resetPassword__content__logo">
                            <img src={chronotask_black_logo} alt="logo" />
                        </div>
                        <div className="resetPassword__content__form">
                            {auth.error && (
                                <Toast
                                    info={{
                                        message: auth.error,
                                        type: 'error',
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
                            <ResetPasswordForm />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
