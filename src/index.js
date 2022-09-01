import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { store } from './redux/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
