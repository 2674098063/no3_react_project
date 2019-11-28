import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Head from './components/Head/Head';
import Information from './routes/Information/Information'
import Business from './routes/Business/Business'
import Score from './routes/Score/Score'
import Login from './routes/Login/index.jsx'
import cookie from './cookie'
// const { SubMenu } = Menu;
// const { Content, Sider } = Layout;


function loginState() {
  let stu_id = cookie.getCookie('stu_id')
  if (stu_id === undefined) {
    window.location.href = 'http://localhost:8000/#/login'
  }
}

function RouterConfig({ history }) {
  loginState();
  window.addEventListener('hashchange', () => {
    loginState();
  })
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
              <Redirect path="/main" to="/main/information" />
            </Switch>
          </Layout>
        </Route>
        <Redirect path="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
