import React from 'react'
import { Layout, Menu, Dropdown, Icon, message } from 'antd';
import { Link } from 'dva/router';
import style from '../../assets/css/head.css'
const { Header } = Layout;

function handleButtonClick(e) {
    message.info('？？？');
}
function handleMenuClick(e) {
    message.info('！！！');
}
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><Icon type="edit" />修改密码</Menu.Item>
        <Menu.Item key="2"><Icon type="poweroff" />退出</Menu.Item>
    </Menu>
);

export default class Head extends React.Component {
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
                    <Menu.Item key="1"><Link to="/information">学生信息</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/business">教务系统</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/score">成绩查询</Link></Menu.Item>
                </Menu>
                <Dropdown.Button className={`${style.user_btn}`} onClick={handleButtonClick} overlay={menu}>
                    <Icon type="user" />张焜博
                </Dropdown.Button>
            </Header>
        )
    }
}