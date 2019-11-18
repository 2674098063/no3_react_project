import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import Head from './components/Head/Head';
import Information from './routes/Information/Information'
import Business from './routes/Business/Business'
import Score from './routes/Score/Score'
// const { SubMenu } = Menu;
// const { Content, Sider } = Layout;


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Head />
        <Switch>
          <Route path="/information">
            <Information />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Redirect path="/" to="/information" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
