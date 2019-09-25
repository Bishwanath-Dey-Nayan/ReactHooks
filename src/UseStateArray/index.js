import React,{useState} from 'react'

function UseStateArray()
{
    const [arr,setArr] = useState([]);

    const addItem = () =>
    {
        setArr([...arr,{
            id:arr.length,
            value:Math.floor(Math.random()*10)+1
        }])
    } 

    return(<div>
        <button onClick={addItem}>Add Number</button>
       { arr.map(arr =>
        {
            return(<li key={arr.id}>{arr.value}</li>)
        })}
    </div>)
}
export default UseStateArray;