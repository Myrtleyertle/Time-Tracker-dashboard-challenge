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

function weeklyFetch() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            const workArr = data.slice(0, 1, 3);
            const playArr = data.slice(1, 2, 3);
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
        })

    .catch(error => console.log(error));
}
weeklyFetch();