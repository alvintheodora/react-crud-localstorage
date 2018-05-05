import dispatcher from '../dispatcher';

export function createTodo(text){
    dispatcher.dispatch({
        type: 'CREATE_TO_DO',
        text
    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: 'DELETE_TO_DO',
        id
    });
}

export function completeTodo(id){
    dispatcher.dispatch({
        type: 'COMPLETE_TO_DO',
        id
    });
}

export function reloadTodo(){
    dispatcher.dispatch({
        type: 'FETCH_TO_DO'
    });

   
    dispatcher.dispatch({
        type: 'RECEIVE_TO_DO',
        todos: [
            {
                id: Date.now(),
                text: "Go Shopping",
                complete: true
            },
            {
                id: Date.now()+1,
                text: "Pay Water Bills",
                complete: false
            }
        ]
    });

}