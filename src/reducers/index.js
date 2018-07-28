import brandReducer from './brandReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';
import networkReducer from './networkReducer';
import fieldforceReducer from './fieldforceReducer';
import distributorReducer from './distributorReducer';
import marketReducer from './marketReducer';

import {combineReducers} from 'redux';

export const rootReducer = combineReducers(
    {
        brand: brandReducer, 
        product: productReducer,
        distributor:distributorReducer,
        market:marketReducer,
        fieldforce:fieldforceReducer,
        user: userReducer,
        network:networkReducer
    });