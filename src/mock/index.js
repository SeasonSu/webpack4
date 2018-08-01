import Mock from 'mockjs'
import api from './api'

const MockJS = {
    start(){
        console.log('mock start')
        MockJS.setup()
        MockJS.mock()
    },
    setup(){
        Mock.setup({
            timeout: '1200 - 2400'
        })
    },
    mock(){
        for(let key in api){
            console.log(key)
            console.log(api[key])
            Mock.mock(location.origin+key,api[key])
        }

        Mock.mock('http://localhost:8044/api/111',{
            '1':'123'
        })
    }
}

module.exports = MockJS
