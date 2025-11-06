import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import {useState} from 'react';


function App() {

  const[isActiverr,setisActive]=useState('X');
  const[gameTurns,setGameTurns]=useState([]);
  function handleselectsquare(rowidx,colidx){
    setisActive((curr)=>curr==="X"?"O":"X");
    setGameTurns((prev)=>{
      let currPlayer="X";
      if(prev.length>0 && prev[0].playerSymbol==="X"){
        currPlayer="O";
      }
      const updated=[{square:{row:rowidx,col:colidx},playerSymbol:currPlayer},...prev]
      return updated;
    })
  }


  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={isActiverr==='X'} />
        <Player name="Player 2" symbol="Y" isActive={isActiverr==='O'}/>
      </ol>
      <GameBoard onSelect={handleselectsquare} turns={gameTurns}/>
    <Log />
    </div>
    
  )
}

export default App
