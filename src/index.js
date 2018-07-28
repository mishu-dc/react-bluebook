import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';


import App from './components/App';

import { addBrand, fetchBrands } from './actions/brandActions';
import { addProduct, fetchProducts } from './actions/productActions';
import { addDistributor, fetchDistributors } from './actions/distributorActions';
import { addFieldforce, fetchFieldforces } from './actions/fieldforceActions';
import { addMarket, fetchMarkets } from './actions/marketActions';
import { verifyLogin } from './actions/userActions';

import  { rootReducer }  from "./reducers/index";

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

window.store = store;
window.addBrand = addBrand;
window.addProduct = addProduct;
window.fetchBrands = fetchBrands;
window.fetchProducts = fetchProducts;
window.verifyLogin = verifyLogin;
window.fetchDistributors = fetchDistributors;
window.fetchFieldforces = fetchFieldforces;
window.fetchMarkets = fetchMarkets;
window.addDistributor = addDistributor;
window.addFieldforce = addFieldforce;
window.addMarket = addMarket;



store.subscribe(()=>console.log("store updated", store.getState()));

ReactDOM.render(<Provider store={store}><BrowserRouter><App></App></BrowserRouter></Provider>, document.getElementById('root'));