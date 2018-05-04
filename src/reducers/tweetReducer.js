const initialState = [];

export default function(state=initialState, action){  
    switch(action.type){
        case 'ADD_TWEETS':     
            return [...state, action.payload];                 
        default:
            return state;
    }  
}
