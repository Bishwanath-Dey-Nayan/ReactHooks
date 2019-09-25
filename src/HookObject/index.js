import React,{useState} from 'react'

function HookObject()
{
    const [name,setName] = useState({firstName:'',lastName:''})
    return(<div>
        <input vlaue={name.firstName}
        type="text"
        onChange={e => setName({...name,firstName:e.target.value})} />
        <input
        type="text"
        onChange={e=>setName({...name,lastName:e.target.value})}
        />
        <h2>Name:{name.firstName}</h2>
        <h2>LastName:{name.lastName}</h2>
    </div>);
}

export default HookObject;