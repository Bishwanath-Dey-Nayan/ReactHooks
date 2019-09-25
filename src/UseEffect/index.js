import React,{useState,useEffect} from 'react';

function UseEffect ()
{
    const [count,setCount] = useState(0);

    useEffect(() =>
    {
        document.title = `you clicked ${count} times`
    })

    return(<div>
        <button onClick={() => setCount(prev => prev+1)}>click</button>
        <h1>you clicked {count} times.</h1>
    </div>)
}

export default UseEffect;