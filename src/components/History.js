import React, { useContext } from 'react'
import { GameContext } from '../context/game-context'
import '../styles/History.scss'

const History = () => {
    const { history } = useContext(GameContext)
    return (
        <div className="history__container">
             {history.map((item) => (
                 <div key={item.round} className="history__item">
                    <h3 className="heading-3 history__item-header">Round: {item.round}</h3>
                    <p className="history__item-statistics">score: {item.score}</p>
                    <p className="history__item-statistics">status: {item.statusGame}</p>
                    <p className="history__item-statistics">display dice: {item.userDice}</p>
                    <p className="history__item-statistics">hided dice: {item.nextDice}</p>
                    <p className="history__item-statistics">bet: {item.buttonType}</p>
                </div>
             ))}
        </div>
    )
}

export default History
 