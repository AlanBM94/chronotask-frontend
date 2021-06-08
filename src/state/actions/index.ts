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

export interface ForgotPassword {
    type: ActionType.FORGOT_PASSWORD;
}

export interface ForgotPasswordComplete {
    type: ActionType.FORGOT_PASSWORD_COMPLETE;
}

export interface ForgotPasswordError {
    type: ActionType.FORGOT_PASSWORD_ERROR;
    payload: string;
}

export interface ResetPassword {
    type: ActionType.RESET_PASSWORD;
}

export interface ResetPasswordComplete {
    type: ActionType.RESET_PASSWORD_COMPLETE;
    payload: UserResponse;
}

export interface ResetPasswordError {
    type: ActionType.RESET_PASSWORD_ERROR;
    payload: string;
}

export type Action =
    | SignUp
    | SignUpComplete
    | SignUpError
    | LogIn
    | LogInComplete
    | LogInError
    | ForgotPassword
    | ForgotPasswordComplete
    | ForgotPasswordError
    | ResetPassword
    | ResetPasswordComplete
    | ResetPasswordError;
