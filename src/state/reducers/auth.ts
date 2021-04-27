import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';
import { UserResponse } from '../User';

interface AuthState {
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    user: UserResponse | null;
}

const initialState: AuthState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: null,
};

const reducer = produce((state: AuthState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SIGNUP:
            state.loading = true;
            state.error = null;
            return state;
        case ActionType.SIGNUP_COMPLETE:
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
            return state;
        case ActionType.SIGNUP_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.user = null;
            return state;
        case ActionType.LOGIN:
            state.loading = true;
            state.error = null;
            return state;
        case ActionType.LOGIN_COMPLETE:
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
            return state;
        case ActionType.LOGIN_ERROR:
            state.loading = false;
            state.error = action.payload;
            state.user = null;
            return state;
        default:
            return state;
    }
});

export default reducer;
