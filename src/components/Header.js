import React from 'react'
import '../styles/Header.scss'

const Header = () => {
    return (
        <header className="header__container">
            <h1 className="heading-1">Dice game</h1>
            <p className="header__text">
            Guess if the next dice number will be higher or lower from the one displayed on the dice below.
            You win if You guess 20 times the right number in 30 rounds.
            </p>
        </header>
    )
}

export default Header
