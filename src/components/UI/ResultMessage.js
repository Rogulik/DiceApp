import React, { useContext } from 'react'
import { GameContext } from '../../context/game-context'
import '../../styles/ResultMessage.scss'

const ResultMessage = ({ scoreToWin }) => {
   const { game } = useContext(GameContext)
    return (
             <div>
                {game.round === 30 && game.score < scoreToWin && (
                    <h2 className="heading-2 board__header--looser">You Lost! Please try again!</h2>
                )}
                {game.round <= 30 && game.score === scoreToWin && (
                    <h2 className="heading-2 board__header--winner">You win!</h2>
                )}
            </div>
    )
}

export default ResultMessage
