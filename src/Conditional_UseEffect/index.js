import React,{useState,useEffect} from 'react';

function ConditionalUseEffect ()
{
    const [count,setCount] = useState(0);
    const [name,setName] =useState('')

    useEffect(() =>
    {
        console.log('updating')
        document.title = `you clicked ${count} times`
    },[count]) //here the useEffect will update the document.title if the "count" value is changed

    return(<div>
        <input value={name} onChange={(e) =>setName(e.target.value)} />
        <button onClick={() => setCount(prev => prev+1)}>click</button>
        <h1>you clicked {count} times.</h1>
    </div>)
}

export default ConditionalUseEffect;