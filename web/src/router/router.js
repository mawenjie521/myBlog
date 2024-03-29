import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from '@views/pages';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={LoginPage} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
