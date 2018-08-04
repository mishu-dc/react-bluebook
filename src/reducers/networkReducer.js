
import {NETWORK_CALL_START, NETWORK_CALL_END, NETWORK_CALL_ERROR} from '../actions/action-types';

let initialState={
    isFetching: false,
    didInvalidate: false,
    callCount:0,
    status:'',
    errorMessage:'',
    successmessage:''
}

function networkReducer(state=initialState, action){
    let nCallCount = state.callCount;

    switch(action.type){
        case NETWORK_CALL_START:
            nCallCount = nCallCount + 1;
            return Object.assign({},
                    state,
                    {
                        isFetching:true, 
                        callCount: nCallCount
                    });

        case NETWORK_CALL_END:
            nCallCount = nCallCount>0?nCallCount-1:0;

            return Object.assign({},
                    state,
                    {
                        isFetching:nCallCount===0?false:true,
                        callCount: nCallCount, 
                        status:'success',
                        successmessage: action.payload.message,
                        errorMessage:''
                    }
                );
                
        case NETWORK_CALL_ERROR:
            nCallCount = nCallCount>0?nCallCount-1:0;

            return Object.assign({},
                    state,
                    {
                        isFetching:nCallCount===0?false:true,
                        callCount: nCallCount, 
                        status:'err',
                        successmessage:'',
                        errorMessage: action.payload.message
                    }
                );

        default:
            return state;
    }
}
export default networkReducer;