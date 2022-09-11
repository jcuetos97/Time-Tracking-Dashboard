

const dailybttn = document.getElementById('daily');
const weeklybttn = document.getElementById('weekly');
const monthlybttn = document.getElementById('monthly');







dailybttn.addEventListener('click', function daily() {
    
    document.getElementById('hour-work').innerHTML= "5hrs";
    document.getElementById('previous-work').innerHTML= "Previous - 7hrs";

    document.getElementById('hour-play').innerHTML= "1hrs";
    document.getElementById('previous-play').innerHTML= "Previous - 2hrs";

    document.getElementById('hour-study').innerHTML= "0hrs";
    document.getElementById('previous-study').innerHTML= "Previous - 1hrs";

    document.getElementById('hour-study').innerHTML= "0hrs";
    document.getElementById('previous-study').innerHTML= "Previous - 1hrs";

});