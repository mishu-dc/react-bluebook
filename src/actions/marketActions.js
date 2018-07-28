import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_MARKET, RECEIVED_MARKETS } from './action-types';

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

        let url='http://localhost:59821/api/markets?';

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