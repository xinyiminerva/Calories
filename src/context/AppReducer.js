export default (state, action) => {
    switch(action.type){
    case 'ADD_TRANSACTION':
    return {
        ...state,
        calories: [action.playload, ...state.calories]
    }
    default :
    return state;
}
}