import React from 'react';
import chronotask_black_logo from './../../images/chronotask-black-logo.png';
import Spinner from './../../components/Spinner';
import Toast from './../../components/Toast';
import ForgotPasswordForm from './../../components/ForgotPasswordForm';
import { useTypedSelector } from './../../hooks/use-typed-selector';

const ForgotPassword: React.FC = () => {
    const auth = useTypedSelector((state) => state.auth);

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
                            {auth.forgotPasswordEmailHasBeenSent && (
                                <Toast
                                    info={{
                                        message: `Se te ha enviado un email para recuperar tu contraseña`,
                                        type: 'success',
                                    }}
                                />
                            )}
                            <ForgotPasswordForm />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
