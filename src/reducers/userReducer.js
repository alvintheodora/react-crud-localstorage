const initialState = {
    name: null,
    age: null
};

export default function(state=initialState, action){  
    switch(action.type){
        case 'CHANGE_USER_NAME':                  
             return {...state, name: action.payload};
        case 'CHANGE_USER_AGE':
            return {...state, age: action.payload};
        case 'ERROR':           
            throw new Error('oops!!');        
        default:
            return state;
    }
}