import React from 'react';


function Counter ({text,count})
{
    console.log('rendering the count',text);
    return(<div>
        {text} - {count}
    </div>)
}

export default React.memo(Counter);