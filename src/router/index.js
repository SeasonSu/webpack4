import React from 'react'
import routes from './routes'
import dynamic from 'dva/dynamic'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Loading from 'components/Loading/index'
import { CommonLayout, UserLayout } from 'components/Layout'
import { routerRedux, Route, Switch } from 'dva/router'
import Authorized from 'components/Authorized'
import { getRoutesPath } from 'utils/utilsRoutes'
const { ConnectedRouter } = routerRedux
const { AuthorizedRoute } = Authorized

function RouterConfig({ history,app }) {

    return (
        <LocaleProvider locale={zhCN}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/user"
                        render={props => {
                            props.routerData = routes
                            return <UserLayout {...props} />
                        }}
                    />
                    <AuthorizedRoute
                        path="/"
                        render={props => {
                            props.routerData = routes
                            return <CommonLayout {...props} />
                        }}
                        authority={['admin', 'user']}
                        redirectPath={getRoutesPath('/user/login', {
                          redirect: window.location.href,
                        })}
                    />
                </Switch>
            </ConnectedRouter>
        </LocaleProvider>
    )
}
export default RouterConfig
