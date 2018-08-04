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


export function fetchMarkets(user){
    return function(dispatch){
        dispatch(networkCallStart());

        let url= properties.domain + '/api/markets?';

        return fetch(url,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': user.tokenType + " " + user.accessToken
                }
            })
            .then(res => res.json())
            .then((response) => {
                    if(response.message!==undefined){
                        dispatch(networkCallError(response))
                    }
                    else{
                        dispatch(networkCallEnd({'message':'markets fetched successfully'}))
                        dispatch(receivedMarkets(response))
                    }
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}