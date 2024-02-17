import { useEffect, useState } from 'react';
import { getgerente } from '../Service/ApiService';

export const useGerentes = () => {
    const [gerentes, setGerentes] = useState([]);
    
    useEffect(() => {
        getgerente()
        .then(res => {
            setGerentes(res)
        })
      }, []);

    return {
        gerentes,
        setGerentes,
    };
}

