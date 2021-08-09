import React, { useEffect } from 'react';
import chronotask_black_logo from './../../images/chronotask-black-logo.png';
import Spinner from './../../components/Spinner';
import { useActions } from '../../hooks/use-action';
import Toast from './../../components/Toast';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import Button from './../../components/Button';
import { useLocation, Redirect } from 'react-router-dom';

const ConfirmEmail: React.FC = () => {
    const auth = useTypedSelector((state) => state.auth);
    const location = useLocation();
    const token = location.pathname.split('/').splice(-1)[0];

    const { confirmEmail } = useActions();

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
                            {auth.forgotPasswordEmailHasBeenSent && (
                                <Toast
                                    info={{
                                        message: `Se te ha enviado un email para recuperar tu contraseña`,
                                        type: 'success',
                                    }}
                                />
                            )}
                            <div className="resetPassword__content__form__confirmEmail">
                                <p>
                                    Da click en el botón para activar tu cuenta
                                </p>
                                <Button
                                    text="Confirma tu email"
                                    color="blue"
                                    event={() => confirmEmail(token)}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ConfirmEmail;
