
import { routerRedux } from 'dva/router'

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

module.exports = {
  namespace: 'login',
  state:
  {
    loginLoading:false
  },
  subscriptions: {
    setup ({ dispatch }) {
    },
  },
  effects: {
     * text ({payload}, { call, put }) {
         console.log(payload)
         yield put({ type: 'showLoginLoading' })
      }
  },
  reducers: {
      showLoginLoading (state) {
          console.log('aaa')
            return {
                loginLoading: true,
            }
      },
    hideLoginLoading (state) {
      return {
        loginLoading: false,
      }
    },
  },
}
