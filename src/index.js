import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
=======
    <BrowserRouter>
        <App />
    </BrowserRouter>
>>>>>>> master
    , document.getElementById('root'));
