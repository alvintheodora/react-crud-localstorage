// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
// import axios from 'axios';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';


// //using combineReducers
// const userReducer = function(state={}, action){  
//     switch(action.type){
//         case 'CHANGE_USER_NAME':                  
//              return {...state, name: action.payload};
//         case 'CHANGE_USER_AGE':
//             return {...state, age: action.payload};
//         case 'ERROR':           
//             throw new Error('oops!!');        
//         default:
//             return state;
//     }
// }

// const tweetReducer = function(state=[], action){  
//     switch(action.type){
//         case 'ADD_TWEETS':     
//             return [...state, action.payload];                 
//         default:
//             return state;
//     }  
// }


// //async reducer
// const initialState  ={
//     fetching: false,
//     fetched: false,
//     users: [],
//     error: null
// }

// const reducer = function(state=initialState, action){
//     switch(action.type){
//         case 'FETCH_USERS_PENDING':
//             return {...state, fetching: true, fetched: false};
//         case 'FETCH_USERS_REJECTED':
//             return {...state, fetching: false, error: action.payload}
//         case 'FETCH_USERS_FULFILLED':            
//             return {...state, fetching: false, fetched: true, users: action.payload.data.data};
//         default:
//             return state;
//     }
// };

// const reducers = combineReducers({
//     user: userReducer,
//     tweets: tweetReducer,
//     ervill: reducer
// });

// //middleware
// const error = (store) => (next) => (action) => {
//     try{
//         next(action);
//     }catch(e){
//         console.log("error log: ", e);
//     }
// };

// const store = createStore(reducers, {}, applyMiddleware(promise(), thunk, createLogger(), error));

// // store.subscribe(()=>{
// //     console.log(store.getState());
// // });

// store.dispatch({
//     type: 'CHANGE_USER_NAME',
//     payload: 'alvin'
// });
// store.dispatch({
//     type: 'CHANGE_USER_AGE',
//     payload: 1
// });
// store.dispatch({
//     type: 'CHANGE_USER_AGE',
//     payload: 2
// });

// store.dispatch({
//     type: 'ADD_TWEETS',
//     payload: 'Adding tweets in array'
// });

// store.dispatch({
//     type: 'ERROR',
//     payload: 'this should return error'
// });

// ////////////this action use redux-promise-middleware////////

// store.dispatch({
//     type: 'FETCH_USERS',
//     payload: axios.get('http://rev-ervill.esy.es/api/users')                        
// }).catch( err => {console.log(err.message)});

// ////////////this action use redux-thunk/////////////

// // store.dispatch((dispatch)=>{
// //     dispatch({
// //         type: 'FETCH_USERS_PENDING'
// //     });
// //     axios.get('http://rev-ervill.esy.es/apdfi/users')
// //         .then((response)=>{
// //             dispatch({
// //                 type: 'FETCH_USERS_FULFILLED',
// //                 payload: response.data.data
// //             })
// //         })
// //         .catch((err) => {
// //             dispatch({
// //                 type: 'FETCH_USERS_REJECTED',
// //                 payload: err
// //             })
// //         });
// // });
