import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from '../pages/Home';
import Login from '../pages/Login';
import routes from './routes'
const { ConnectedRouter } = routerRedux;

function RouterConfig({ history,app }) {
    const routerComp = routes.map((item,index) => (
        <Route exact path={item.path} component={item.component} key={index}/>
    ))
    return (
        <ConnectedRouter history={history}>
            <Switch>
                {routerComp}
            </Switch>
        </ConnectedRouter>
    );
}

export default RouterConfig;
