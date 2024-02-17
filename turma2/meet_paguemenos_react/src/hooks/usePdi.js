import { useEffect, useState } from "react";
import { getpdi } from '../Service/ApiService';

export const usePdi = () => {
    const [pdis, setPdi] = useState([]);

    useEffect(() => {
        getpdi()
        .then(res => {
            setPdi(res)
        })
    }, []);

    return {
        pdis,
        setPdi,
    };
}
