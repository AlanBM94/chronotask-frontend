import React, { useState, useEffect } from 'react';
import './sass/main.scss';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Authentication from './pages/Auth';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmEmail from './pages/ConfirmEmail';
import Dashboard from './pages/Dashboard';
import TaskTimer from './pages/TaskTimer';
import { useTypedSelector } from './hooks/use-typed-selector';
import { useActions } from './hooks/use-action';

function App() {
    const auth = useTypedSelector((state) => state.auth);
    const { logout } = useActions();

    useEffect(() => {
        if (auth.error === 'jwt expired') {
            logout();
        }
    }, [auth]);

    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route
                    exact
                    path="/resetPassword/:token"
                    component={ResetPassword}
                />
                <Route
                    exact
                    path="/forgotPassword"
                    component={ForgotPassword}
                />
                <Route
                    exact
                    path="/confirmationEmail/:token"
                    component={ConfirmEmail}
                />
                <Route exact path="/task/:id" component={TaskTimer} />

                <Route exact path="/" component={Authentication} />
            </Switch>
        </Router>
    );
}

export default App;
