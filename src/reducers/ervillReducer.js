const initialState = {};

export default function(state=initialState, action){  
    switch(action.type){
        case 'FETCH_USERS_PENDING':
            return {...state, fetching: true, fetched: false};
        case 'FETCH_USERS_REJECTED':
            return {...state, fetching: false, error: action.payload}
        case 'FETCH_USERS_FULFILLED':            
            return {...state, fetching: false, fetched: true, users: action.payload.data};
        default:
            return state;
    }  
}
