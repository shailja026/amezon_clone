export const initialState = {
    card : []
}

const reducer = (state , action) => {

    switch(action.type){
        case "ADDING":
            return{
                ...state,
                card : [...state.card , action.item]

            }
            default : 
            return state
    }
   

}
export default reducer