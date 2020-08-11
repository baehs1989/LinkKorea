const initialState = {
    items : []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            console.log(action)
            console.log(state)
            return {
                ...state,
                items:[...state.items, action.item]
            }
        default:
            return state
    }
}


export default reducer