import React,{useState,useEffect} from 'react';


function HookMouse ()
{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMouseEvent = (e)=>
    {
        console.log('event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>
    {
        console.log('effect called')
        window.addEventListener('mousemove',logMouseEvent)
    },[])


    return(<div>
        <h2>setX-{x}  & setY-{y}</h2>
    </div>)

}

export default HookMouse;