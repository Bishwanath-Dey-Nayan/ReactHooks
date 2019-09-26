import React from 'react';
import ComponentC from './ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App1()
{
    return(<div>
        <UserContext.Provider >
            <ChannelContext.Provider>
                <ComponentC />
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>)
}

export default App1;