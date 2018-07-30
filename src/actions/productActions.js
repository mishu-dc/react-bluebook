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


export function fetchProducts(params) {
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

        return fetch(url)
            .then(res => res.json())
            .then((response) => {
                    dispatch(networkCallEnd({'message':'products fetched successfully'}))
                    dispatch(receivedProducts(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}

