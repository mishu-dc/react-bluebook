import { RECEIVED_BRANDS } from "../actions/action-types";

let initialState={
    total:0,
    items:[],
    receivedAt:''
}

function brandReducer(state=initialState, action){
    switch(action.type){
        case RECEIVED_BRANDS:
            return Object.assign({},
                    {
                        total:action.payload.total,
                        receivedAt: Date.now(),
                        items: action.payload.items
                    }
                );
        default:
            return state;
    }
}

export default brandReducer;