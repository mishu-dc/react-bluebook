import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_MARKET, RECEIVED_MARKETS } from './action-types';

import  properties from '../helpers/properties';

export function addMarket(distributor){
    return{
        type:ADD_MARKET,
        payload:distributor
    }
}

export function receivedMarkets(response){
    return {
        type: RECEIVED_MARKETS,
        payload: response
    }
}


export function fetchMarkets(){
    return function(dispatch){
        dispatch(networkCallStart());

        let url= properties.domain + '/api/markets?';

        return fetch(url)
            .then(res => res.json())
            .then((response) => {
                    dispatch(networkCallEnd({'message':'markets fetched successfully'}))
                    dispatch(receivedMarkets(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}