require("babel-register")
require("babel-polyfill")
import { hot } from 'react-hot-loader'
import createHistory from 'history/createHashHistory';
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import router from './router/index'
import dva from 'dva';

hot(module)
// 1. Initialize
const app = dva({
  history: createHistory()
});

app.use(createLoading());

// 2. Plugins
// app.use({});

// 3. Model
const appModel = require('./models/app').default
console.log(appModel)
app.model(appModel);
// 4. Router
app.router(router);

// 5. Start
app.start('#app');
