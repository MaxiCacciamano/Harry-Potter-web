const initialState = {
    characters: []
}

export default function rootReducer(state = initialState, actions ) {
    console.log(actions.payload)
    switch(actions.type){
        case "GET_CHARACTERS":
            return{
                ...state,
                characters: actions.payload
            }

        default:
            return state
    }
}