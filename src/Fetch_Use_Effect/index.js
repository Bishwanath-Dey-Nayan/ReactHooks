import React,{useState,useEffect} from 'react';
import axios from 'axios';

function DataFetch()
{
    const [post,setPost] = useState([]);
    useEffect(() =>
    {   
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>
            {
                setPost(res.data)
            })
        .catch(err =>
            {
                console.log(err)
            })
    },[])
    return(<div>
        {
            post.map((data) =>
            {
                return <li key={data.id}>{data.title}</li>
            })
        }
    </div>)
}

export default DataFetch;