require("babel-register")
require("babel-polyfill")
import { hot } from 'react-hot-loader'
import createHistory from 'history/createHashHistory'
import createLoading from 'dva-loading'
import router from './router/index'
import dva from 'dva'
import { loadModels } from 'utils/utilsModels'
import MockJS from 'mock'
hot(module)

const app = dva({
  history: createHistory()
})

app.use(createLoading())

// console.log(require('./models/global').default)
loadModels(app)
// app.model(require('./models/global').default);

app.router(router)

app.start('#app')


!isProd && MockJS.start()


export default app._store
