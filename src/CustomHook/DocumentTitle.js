import {useEffect} from 'react'

function DocumentTitle(count)
{
    useEffect(() =>
    {
        document.title = count;
    },[count])
}

export default DocumentTitle;