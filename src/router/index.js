import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import routes from './routes'
const { ConnectedRouter } = routerRedux;
import dynamic from 'dva/dynamic';

function RouterConfig({ history,app }) {
    console.log(routes)
    const routerComp = routes.map((item,index) => {
        // 异步加载路由
        var comp = dynamic({
            app,
            component: () => item.component
        });
        return (
            <Route exact path={item.path} component={comp} key={index}/>
        )
    })
    return (
        <ConnectedRouter history={history}>
            <Switch>
                {routerComp}
            </Switch>
        </ConnectedRouter>
    );
}
export default RouterConfig;
