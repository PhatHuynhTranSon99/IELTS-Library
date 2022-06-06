import { useState, useEffect } from "react";

function useCountDown(startTime) {
    const [time, setTime] = useState(startTime);

    //Set interval
    useEffect(() => {
        setInterval(onTimePassed, 1000);
    }, []);

    //Interval method
    const onTimePassed = () => {
        setTime(time => time - 1);
    };

    return time;
};

export default useCountDown;