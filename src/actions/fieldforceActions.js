import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_FIELDFORCE, RECEIVED_FIELDFORCES } from './action-types';

import  properties from '../helpers/properties';

export function addFieldforce(distributor){
    return{
        type:ADD_FIELDFORCE,
        payload:distributor
    }
}

export function receivedFieldforces(response){
    return {
        type: RECEIVED_FIELDFORCES,
        payload: response
    }
}

function isValid(item){
    if(item===undefined) return false;
    if(item.length===0) return false;
    return true;
}


export function fetchFieldforces(params, user){
    return function(dispatch){
        dispatch(networkCallStart());

        let url = properties.domain + '/api/fieldforces?';

        if(params!==undefined){          
            if(isValid(params.code)){
                url += "code=" + params.code + "&";
            }

            if(isValid(params.name)){
                url += "name=" + params.name + "&";
            }

            if(isValid(params.distributorId)){
                url += "distributorId=" + params.distributorId + "&";
            }

            if(isValid(params.page)){
                url += "page=" + params.page + "&";;
            }

            if(isValid(params.size)){
                url += "size=" + params.size + "&";;
            }
        } 

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
                        dispatch(networkCallEnd({'message':'fieldforces fetched successfully'}))
                        dispatch(receivedFieldforces(response))
                    }
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}