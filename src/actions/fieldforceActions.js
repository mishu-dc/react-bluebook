import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_FIELDFORCE, RECEIVED_FIELDFORCES } from './action-types';

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


export function fetchFieldforces(params){
    return function(dispatch){
        dispatch(networkCallStart());

        let url='http://localhost:59821/api/fieldforces?';

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

        return fetch(url)
            .then(res => res.json())
            .then((response) => {
                dispatch(networkCallEnd({'message':'fieldforces fetched successfully'}))
                    dispatch(receivedFieldforces(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}