import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';


import App from './components/App';

import { verifyLogin, userLogout } from './actions/userActions';

import  { rootReducer }  from "./reducers/index";

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

window.store = store;
window.verifyLogin = verifyLogin;
window.userLogout = userLogout;

//store.subscribe(()=>console.log("store updated", store.getState()));

ReactDOM.render(<Provider store={store}><BrowserRouter><App></App></BrowserRouter></Provider>, document.getElementById('root'));