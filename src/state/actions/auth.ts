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

export interface SendEmailVerification {
    type: ActionType.SEND_EMAIL_VERIFICATION;
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
export interface ConfirmEmail {
    type: ActionType.CONFIRM_EMAIL;
}
export interface ConfirmEmailSuccess {
    type: ActionType.CONFIRM_EMAIL_SUCCESS;
    payload: UserResponse;
}

export interface ConfirmEmailError {
    type: ActionType.CONFIRM_EMAIL_ERROR;
    payload: string;
}

export interface LoadProfile {
    type: ActionType.LOAD_PROFILE;
}
export interface LoadProfileSuccess {
    type: ActionType.LOAD_PROFILE_SUCCESS;
    payload: UserResponse;
}

export interface LoadProfileError {
    type: ActionType.LOAD_PROFILE_ERROR;
    payload: string;
}

export interface LogOut {
    type: ActionType.LOGOUT;
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
    | ResetPasswordError
    | SendEmailVerification
    | ConfirmEmail
    | ConfirmEmailSuccess
    | ConfirmEmailError
    | LoadProfile
    | LoadProfileSuccess
    | LoadProfileError
    | LogOut;
