import data from '../../data.json' assert { type: 'json' };

console.log(JSON.stringify(data));

// Buttons
const dailybttn = document.getElementById('daily');
const weeklybttn = document.getElementById('weekly');
const monthlybttn = document.getElementById('monthly');

// Displays actual and previous daily stats
dailybttn.addEventListener('click', function daily() {
    
    document.getElementById('hour-work').innerHTML= "5hrs";
    document.getElementById('previous-work').innerHTML= "Previous - 7hrs";

    document.getElementById('hour-play').innerHTML= "1hrs";
    document.getElementById('previous-play').innerHTML= "Previous - 2hrs";

    document.getElementById('hour-study').innerHTML= "0hrs";
    document.getElementById('previous-study').innerHTML= "Previous - 1hrs";

    document.getElementById('hour-exercise').innerHTML= "1hrs";
    document.getElementById('previous-exercise').innerHTML= "Previous - 1hrs";

    document.getElementById('hour-social').innerHTML= "1hrs";
    document.getElementById('previous-social').innerHTML= "Previous - 3hrs";

    document.getElementById('hour-self-care').innerHTML= "0hrs";
    document.getElementById('previous-self-care').innerHTML= "Previous - 1hrs";

    dailybttn.style.color = 'white';
    weeklybttn.style.color = 'var(--Pale-Blue)';
    monthlybttn.style.color = 'var(--Pale-Blue)';
});
// Displays actual and previous weekly stats
weeklybttn.addEventListener('click', function daily() {
    
    document.getElementById('hour-work').innerHTML= "32hrs";
    document.getElementById('previous-work').innerHTML= "Previous - 36hrs";

    document.getElementById('hour-play').innerHTML= "10hrs";
    document.getElementById('previous-play').innerHTML= "Previous - 8hrs";

    document.getElementById('hour-study').innerHTML= "4hrs";
    document.getElementById('previous-study').innerHTML= "Previous - 7hrs";

    document.getElementById('hour-exercise').innerHTML= "4hrs";
    document.getElementById('previous-exercise').innerHTML= "Previous - 5hrs";

    document.getElementById('hour-social').innerHTML= "5hrs";
    document.getElementById('previous-social').innerHTML= "Previous - 10hrs";

    document.getElementById('hour-self-care').innerHTML= "2hrs";
    document.getElementById('previous-self-care').innerHTML= "Previous - 2hrs";

    dailybttn.style.color = 'var(--Pale-Blue)';
    weeklybttn.style.color = 'white';
    monthlybttn.style.color = 'var(--Pale-Blue)';
   
});
// Displays actual and previous monthly stats
monthlybttn.addEventListener('click', function daily() {
    
    document.getElementById('hour-work').innerHTML= "103hrs";
    document.getElementById('previous-work').innerHTML= "Previous - 128hrs";

    document.getElementById('hour-play').innerHTML= "23hrs";
    document.getElementById('previous-play').innerHTML= "Previous - 29hrs";

    document.getElementById('hour-study').innerHTML= "13hrs";
    document.getElementById('previous-study').innerHTML= "Previous - 19hrs";

    document.getElementById('hour-exercise').innerHTML= "11hrs";
    document.getElementById('previous-exercise').innerHTML= "Previous - 18hrs";

    document.getElementById('hour-social').innerHTML= "21hrs";
    document.getElementById('previous-social').innerHTML= "Previous - 23hrs";

    document.getElementById('hour-self-care').innerHTML= "7hrs";
    document.getElementById('previous-self-care').innerHTML= "Previous - 11hrs";

    dailybttn.style.color = 'var(--Pale-Blue)';
    weeklybttn.style.color = 'var(--Pale-Blue)';
    monthlybttn.style.color = 'white';

});
