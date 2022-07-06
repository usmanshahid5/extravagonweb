import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider }      from 'react-redux';
import App               from './App';
import Error             from './components/Error';
import reportWebVitals   from './reportWebVitals';
import { store }         from './store';
import { fetchConfigs }  from './const';
import './index.css';
import './animation';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Error>
        <App/>
      </Error>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
fetchConfigs();



