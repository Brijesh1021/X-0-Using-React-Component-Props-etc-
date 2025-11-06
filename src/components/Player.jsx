import {useState} from 'react';

export default function Player({name,symbol,isActive}){
    const [isedit,setedit]=useState(false);
    const[newestName,setNewestname]=useState(name);

    function btnclick(){
        setedit(edit=>!edit);
    }
    function setName(event){
        setNewestname(event.target.value);
    }

    let setname=<span className="player-name">{newestName}</span>;

    if(isedit){
         setname=<input type='text' required value={newestName} onChange={(setName)}></input>
    }
    return (
        <li className={isActive?'active': undefined}> 
            <span className="player">
                {setname}
                <span className="player-symbol">{symbol}</span>
            </span>
          <button onClick={btnclick}>{isedit?"Save":"Edit"}</button>
        </li>
    )
}