import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';
import { UserResponse } from '../User';

interface AuthState {
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    message: string | null;
    user: UserResponse | null;
    forgotPasswordEmailHasBeenSent: boolean;
}

const initialState: AuthState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    message: null,
    user: null,
    forgotPasswordEmailHasBeenSent: false,
};

const reducer = produce((state: AuthState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SIGNUP:
            state.loading = true;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.SIGNUP_COMPLETE:
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.SIGNUP_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.user = null;
            state.message = null;
            return state;
        case ActionType.SEND_EMAIL_VERIFICATION:
            state.loading = false;
            state.error = null;
            state.user = null;
            state.message = 'Verifica tu correo electrónico';
            return state;
        case ActionType.LOGIN:
            state.loading = true;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.LOGIN_COMPLETE:
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.LOGIN_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.user = null;
            state.message = null;
            return state;
        case ActionType.FORGOT_PASSWORD:
            state.loading = true;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.FORGOT_PASSWORD_COMPLETE:
            state.loading = false;
            state.isAuthenticated = true;
            state.forgotPasswordEmailHasBeenSent = true;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.FORGOT_PASSWORD_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.forgotPasswordEmailHasBeenSent = false;
            state.message = null;
            return state;
        case ActionType.RESET_PASSWORD:
            state.loading = true;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.RESET_PASSWORD_COMPLETE:
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
            state.message = null;
            return state;
        case ActionType.RESET_PASSWORD_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.user = null;
            state.message = null;
            return state;
        case ActionType.CONFIRM_EMAIL:
            state.loading = true;
            state.error = null;
            state.user = null;
            state.message = null;
            return state;
        case ActionType.CONFIRM_EMAIL_SUCCESS:
            state.loading = false;
            state.error = null;
            state.user = action.payload;
            return state;
        case ActionType.CONFIRM_EMAIL_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.user = null;
            return state;
        default:
            return state;
    }
});

export default reducer;
