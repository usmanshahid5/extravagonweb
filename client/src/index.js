import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider }      from 'react-redux';
import App               from './App';
import reportWebVitals   from './reportWebVitals';
import { store }         from './redux/store';
import { fetchConfigs }  from './const';
import './index.css';
import jQuery            from 'jquery';

window.jQuery = jQuery;

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
fetchConfigs();
