import { useEffect, useState } from "react";
import { getfeedback } from '../Service/ApiService';

export const useFeedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        getfeedback()
        .then(res => {
            setFeedbacks(res)
        })
    }, []);

    return {
        feedbacks,
        setFeedbacks,
    };
}
