export const formatTime = timeInSeconds => {
    let isNegative = timeInSeconds < 0;
    timeInSeconds = Math.abs(timeInSeconds);

    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds - minutes * 60;

    minutes = (minutes >= 10 ? "" : "0") + minutes;
    seconds = (seconds >= 10 ? "" : "0") + seconds;

    return (isNegative ? "-" : "") + minutes + ":" + seconds;
};