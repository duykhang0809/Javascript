const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;
function formatTime(seconds) {
    if (seconds <= 0) return '00:00:00';
    const hour = Math.floor(seconds / SECONDS_PER_HOUR);
    const minute = Math.floor((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
    const second = (seconds % SECONDS_PER_HOUR) % SECONDS_PER_MIN;
    const formatHour = `0${hour}`.slice(-2);
    const formatMinute = `0${minute}`.slice(-2);
    const formatSecond = `0${second}`.slice(-2);
    return `${formatHour}:${formatMinute}:${formatSecond}`;
}
console.log(formatTime(3800)); // Output: 01:03:20

