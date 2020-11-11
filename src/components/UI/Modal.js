import React, { useContext } from 'react'
import Modal from 'react-modal';
import { GameContext } from '../../context/game-context';
import '../../styles/Modal.scss'

 
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
const CustomModal = ({ isPreviousGame, setIsPreviousGame }) => {
  const { newGame } = useContext(GameContext)
 
 
  const closeModal = (withNewGame) => {
      if(withNewGame){
          newGame()
      }
    setIsPreviousGame(false)
  }

 
    return (
      <div>
        <Modal
          isOpen={isPreviousGame}
          className="modal__content"
          contentLabel="Do You want continue the game"
        >
            <h2 className="heading-4">Would You like continue where You left off or Start a new game?</h2>
            <div>
                <button className="btn modal__btn" onClick={e => closeModal(false)}>Continue</button>
                <button className="btn modal__btn" onClick={e => closeModal(true)}>New game</button>
            </div>
         
        </Modal>
      </div>
    );
}

export default CustomModal