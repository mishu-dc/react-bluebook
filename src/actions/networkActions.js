import {NETWORK_CALL_START, NETWORK_CALL_END, NETWORK_CALL_ERROR} from './action-types';

export function networkCallStart(){
    return {
        type:NETWORK_CALL_START
    }
}

export function networkCallEnd(response){
    return {
        type:NETWORK_CALL_END,
        payload: response
    }
}

export function networkCallError(response){
    return {
        type:NETWORK_CALL_ERROR,
        payload: response
    }
}