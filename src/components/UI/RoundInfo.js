import React, { useContext } from 'react'
import { GameContext } from '../../context/game-context'
import '../../styles/RoundInfo.scss'

const RoundInfo = () => {
   const { game } = useContext(GameContext)
    return (
        <div>
            <div className="board__summary">
              Remaining Rounds: {30 - game.round}
            </div>
            <div className="board__summary">
               Score: {game.score}
            </div>
        </div>
    )
}

export default RoundInfo
