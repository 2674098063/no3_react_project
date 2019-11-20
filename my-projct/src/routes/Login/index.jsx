import React from 'react'
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import styles from '../../assets/css/login.css';
import axios from 'axios';
import qs from 'qs';
import cookie from '../../cookie'


const FormItem = Form.Item;

const openNotificationWithIcon = (type) => {
    notification[type]({
        message: '警告',
        description: '账号或密码错误',
    });
};

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            this.setState({
                loading: true
            })
            if (!err) {
                // console.log(values);
                if (values.remember) {
                    cookie.setCookie('login', '1')
                } else {
                    cookie.setCookie('login', '0')
                }
                await axios.post('http://localhost:3000/stu', qs.stringify({
                    stu_id: values.stu_id,
                    stu_psw: values.stu_psw
                })).then(({ data }) => {
                    if (data.isLogin) {
                        let login = data.data[0];
                        for (let item in login) {
                            if (item === '_id' || item === 'stu_psw') {
                                continue;
                            }
                            cookie.setCookie(item, login[item])
                        }
                        let stu_id = cookie.getCookie('stu_id')
                        if (stu_id !== undefined) {
                            window.location.href = 'http://localhost:8000/#/main/information/basic'
                        }
                    } else {
                        openNotificationWithIcon('error');
                        this.setState({
                            loading: false
                        })
                    }
                })
            } else {
                this.setState({
                    loading: false
                })
            }

        });
    }
    state = {
        loading: false,
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <h3 className={`${styles.login}`}>学员信息服务平台</h3>
                <FormItem>
                    {getFieldDecorator('stu_id', {
                        rules: [{ required: true, message: '请输入正确的学号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="学号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('stu_psw', {
                        rules: [{ required: true, message: '密码错误' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button" icon="login" loading={this.state.loading}>
                        进入
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default class Login extends React.Component {

    render() {

        return (
            <div className={`${styles.bg}`} >
                <div className={`${styles.login_box}`}>
                    <WrappedNormalLoginForm />
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearTimeout(this.timeouter)
        this.setState = (state, callback) => {
            return
        }
    }
} 