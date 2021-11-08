let kebab = document.querySelector('.kebab'),
    middle = document.querySelector('.middle'),
    cross = document.querySelector('.cross'),
    dropdown = document.querySelector('.dropdown');

kebab.addEventListener('click', function() {
    middle.classList.toggle('active');
    cross.classList.toggle('active');
    dropdown.classList.toggle('active');
})
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

function weeklyFetch() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            const workArr = data.slice(0, 1, 3);
            const playArr = data.slice(1, 2, 3);
            const exerciseArr = data.slice(3, 4, 3);
            const studyArr = data.slice(2, 3, 3);
            const socialArr = data.slice(4, 5, 3);
            const selfCareArr = data.slice(5, 6, 3);
            console.log(selfCareArr);
            console.log(socialArr);
            console.log(studyArr);
            console.log(exerciseArr);
            console.log(playArr);
            console.log(workArr);
            for (data of workArr) {
                const workCurrentTime = data.timeframes.weekly.current;
                const workPreviousTime = data.timeframes.weekly.previous;
                workCurrent.innerHTML = `${workCurrentTime}Hrs`;
                workPrevious.innerHTML = `${workPreviousTime}Hrs`;
            }
            for (data of playArr) {
                const playCurrentTime = data.timeframes.weekly.current;
                const playPreviousTime = data.timeframes.weekly.previous;
                playCurrent.innerHTML = `${playCurrentTime}Hrs`;
                playPrevious.innerHTML = `${playPreviousTime}Hrs`;
            }
            for (data of exerciseArr) {
                const exerciseCurrentTime = data.timeframes.weekly.current;
                const exercisePreviousTime = data.timeframes.weekly.previous;
                exerciseCurrent.innerHTML = `${exerciseCurrentTime}Hrs`;
                exercisePrevious.innerHTML = `${exercisePreviousTime}Hrs`;
            }
            for (data of studyArr) {
                const studyCurrentTime = data.timeframes.weekly.current;
                const studyPreviousTime = data.timeframes.weekly.previous;
                studyCurrent.innerHTML = `${studyCurrentTime}Hrs`;
                studyPrevious.innerHTML = `${studyPreviousTime}Hrs`;
            }
            for (data of socialArr) {
                const socialCurrentTime = data.timeframes.weekly.current;
                const socialPreviousTime = data.timeframes.weekly.previous;
                socialCurrent.innerHTML = `${socialCurrentTime}Hrs`;
                socialPrevious.innerHTML = `${socialPreviousTime}Hrs`;
            }
            for (data of selfCareArr) {
                const selfCareCurrentTime = data.timeframes.weekly.current;
                const selfCarePreviousTime = data.timeframes.weekly.previous;
                selfCareCurrent.innerHTML = `${selfCareCurrentTime}Hrs`;
                selfCarePrevious.innerHTML = `${selfCarePreviousTime}Hrs`;
            }
        })

    .catch(error => console.log(error));
}

function monthlyFetch() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            const workArr = data.slice(0, 1, 3);
            const playArr = data.slice(1, 2, 3);
            const exerciseArr = data.slice(3, 4, 3);
            const studyArr = data.slice(2, 3, 3);
            const socialArr = data.slice(4, 5, 3);
            const selfCareArr = data.slice(5, 6, 3);
            console.log(selfCareArr);
            console.log(socialArr);
            console.log(studyArr);
            console.log(exerciseArr);
            console.log(playArr);
            console.log(workArr);
            for (data of workArr) {
                const workCurrentTime = data.timeframes.monthly.current;
                const workPreviousTime = data.timeframes.monthly.previous;
                workCurrent.innerHTML = `${workCurrentTime}Hrs`;
                workPrevious.innerHTML = `${workPreviousTime}Hrs`;
            }
            for (data of playArr) {
                const playCurrentTime = data.timeframes.monthly.current;
                const playPreviousTime = data.timeframes.monthly.previous;
                playCurrent.innerHTML = `${playCurrentTime}Hrs`;
                playPrevious.innerHTML = `${playPreviousTime}Hrs`;
            }
            for (data of exerciseArr) {
                const exerciseCurrentTime = data.timeframes.monthly.current;
                const exercisePreviousTime = data.timeframes.monthly.previous;
                exerciseCurrent.innerHTML = `${exerciseCurrentTime}Hrs`;
                exercisePrevious.innerHTML = `${exercisePreviousTime}Hrs`;
            }
            for (data of studyArr) {
                const studyCurrentTime = data.timeframes.monthly.current;
                const studyPreviousTime = data.timeframes.monthly.previous;
                studyCurrent.innerHTML = `${studyCurrentTime}Hrs`;
                studyPrevious.innerHTML = `${studyPreviousTime}Hrs`;
            }
            for (data of socialArr) {
                const socialCurrentTime = data.timeframes.monthly.current;
                const socialPreviousTime = data.timeframes.monthly.previous;
                socialCurrent.innerHTML = `${socialCurrentTime}Hrs`;
                socialPrevious.innerHTML = `${socialPreviousTime}Hrs`;
            }
            for (data of selfCareArr) {
                const selfCareCurrentTime = data.timeframes.monthly.current;
                const selfCarePreviousTime = data.timeframes.monthly.previous;
                selfCareCurrent.innerHTML = `${selfCareCurrentTime}Hrs`;
                selfCarePrevious.innerHTML = `${selfCarePreviousTime}Hrs`;
            }
        })
}


weeklyFetch();