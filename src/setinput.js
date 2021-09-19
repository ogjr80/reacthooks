import React, {useState}  from "react"; 


const Setinput = () => {
    const [inputValue, setInputValue] = useState('Gideon'); 
    
    return (
        <div> 
            <input onChange={e => setInputValue(e.target.value)}></input>
            {inputValue}        
        </div>
    )
}

export default Setinput; 
