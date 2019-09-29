import React from 'react';
import ComponentC from './ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App1()
{
    return(<div>
        <UserContext.Provider value={"User Context"}>
            <ChannelContext.Provider value={"Channel Context"}>
                <ComponentC />
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>)
}

export default App1;