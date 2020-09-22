const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const nextYears = new Date().getFullYear()+1;
const newYears = "1 Jan "+nextYears;
const newYearsDate = new Date(newYears);

function countdown(){
    const currentDate = new Date();
    const totalSeconds = (newYearsDate-currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) %60;
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hour);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time; 
}
countdown();

setInterval(countdown,1000);