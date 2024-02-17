import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [ idGerentes, SetIdGerentes ] = useState(0);
    const [ idColaboradores, SetIdColaboradores ] = useState(0);
    const [ nivelUser, setNivelUser ] = useState(0);
    
    const handleIdGerentes = (e) => {
        SetIdGerentes(e.target.value);
        setNivelUser(1)
    }
      
    const handleIdColaboradores = (e) => {
        SetIdColaboradores(e.target.value);
        setNivelUser(2)
    }

    return (
        <UserContext.Provider value={{ idGerentes, handleIdGerentes, idColaboradores, handleIdColaboradores, nivelUser }}> 
            { children }
        </UserContext.Provider>
    )
}

