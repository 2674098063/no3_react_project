import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch, Link } from 'dva/router';
import { Redirect, } from 'dva/router';
import Choose from '../../components/Business_content/Choose'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;


export default class Business extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            className="submenu"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ minHeight: '90vh', borderRight: 0, height: '90vh' }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="book" />教务</span>}>
                                <Menu.Item key="1"><Link to="/main/business">选课</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/main/business">申请教室</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/main/business">申请奖学金</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, position: 'relative', marginTop: '20px' }}>
                            <Switch>
                                <Route path="/main/business/choose">
                                    <Choose />
                                </Route>
                                <Redirect path="/main/business" to="/main/business/choose" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </>
        )
    }
}