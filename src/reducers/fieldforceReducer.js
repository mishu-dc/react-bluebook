import { RECEIVED_FIELDFORCES } from '../actions/action-types';

let initialState={
    total:0,
    items:[],
    receivedAt:''
}

function fieldforceReducer(state=initialState, action){
    switch(action.type)
    {
        case RECEIVED_FIELDFORCES:
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

export default fieldforceReducer;

