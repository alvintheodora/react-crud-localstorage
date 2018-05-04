import axios from 'axios';

export function getErvillUsers(){
    return {
        type: 'FETCH_USERS',
        payload: axios.get('//rev-ervill.esy.es/api/users')
    };
}