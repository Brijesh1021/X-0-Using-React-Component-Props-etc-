const initialGrid=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelect,turns}){
    let gameboard=initialGrid;
    for(const turn of turns){//turn = {square,playeSymbol} whereas square = {row,col}
        const {square,playerSymbol}=turn;
        const{row,col}=square;
        gameboard[row][col]=playerSymbol;
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
    return (
        <ol id="game-board">
            {gameboard.map((row,rowidx)=>(
                <li key={rowidx}>
                    <ol>
                        {row.map((col,colidx)=>(
                            <li key={colidx}>
                                <button onClick={()=>onSelect(rowidx,colidx)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}