import { RECEIVED_MARKETS } from '../actions/action-types';

let initialState={
    items:[],
    receivedAt:''
}

function marketReducer(state=initialState, action){
    switch(action.type)
    {
        case RECEIVED_MARKETS:
            return Object.assign({},
                    {
                        receivedAt: Date.now(),
                        items: action.payload
                    }
                );
        default:
            return state;
    }
}

export default marketReducer;

