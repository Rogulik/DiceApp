import './styles/App.scss';
import './styles/typography.scss'
import Board from './components/Board'
import History from './components/History';
import Header from './components/Header';
import GameContextProvider from './context/game-context'
import CustomModal from './components/UI/Modal'
import { useState, useEffect } from 'react'

function App() {
  const [ isPreviousGame, setIsPreviousGame ] = useState(false)
  useEffect(() => {
    const localData = localStorage.getItem('game')
    if(JSON.parse(localData).round > 0){
      setIsPreviousGame(true)
    }
  },[])

  return (
    <div className="App">
      <GameContextProvider >
        <CustomModal isPreviousGame={ isPreviousGame } setIsPreviousGame={ setIsPreviousGame }/>
        <Header />
        <div className="main-content">
          <History />
          <Board />
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
