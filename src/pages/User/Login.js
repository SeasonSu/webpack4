
import React, { Component } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import { Checkbox, Alert, Icon, Form} from 'antd'
// import Login from 'components/Login'
import styles from './Login.less'
import PropTypes from 'prop-types'
// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login


const Login = ({
    app,
    dispatch,
    form:{
        getFieldDecorator,
        validateFieldsAndScroll,
    }
}) => {
    const {loginLoading} = app
    var uri = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png'
    function  handleOk () {
        validateFieldsAndScroll((err,value)=>{
            if (err) {
                return
            }
            console.log('ok')
            dispatch({type:'user/login',payload:value})
        })
    }
    return (
        <div className={styles.main}>

        </div>
    )
}

Login.propTypes = {
  form: PropTypes.object,
  app: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ app }) => ({ app }))(Form.create()(Login))
