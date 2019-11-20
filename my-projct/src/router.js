import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Head from './components/Head/Head';
import Information from './routes/Information/Information'
import Business from './routes/Business/Business'
import Score from './routes/Score/Score'
import Login from './routes/Login/index.jsx'
// import cookie from './cookie'
// const { SubMenu } = Menu;
// const { Content, Sider } = Layout;


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/main">

          <Layout>
            <Head />
            <Switch>
              <Route path="/main/information">
                <Information />
              </Route>
              <Route path="/main/business">
                <Business />
              </Route>
              <Route path="/main/score">
                <Score />
              </Route>
            </Switch>
          </Layout>
        </Route>
        <Redirect path="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
