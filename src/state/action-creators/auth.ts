import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from './../actions';
import { ActionType } from './../action-types';
import { setHeaders } from './../../helpers';

interface ISignUpData {
    name: string;
    email: string;
    password: string;
}

interface ILogInData {
    email: string;
    password: string;
}

interface IResetPasswordData {
    password: string;
    token: string;
}

const createError = (error: any) => {
    let err = '';
    if (error?.response.data.message) {
        err = error.response.data.message;
    } else if (error.response.data.errors.length > 0) {
        err = error.response.data.errors
            .map((error: { value: string; msg: string }) => error.msg)
            .join('\n');
    } else {
        err = 'Server error';
    }
    return err;
};

export const signUp =
    (signUpData: ISignUpData) => async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.SIGNUP });

        try {
            const { data } = await axios.post(
                'http://localhost:7000/api/v1/users/signup',
                signUpData
            );

            if (data.message === 'Confirm your email to login') {
                dispatch({ type: ActionType.SEND_EMAIL_VERIFICATION });
            } else {
                localStorage.setItem(
                    'chronotask-token',
                    JSON.stringify(data.token)
                );
                dispatch({ type: ActionType.SIGNUP_COMPLETE, payload: data });
            }
        } catch (error) {
            dispatch({
                type: ActionType.SIGNUP_ERROR,
                payload: createError(error),
            });
        }
    };

export const logIn =
    (logInData: ILogInData) => async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.LOGIN });

        try {
            const { data } = await axios.post(
                'http://localhost:7000/api/v1/users/login',
                logInData
            );

            localStorage.setItem(
                'chronotask-token',
                JSON.stringify(data.token)
            );

            dispatch({ type: ActionType.LOGIN_COMPLETE, payload: data });
        } catch (error) {
            dispatch({
                type: ActionType.LOGIN_ERROR,
                payload: createError(error),
            });
        }
    };

export const resetPassword =
    (resetPasswordData: IResetPasswordData) =>
    async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.RESET_PASSWORD });

        try {
            const { data } = await axios.patch(
                `http://localhost:7000/api/v1/users/resetPassword/${resetPasswordData.token}`,
                { password: resetPasswordData.password }
            );

            dispatch({
                type: ActionType.RESET_PASSWORD_COMPLETE,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ActionType.RESET_PASSWORD_ERROR,
                payload: createError(error),
            });
        }
    };

export const forgotPassword =
    (email: string, cleanForm: () => void) =>
    async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.FORGOT_PASSWORD });

        try {
            await axios.post(
                `http://localhost:7000/api/v1/users/forgotPassword`,
                { email }
            );

            dispatch({
                type: ActionType.FORGOT_PASSWORD_COMPLETE,
            });
            cleanForm();
        } catch (error) {
            dispatch({
                type: ActionType.FORGOT_PASSWORD_ERROR,
                payload: createError(error),
            });
        }
    };

export const confirmEmail =
    (token: string) => async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CONFIRM_EMAIL,
        });
        try {
            const { data } = await axios.patch(
                `http://localhost:7000/api/v1/users/confirmEmail/${token}`
            );

            dispatch({
                type: ActionType.CONFIRM_EMAIL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ActionType.CONFIRM_EMAIL_ERROR,
                payload: createError(error),
            });
        }
    };

export const loadUser =
    (token: string) => async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOAD_PROFILE,
        });
        console.log('loadUser token', token);
        try {
            const { data } = await axios.get(
                'http://localhost:7000/api/v1/users/me',
                setHeaders(token)
            );

            console.log('response', data);

            dispatch({
                type: ActionType.LOAD_PROFILE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            console.log('this is the error', error);
            dispatch({
                type: ActionType.LOAD_PROFILE_ERROR,
                payload: createError(error),
            });
        }
    };
