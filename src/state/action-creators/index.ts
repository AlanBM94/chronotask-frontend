import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from './../actions';
import { ActionType } from './../action-types';

interface ISignUpData {
    name: string;
    email: string;
    password: string;
}

interface ILogInData {
    email: string;
    password: string;
}

const createError = (error: any) => {
    let err = '';
    if (error.response.data.message) {
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

export const signUp = (signUpData: ISignUpData) => async (
    dispatch: Dispatch<Action>
) => {
    dispatch({ type: ActionType.SIGNUP });

    try {
        const { data } = await axios.post(
            'http://localhost:7000/api/v1/users/signup',
            signUpData
        );

        dispatch({ type: ActionType.SIGNUP_COMPLETE, payload: data });
    } catch (error) {
        dispatch({
            type: ActionType.SIGNUP_ERROR,
            payload: createError(error),
        });
    }
};

export const logIn = (logInData: ILogInData) => async (
    dispatch: Dispatch<Action>
) => {
    dispatch({ type: ActionType.LOGIN });

    try {
        const { data } = await axios.post(
            'http://localhost:7000/api/v1/users/login',
            logInData
        );

        dispatch({ type: ActionType.LOGIN_COMPLETE, payload: data });
    } catch (error) {
        dispatch({
            type: ActionType.LOGIN_ERROR,
            payload: createError(error),
        });
    }
};
