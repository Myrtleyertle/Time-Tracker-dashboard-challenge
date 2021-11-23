const workCurrent = document.querySelector('[data-work-time]')
const workPrevious = document.querySelector('[data-work-time-previous]')
const playCurrent = document.querySelector('[data-play-current-time]')
const playPrevious = document.querySelector('[data-play-previous-time]')
const exerciseCurrent = document.querySelector('[data-exercise-current-time]')
const exercisePrevious = document.querySelector('[data-exercise-previous-time]')
const studyCurrent = document.querySelector('[data-study-current-time]')
const studyPrevious = document.querySelector('[data-study-previous-time]')
const socialCurrent = document.querySelector('[data-social-current-time]')
const socialPrevious = document.querySelector('[data-social-previous-time]')
const selfCareCurrent = document.querySelector('[data-self-care-current-time]')
const selfCarePrevious = document.querySelector('[data-self-care-previous-time]')
const daily = document.querySelector('[data-daily-tracker]');
const weekly = document.querySelector('[data-weekly-tracker]');
const monthly = document.querySelector('[data-monthly-tracker]');
const dailyButton = document.querySelector('[data-daily-drop-down-button]');
const weeklyButton = document.querySelector('[data-weekly-drop-down-button]');
const monthlyButton = document.querySelector('[data-monthly-drop-down-button]');

let work = [];
let play = [];
let exercise = [];
let study = [];
let social = [];
let selfCare = [];




function weeklyFetch() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            workCurrent.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
            workPrevious.innerHTML = `Last week-${data[0].timeframes.weekly.previous}hrs`;
            playCurrent.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
            playPrevious.innerHTML = `Last week-${data[1].timeframes.weekly.previous}hrs`;
            exerciseCurrent.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
            exercisePrevious.innerHTML = `Last week-${data[2].timeframes.weekly.previous}hrs`;
            studyCurrent.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
            studyPrevious.innerHTML = `Last week-${data[3].timeframes.weekly.previous}hrs`;
            socialCurrent.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
            socialPrevious.innerHTML = `Last week-${data[4].timeframes.weekly.previous}hrs`;
            selfCareCurrent.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
            selfCarePrevious.innerHTML = `Last week-${data[5].timeframes.weekly.previous}hrs`;
        })

    .catch(error => console.log(error));
}

function monthlyFetch() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            workCurrent.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
            workPrevious.innerHTML = `Last month-${data[0].timeframes.monthly.previous}hrs`;
            playCurrent.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
            playPrevious.innerHTML = `Last month-${data[1].timeframes.monthly.previous}hrs`;
            exerciseCurrent.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
            exercisePrevious.innerHTML = `Last month-${data[2].timeframes.monthly.previous}hrs`;
            studyCurrent.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
            studyPrevious.innerHTML = `Last month-${data[3].timeframes.monthly.previous}hrs`;
            socialCurrent.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
            socialPrevious.innerHTML = `Last month-${data[4].timeframes.monthly.previous}hrs`;
            selfCareCurrent.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
            selfCarePrevious.innerHTML = `Last month-${data[5].timeframes.monthly.previous}hrs`;

        })
}

function dailyFetch() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            workCurrent.innerHTML = `${data[0].timeframes.daily.current}hrs`;
            workPrevious.innerHTML = `Last day-${data[0].timeframes.daily.previous}hrs`;
            playCurrent.innerHTML = `${data[1].timeframes.daily.current}hrs`;
            playPrevious.innerHTML = `Last day-${data[1].timeframes.daily.previous}hrs`;
            exerciseCurrent.innerHTML = `${data[2].timeframes.daily.current}hrs`;
            exercisePrevious.innerHTML = `Last day-${data[2].timeframes.daily.previous}hrs`;
            studyCurrent.innerHTML = `${data[3].timeframes.daily.current}hrs`;
            studyPrevious.innerHTML = `Last day-${data[3].timeframes.daily.previous}hrs`;
            socialCurrent.innerHTML = `${data[4].timeframes.daily.current}hrs`;
            socialPrevious.innerHTML = `Last day-${data[4].timeframes.daily.previous}hrs`;
            selfCareCurrent.innerHTML = `${data[5].timeframes.daily.current}hrs`;
            selfCarePrevious.innerHTML = `Last day-${data[5].timeframes.daily.previous}hrs`;

        })
}




daily.addEventListener('click', dailyFetch);
weekly.addEventListener('click', weeklyFetch);
monthly.addEventListener('click', monthlyFetch);

weeklyFetch();