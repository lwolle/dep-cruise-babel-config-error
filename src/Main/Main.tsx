import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { Home } from 'src/modules/Home/Home';
import { Paths } from 'src/core/Routes/routesConfig';

export const Main: React.FC = () => (
    <StrictMode>
            <Router>
                <Switch>
                    <Route exact path={ Paths.HOME } component={ Home } />
                    <Redirect to={ Paths.HOME } />
                </Switch>
            </Router>
    </StrictMode>
);
