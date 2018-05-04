export function setName(name){
    return {
        type: 'CHANGE_USER_NAME',
        payload: name
    };
}

export function setAge(){
    return {
        type: 'CHANGE_USER_AGE',
        payload: 21
    };
}

