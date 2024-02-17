import { useEffect, useState } from 'react'
import { getcolaboradores } from '../Service/ApiService'

export const useColaboradores = () => {
    const [colaboradores, setColaboradores] = useState([]);
    
    useEffect(() => {
        getcolaboradores()
        .then(res => {
            setColaboradores(res)
        })
      }, []);
      
    return {
        colaboradores,
        setColaboradores,
    };
}
