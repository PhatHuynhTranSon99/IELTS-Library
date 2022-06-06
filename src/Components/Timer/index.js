import { formatTime } from "../../Helpers/Time";
import useCountDown from "../../Hooks/Time";

const Timer = ({ value, isNegative }) => {
    const textColor = isNegative ? "text-red-500" : "text-amber-500";

    return (
        <h2 className={`text-3xl font-semibold ${textColor} text-center`}>{value}</h2>
    );
};

const TimerWrapper = ({ time = 0 }) => {
    const timeRemaining = useCountDown(time);

    return (
        <Timer value={formatTime(timeRemaining)} 
            isNegative={timeRemaining < 0}/>
    );
};

export default TimerWrapper;