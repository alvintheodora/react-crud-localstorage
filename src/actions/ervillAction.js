import axios from 'axios';

export function getErvillUsers(){
    return {
        type: 'FETCH_USERS',
        payload: axios.get('https://my-json-server.typicode.com/alvintheodora/react-crud-localstorage/data')
    };
}