import { useState } from "react";

function AddWords({array}) {
    const [word, setWord] = useState("");
    const [message, setMessage] = useState("");
        
    const add = () => {
        if( !array.includes(word)) {
            array.push(word);
            setMessage("The word " + word + " was added!"); 
        } else {
            setMessage("The word " + word + " is already in the dictionary!");  
        }
    }

    return (
        <div >
            <input 
                type="text" 
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <button onClick = {add} >Add Word</button>
            <p style={{color: "green"}}>{message}</p>
            {array.map((id) => <li key={id}>{id}</li>)}
        </div>
    )
}

export default AddWords;
