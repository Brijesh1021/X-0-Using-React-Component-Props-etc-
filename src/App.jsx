import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import GameOver from "./components/GameOver";
import {useState} from 'react';
import { WINNING_COMBINATIONS } from "./winning_combinations";

const initialGrid=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function activeElement(prev){
    let currPlayer="X";
    if(prev.length>0 && prev[0].playerSymbol==="X"){
      currPlayer="O";
    }
    return currPlayer;
  }

function settingGrid(gameTurns){
  let gameboard=initialGrid.map(arr=>[...arr]);
  for(const turn of gameTurns){//turn = {square,playeSymbol} whereas square = {row,col}
    const {square,playerSymbol}=turn;
    const{row,col}=square;
    gameboard[row][col]=playerSymbol;
  }
  return gameboard;
}

function gettingWinner(gameboard){
  let winner=null;
  for(const combination of WINNING_COMBINATIONS){
    let first=gameboard[combination[0].row][combination[0].column];
    let second=gameboard[combination[1].row][combination[1].column];
    let third=gameboard[combination[2].row][combination[2].column];

    if(first && first===second && first===third){
      winner=first;
    }
  }
  return winner;
}

function App() {
  const[gameTurns,setGameTurns]=useState([]);
  const isActiverr=activeElement(gameTurns);
  const gameboard=settingGrid(gameTurns);
  const winner=gettingWinner(gameboard);
  const draw=gameTurns.length===9 && !winner;

  function handleselectsquare(rowidx,colidx){
    setGameTurns((prev)=>{
      const currPlayer=activeElement(prev);
      const updated=[{square:{row:rowidx,col:colidx},playerSymbol:currPlayer},...prev]
      return updated;
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={isActiverr==='X'} />
        <Player name="Player 2" symbol="Y" isActive={isActiverr==='O'}/>
      </ol>
      {(winner || draw) && <GameOver winner={winner} restart={handleRestart} />}
      <GameBoard onSelect={handleselectsquare} board={gameboard}/>
    <Log turns={gameTurns} />
    </div>
    
  )
}

export default App;   


