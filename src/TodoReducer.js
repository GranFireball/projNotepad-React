export const TodoReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO':
            if(!state.find((each) => (action.payload.text) === each.text)){
                return [...state, {text: action.payload.text}];
            }
            return state;
        case 'DELETE_TODO':
            let newState = state.filter((each) => (action.payload) !== each.text);
            return newState;
        default:
            return state;
    }
}