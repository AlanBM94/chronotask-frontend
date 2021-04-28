import React from 'react';
import './resetPassword.scss';
import chronotask_black_logo from './../../images/chronotask-black-logo.png';
import ResetPasswordForm from './../../components/ResetPasswordForm';

const ResetPassword: React.FC = () => {
    return (
        <div className="resetPassword">
            <div className="resetPassword__content">
                <div className="resetPassword__content__logo">
                    <img src={chronotask_black_logo} alt="logo" />
                </div>
                <div className="resetPassword__content__form">
                    <ResetPasswordForm />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
