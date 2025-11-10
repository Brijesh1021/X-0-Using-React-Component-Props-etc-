export default function GameBoard({onSelect,board}){
    return (
        <ol id="game-board">
            {board.map((row,rowidx)=>(
                <li key={rowidx}>
                    <ol>
                        {row.map((col,colidx)=>(
                            <li key={colidx}>
                                <button onClick={()=>onSelect(rowidx,colidx)} disabled={col!==null}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

















//const[gameboard,setgameboard]=useState(initialGrid);
    /* function handler(row,col){
        setgameboard((prev)=>{
            const updateboard=[...prev.map(inner=>[...inner])]
            updateboard[row][col]=changes;
            return updateboard;
        })
        onSelect();
    } */