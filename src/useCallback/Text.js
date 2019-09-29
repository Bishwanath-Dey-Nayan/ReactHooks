import React from 'react';

function Text ()
{
    return(<div>
        <h3>Parent Component</h3>
    </div>)
}

export default React.memo(Text);