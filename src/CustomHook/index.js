import React,{useState} from 'react';
import DocumentTitle from './DocumentTitle';



function CustomHook () 
{
    const [count,setCount] = useState(0);
    DocumentTitle(count);


    return(<div>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>)
}

export default CustomHook;