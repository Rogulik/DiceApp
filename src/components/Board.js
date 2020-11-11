import React, { useState, useEffect, useContext } from 'react'
import Buttons from './UI/Buttons'
import StatusMessage from './UI/StatusMessage'
import RoundInfo from './UI/RoundInfo'
import { GameContext } from '../context/game-context'
import '../styles/Board.scss'
import ResultMessage from './UI/ResultMessage'
import DiceImage from './UI/DiceImage'


const Board = () => {
    const { game, fetchDice } = useContext(GameContext)
    const [scoreToWin] = useState(2)
    
    //initial fetch 
    useEffect(() => {
        if(game.round === 0 && game.userDice === 0){
            fetchDice(true)
        }
    },[game.round])

    return (
        <div className="board__container">
            <StatusMessage scoreToWin={scoreToWin}/>
            <RoundInfo />
            <ResultMessage scoreToWin={scoreToWin}/>
            <DiceImage scoreToWin={scoreToWin}/>
           <Buttons scoreToWin={scoreToWin}/>
        </div>
    )
}

export default Board
