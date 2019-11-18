import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Router, Route, Switch, Redirect, Link } from 'dva/router';

import Basic from '../../components/Inf_Content/Basic'
import Status from '../../components/Inf_Content/Status'
import Attendance from '../../components/Inf_Content/Attendance'
import Obtain from '../../components/Inf_Content/Obtain'
import Schedule from '../../components/Inf_Content/Schedule'
import TestTime from '../../components/Inf_Content/TestTime'


const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default class Information extends React.Component {
    constructor(props) {
        super(props)
        this.laod()
    }
    state = {
        head: '',
        nav: ''
    }
    componentDidMount() {
        this.laod();
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    laod() {
        let path = ''
        window.addEventListener('hashchange', () => {
            path = window.location.hash;
            if (path.indexOf('/information') >= 0) {
                this.setState({
                    head: '学生信息'
                })
                if (path.indexOf('/basic') >= 0) {
                    this.setState({
                        nav: '基本信息'
                    })
                }
                if (path.indexOf('/status') >= 0) {
                    this.setState({
                        nav: '学籍信息'
                    })
                }
                if (path.indexOf('/attendance') >= 0) {
                    this.setState({
                        nav: '考勤'
                    })
                }
                if (path.indexOf('/obtain') >= 0) {
                    this.setState({
                        nav: '奖惩'
                    })
                }
                if (path.indexOf('/schedule') >= 0) {
                    this.setState({
                        nav: '个人课表'
                    })
                }
                if (path.indexOf('/test_time') >= 0) {
                    this.setState({
                        nav: '考试时间'
                    })
                }
            }
        })


    }
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        className="submenu"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />个人信息</span>}>
                            <Menu.Item key="1"><Link to="/information/basic">基本信息</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/information/status">学籍信息</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/information/attendance">考勤</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/information/obtain">奖惩</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />课程</span>}>
                            <Menu.Item key="5"><Link to="/information/schedule">个人课表</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/information/test_time">考试时间</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>学生</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.head ? this.state.head : ''}</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.nav ? this.state.nav : ''}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, position: 'relative' }}>
                        <Switch>
                            <Route path="/information/basic">
                                <Basic />
                            </Route>
                            <Route path="/information/status">
                                <Status />
                            </Route>
                            <Route path="/information/attendance">
                                <Attendance />
                            </Route>
                            <Route path="/information/obtain">
                                <Obtain />
                            </Route>
                            <Route path="/information/schedule">
                                <Schedule />
                            </Route>
                            <Route path="/information/test_time">
                                <TestTime />
                            </Route>
                            <Redirect path="/information" to="/information/basic" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}