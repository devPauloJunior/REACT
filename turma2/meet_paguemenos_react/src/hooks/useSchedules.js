import { useEffect, useState, useCallback } from "react";
import { getschedule } from '../Service/ApiService';

export const useSchedules = () => {
    
    
    const [schedules, setSchedules] = useState([]);

    // useEffect(() => {
    //     getschedule()
    //     .then(res => {
    //         setSchedules(res)
    //     })
    // }, []);

    const listSchedule = useCallback(() => {
        getschedule()
        .then(res => {
            setSchedules(res)
        })
    }, [schedules]);
    
    useEffect(() => {
        listSchedule();
    }, [listSchedule]);

    return {
        schedules,
        setSchedules,
    };
}
