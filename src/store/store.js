import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext(null);
const UserProvider = ({children}) =>{



    return(
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;

