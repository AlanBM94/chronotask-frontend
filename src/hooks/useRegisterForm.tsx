import React, { useState, useCallback } from 'react';

interface signUpCallback {
    (user: { name: string; email: string; password: string }): void;
}

const useRegisterForm = (signUpCallback: signUpCallback) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInputType, setPasswordInputType] = useState('password');

    const onNameChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
        },
        [name, setName]
    );

    const onEmailChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
        },
        [email, setEmail]
    );

    const onPasswordChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
        },
        [password, setPassword]
    );

    const showPasswordHandler = () => {
        if (passwordInputType === 'password') {
            setPasswordInputType('text');
        } else {
            setPasswordInputType('password');
        }
    };

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        signUpCallback({ name, email, password });
    };

    return {
        name,
        email,
        password,
        passwordInputType,
        showPasswordHandler,
        onNameChangeHandler,
        onEmailChangeHandler,
        onPasswordChangeHandler,
        onSubmitHandler,
    };
};

export default useRegisterForm;
