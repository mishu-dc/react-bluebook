import { ADD_BRAND, RECEIVED_BRANDS  } from "./action-types";
import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';

import  properties from '../helpers/properties';

export function addBrand(brand){
    return {
        type: ADD_BRAND,
        brand
    }
}

export function receivedBrands(response){
    return {
        type: RECEIVED_BRANDS,
        payload: response
    }
}

function isValid(item){
    if(item===undefined) return false;
    if(item.length===0) return false;
    return true;
}

export function fetchBrands(params, user) {
    return function (dispatch) {
        dispatch(networkCallStart())

        let url = properties.domain + "/api/brands?";

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
                        dispatch(networkCallEnd({'message':'brands fetched successfully'}))
                        dispatch(receivedBrands(response))
                    }
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}