import React, {useEffect, useState} from 'react'; 
import axios from "axios"; 


const UseEffectTutorial = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0); 


    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setData(response.data[0]);
        });
    });

    return <div> 
       {data.email}
       <h1>{count}</h1>
       <button onClick = { ()=>{
           setCount(count + 1);
       }}>Increment</button>
    </div>
}


export default UseEffectTutorial; 

