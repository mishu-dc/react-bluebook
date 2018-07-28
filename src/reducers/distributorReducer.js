import { RECEIVED_DISTRIBUTORS } from '../actions/action-types';

let initialState={
    total:0,
    items:[],
    receivedAt:''
}

function distributorReducer(state=initialState, action){
    switch(action.type)
    {
        case RECEIVED_DISTRIBUTORS:
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

export default distributorReducer;

