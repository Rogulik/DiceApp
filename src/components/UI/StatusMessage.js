import React,{ useContext } from 'react'
import { GameContext } from '../../context/game-context'
import '../../styles/StatusMessage.scss'

const StatusMessage = ({ scoreToWin }) => {
    const { game } = useContext(GameContext)
    return (
        <div
        style={game.round === 30 || game.score >= scoreToWin ? {display:"none"} : {display:"flex"}}
        className="board__status-message-container"
        >
           {(() => {
               if(game.statusGame === "win"){
                   return (
                       <p className="board__status-message">Great guess!</p>
                   )
               }else if(game.statusGame === "lost"){
                   return (
                       <p className="board__status-message">Oops, Wrong answer!</p>
                   )
               }else if(game.statusGame === "draw"){
                   return (
                       <p className="board__status-message">It's a draw!</p>
                   )
               }else{
                   return(
                   <p className="board__status-message">Start!</p>
                   )
               }
           })()}
       </div>
    )
}

export default StatusMessage
