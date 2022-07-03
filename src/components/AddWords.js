import { useState } from "react";

function AddWords(props) {
    const [word, setWord] = useState("");
    const [message, setMessage] = useState("");
        
    const add = () => {
        if( !props.array.includes(word)) {
            props.array.push(word);
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
            <button onClick = {add} >Add</button>
            <p style={{color: "green"}}>{message}</p>
            {props.array.map((id) => <li key={id}>{id}</li>)}
        </div>
    )
}

export default AddWords;
