import React from 'react'
import { Layout, Menu, Dropdown, Icon, Modal, Input } from 'antd';
import { Link } from 'dva/router';
import style from '../../assets/css/head.css';
import cookie from '../../cookie';
import axios from 'axios';
import qs from 'qs'
const { Header } = Layout;


export default class Head extends React.Component {
    state = {
        stu_id: '',
        stu_name: '',
        visible: false,
        stu_psw: '',
        psw_type: true
    }
    componentDidMount() {
        this.setState({
            stu_id: cookie.getCookie('stu_id'),
            stu_name: cookie.getCookie('stu_name')
        })
    }
    modifypsw(e) {
        this.setState({
            visible: true
        })
    }
    loginout(e) {
        cookie.delallcookie();
        window.location.href = "http://localhost:8000/#/login"
    }
    handleOk = () => {
        this.setState({
            visible: false,
        });
        if (this.state.stu_psw) {
            axios.post('http://localhost:3000/setpsw', qs.stringify({
                stu_id: this.state.stu_id,
                stu_psw: this.state.stu_psw
            }))
            cookie.delallcookie();
            window.location.href = "http://localhost:8000/#/login"

        }


    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    onChangeUstuPsw(e) {
        this.setState({
            stu_psw: e.target.value.trim()
        })
    }
    according() {
        this.setState({
            psw_type: !this.state.psw_type
        })
    }
    render() {
        return (
            <Header className="header">
                <div className="logo" >
                    XXX教务系统
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/main/information">学生信息</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/main/business">教务系统</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/main/score">成绩查询</Link></Menu.Item>
                </Menu>
                <Dropdown.Button className={`${style.user_btn}`} overlay={(
                    <Menu >
                        <Menu.Item key="1" onClick={this.modifypsw.bind(this)}><Icon type="edit" />修改密码</Menu.Item>
                        <Menu.Item key="2" onClick={this.loginout.bind(this)}><Icon type="poweroff" />退出</Menu.Item>
                    </Menu>
                )}>
                    <Icon type="user" />{this.state.stu_name ? this.state.stu_name : ''}
                </Dropdown.Button>
                <Modal
                    title="修改密码"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    cancelText="取消"
                    okText='确定'
                    style={{ textAlign: 'center' }}
                >
                    <p >修改密码后将退出登陆状态，请重新登陆</p>
                    <Input
                        type={this.state.psw_type ? 'password' : 'text'}
                        placeholder="请输入新的密码"
                        prefix={<Icon type="lock" />}
                        suffix={<Icon type='eye' style={{ color: this.state.psw_type ? '#000' : '#1890ff' }} onClick={this.according.bind(this)} />}
                        value={this.state.stu_psw}
                        onChange={this.onChangeUstuPsw.bind(this)}
                        style={{ width: '60%' }}
                    />
                </Modal>
            </Header>
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