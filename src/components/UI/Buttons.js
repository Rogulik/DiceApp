import React,{ useContext, useRef, useEffect } from 'react'
import { GameContext } from '../../context/game-context'
import '../../styles/Buttons.scss'

const Buttons = ({scoreToWin}) => {
    const { game, dispatch, setHistory, isLoading, fetchDice, errorContainer,newGame } = useContext(GameContext)
    const isInitialMount = useRef(true);

    //useEffect only on update of round in game
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
           game.round > 0 && setHistory(history => [game, ...history])

            dispatch({
                type: "ADD_USER_DICE",
                game:{
                    userDice: game.nextDice
                }
            })
         } 
    }, [game.round])


    const higherButton = () => {
        dispatch({
            type: "SET_ROUND",
            game:{
                round: game.round + 1
            }
        })
        dispatch({
            type: "SET_BUTTON_TYPE",
            game:{
                buttonType: "higher"
            }
        })
        
        if(game.userDice < game.nextDice){
            dispatch({
                type: "SET_STATUS_GAME",
                game:{
                    statusGame: "win"
                }
            })
           dispatch({
               type:"SET_SCORE",
               game:{
                   score: game.score + 0.1
               }
           })
        }else if(game.userDice > game.nextDice){
            dispatch({
                type: "SET_STATUS_GAME",
                game:{
                    statusGame: "lost"
                }
            })
        }else if(game.userDice === game.nextDice){
            dispatch({
                type: "SET_STATUS_GAME",
                game:{
                    statusGame: "draw"
                }
            })
        }
        
        fetchDice() 
    }


    const lowerButton = () => {
        dispatch({
            type: "SET_ROUND",
            game:{
                round: game.round + 1
            }
        })

        dispatch({
            type: "SET_BUTTON_TYPE",
            game:{
                buttonType: "lower"
            }
        })

        if(game.userDice < game.nextDice){
            dispatch({
                type: "SET_STATUS_GAME",
                game:{
                    statusGame: "lost"
                }
            })
         }else if(game.userDice > game.nextDice){
                dispatch({
                    type:"SET_SCORE",
                    game:{
                        score: game.score + 0.1
                    }
                })

                dispatch({
                    type: "SET_STATUS_GAME",
                    game:{
                        statusGame: "win"
                    }
                })
            }else if(game.userDice === game.nextDice){
                dispatch({
                    type: "SET_STATUS_GAME",
                    game:{
                        statusGame: "draw"
                    }
                })
            }
           
            fetchDice()
    }


    return (
        <div className="board__button-container">
            {errorContainer ? 
            (<p>{errorContainer}</p>) : (
                <>
                    <button 
                    className="btn"
                    disabled={isLoading}
                    onClick={higherButton}
                    style={game.round === 30 || game.score >= scoreToWin ? {display:"none"} : {display:"inline-block" , marginRight:"1rem"}}
                    >
                    Higher
                    </button>
                    <button
                    className="btn" 
                    disabled={isLoading} 
                    onClick={lowerButton} 
                    style={game.round === 30 || game.score >= scoreToWin ? {display:"none"} : {display:"inline-block"}}
                    >
                    Lower
                    </button>
                    <button
                    className="btn" 
                    onClick={newGame} 
                    style={ game.round === 30 || game.score >= scoreToWin ? {display:'inline-block'} : {display:"none"}}>
                    New Game
                    </button>
                </>
            )}
            
        </div>
    )
}

export default Buttons
