import React from 'react';
import './sass/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentication from './pages/Auth';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmEmail from './pages/ConfirmEmail';
import Dashboard from './pages/Dashboard';
import TaskTimer from './pages/TaskTimer';

//TODO: Proteger rutas y cerrar sesión

function App() {
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
