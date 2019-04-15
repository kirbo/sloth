import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import { Consumer } from './Context';

import NotAuthorized from '../NotAuthorized';

import AppSider from '../../component/AppSider';
import View from '../../container/View';

const Authorized = () => (
  <Styled>
    <Layout>
      <AppSider />
      <View />
    </Layout>
  </Styled>
);

const App = () => (
  <Consumer>
    {({ slackInstances }) => slackInstances.length > 0 ? <Authorized /> : <NotAuthorized />}
  </Consumer>
);

const Styled = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  & .ant-layout {
    min-height: 100vh;
  }
`;


export default App;
