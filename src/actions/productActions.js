import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_PRODUCT, RECEIVED_PRODUCTS  } from "./action-types";

import  properties from '../helpers/properties';

export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function receivedProducts(response){
    return {
        type: RECEIVED_PRODUCTS,
        payload: response
    }
}

function isValid(item){
    if(item===undefined) return false;
    if(item.length===0) return false;
    return true;
}


export function fetchProducts(params, user) {
    return function (dispatch) {
        dispatch(networkCallStart())

        let url= properties.domain + '/api/products?';

        if(params!==undefined){
            if(isValid(params.code)){
                url += "code=" + params.code + "&";
            }

            if(isValid(params.name)){
                url += "name=" + params.name + "&";
            }

            if(isValid(params.brandId)){
                url += "brandId=" + params.brandId + "&";
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
                        dispatch(networkCallEnd({'message':'products fetched successfully'}))
                        dispatch(receivedProducts(response))
                    }                    
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}

