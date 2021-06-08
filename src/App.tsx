import React from 'react';
import './sass/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentication from './pages/Auth';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmEmail from './pages/ConfirmEmail';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Authentication} />
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
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
