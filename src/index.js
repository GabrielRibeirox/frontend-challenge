import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./styles/global";
import Order from './pages/Order';


ReactDOM.render(
  <React.StrictMode>
    <Order />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);



