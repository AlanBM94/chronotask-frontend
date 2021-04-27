import { ActionType } from '../action-types';
import { UserResponse } from './../User';

export interface SignUp {
    type: ActionType.SIGNUP;
}

export interface SignUpComplete {
    type: ActionType.SIGNUP_COMPLETE;
    payload: UserResponse;
}

export interface SignUpError {
    type: ActionType.SIGNUP_ERROR;
    payload: string;
}

export interface LogIn {
    type: ActionType.LOGIN;
}

export interface LogInComplete {
    type: ActionType.LOGIN_COMPLETE;
    payload: UserResponse;
}

export interface LogInError {
    type: ActionType.LOGIN_ERROR;
    payload: string;
}

export type Action =
    | SignUp
    | SignUpComplete
    | SignUpError
    | LogIn
    | LogInComplete
    | LogInError;
