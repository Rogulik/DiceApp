
export const gameReducer = (state,action) => {
    switch(action.type){
        case "ADD_USER_DICE":
            return{
                ...state,
                userDice: action.game.userDice,
                isLoading: false
            }
        case "ADD_NEXT_DICE":
            return{
                ...state,
                nextDice: action.game.nextDice,
                isLoading: false
            }
        case "SET_ROUND":
            return {
                ...state,
                round: action.game.round,
                isLoading: false
            }
        case "SET_SCORE":{
            return {
                ...state,
                score: Number(action.game.score.toFixed(1)),
                isLoading: false
            }
        }
        case "SET_STATUS_GAME":
            return {
                ...state,
                statusGame: action.game.statusGame,
                isLoading: false
            }
        case "SET_BUTTON_TYPE":
            return {
                ...state,
                buttonType: action.game.buttonType,
                isLoading: false
            }
        case "NEW_GAME":
            return {
                round: 0,
                userDice: 0,
                nextDice: 0,
                score: 0,
                statusGame: "",
                buttonType: "",
                isLoading: false
            }
    }
}