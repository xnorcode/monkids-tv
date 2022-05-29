import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// HistoryRouter for Routerv6: https://reactrouter.com/docs/en/v6/routers/history-router
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { store, history } from './utils';
import { colorConstants } from './constants';
import { MainRouter } from './routers';


const RootContainer = styled.div`
  background: ${colorConstants.black};
  width: 100%;
  height: 100vh;
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootContainer id='app'>
        <Router history={history}>
          <MainRouter />
        </Router>
      </RootContainer>
    </Provider>
  </React.StrictMode>
);