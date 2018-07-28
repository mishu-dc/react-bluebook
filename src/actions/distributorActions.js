import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_DISTRIBUTOR, RECEIVED_DISTRIBUTORS } from './action-types';

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


export function fetchDistributors(params){
    return function(dispatch){
        dispatch(networkCallStart());

        let url='http://localhost:59821/api/distributors?';

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

        return fetch(url)
            .then(res => res.json())
            .then((response) => {
                    dispatch(networkCallEnd({'message':'distributors fetched successfully'}))
                    dispatch(receivedDistributors(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}