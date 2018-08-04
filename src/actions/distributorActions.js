import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_DISTRIBUTOR, RECEIVED_DISTRIBUTORS } from './action-types';

import  properties from '../helpers/properties';

export function addDistributor(distributor){
    return{
        type:ADD_DISTRIBUTOR,
        payload:distributor
    }
}

export function receivedDistributors(response){
    return {
        type: RECEIVED_DISTRIBUTORS,
        payload: response
    }
}

function isValid(item){
    if(item===undefined) return false;
    if(item.length===0) return false;
    return true;
}


export function fetchDistributors(params, user){
    return function(dispatch){
        dispatch(networkCallStart());

        let url = properties.domain + '/api/distributors?';

        if(params!==undefined){          
            if(isValid(params.code)){
                url += "code=" + params.code + "&";
            }

            if(isValid(params.name)){
                url += "name=" + params.name + "&";
            }

            if(isValid(params.page)){
                url += "page=" + params.page + "&";;
            }

            if(isValid(params.size)){
                url += "size=" + params.size + "&";;
            }
        }  

        return fetch(url, {
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
                        dispatch(networkCallEnd({'message':'distributors fetched successfully'}))
                        dispatch(receivedDistributors(response))
                    }
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}