import { createContext, useState, useEffect, useReducer } from 'react'
import { gameReducer } from '../reducers/gameReducer'


export const GameContext = createContext()

const GameContextProvider = ({children}) => {
    //for checking if the dice was fetch from the API
    const [isLoading, setIsLoading] = useState(false)
    // for setting up custom error if there would be any problem getting data from API
    const [errorContainer, setErrorContainer] = useState("")

    //get the history from local storage if it is not there set empty array
    const [history, setHistory] = useState(() => {
            const localData = localStorage.getItem('history')
            return localData ? JSON.parse(localData) : []
        }
    )
    
    //clear up entire state in local storage as well as in game reducer and history state
    const newGame = () => {
        dispatch({
            type: "NEW_GAME",
        })
        setHistory([])
        localStorage.clear()
        fetchDice(true)
    }

    //get all of the game details from local storage if it not there set the object with initial values
    const [game, dispatch] = useReducer(
        gameReducer,
        {},
        () => {
            const localData = localStorage.getItem('game')
        return localData ? JSON.parse(localData) : {
                round: 0,
                userDice: 0,
                nextDice: 0,
                score: 0,
                statusGame: "",
                buttonType: "",
                isLoading: true
            }
        }
    )

    //special function for fetching dice where only on first initial I want to get two dices and after clicking
    //buttons I want to fetch only one dice for nextDice property which will replace the user dice every each round
    const fetchDice = async (isInitialFetch = false) => {
        setIsLoading(true)
        try {
            let response = await fetch(`http://roll.diceapi.com/json/${isInitialFetch ? "2d6" : "d6"}`)
            response = await response.json()
            
            if(isInitialFetch){
                dispatch({
                    type: "ADD_USER_DICE",
                    game:{
                        userDice: response.dice[0].value,
                    }
                })
                dispatch({
                    type: "ADD_NEXT_DICE",
                    game:{
                        nextDice: response.dice[1].value
                    }
                })
            } else {
                dispatch({
                    type: "ADD_NEXT_DICE",
                    game:{
                        nextDice: response.dice[0].value
                    }
                })
            }

            setIsLoading(false)

        } catch (error) {
            console.error(error)
            setErrorContainer("Something Went Wrong!")
        }
     }  
     
    //saving the present objact game in local storage
    useEffect(() => {
        localStorage.setItem('game',JSON.stringify(game))
    },[game])

    //saving the whole history of the game
    useEffect(() => {
        localStorage.setItem('history',JSON.stringify(history))
    },[history])
    

    return (
        <GameContext.Provider value={{history,setHistory,isLoading,game,dispatch,fetchDice,errorContainer,newGame}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider