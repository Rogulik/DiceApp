import React, { useContext } from 'react'
import { GameContext } from '../../context/game-context'
import '../../styles/DiceImage.scss'
import '../../styles/loader.scss'

const DiceImage = ({ scoreToWin }) => {
    const {game, isLoading} = useContext(GameContext)
    return (
        <div className="dice__image-container">
            {//on initial load of reducer or every time we fetch new dice show loader before will load
            game.isLoading || isLoading ? (<div className="loader "></div>) :
             game.userDice > 0 && game.round < 30 && game.score < scoreToWin ? (
                    <img src={`http://roll.diceapi.com/images/poorly-drawn/d6/${game.userDice}.png`} alt="dice"/>
            ): ""}
        </div>
    )
}

export default DiceImage
