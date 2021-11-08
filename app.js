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

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const workArr = data.slice(0, 1, 3);
        console.log(workArr);
        for (data of workArr) {
            const workTime = data.timeframes.weekly.current;
            workCurrent.innerHTML = `${workTime}Hrs`;
        }

    })

.catch(error => console.log(error));