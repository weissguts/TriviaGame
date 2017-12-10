var timeStart = 30;
var timerElem = document.getElementById('countdownId');
var timerId = setInterval(countdown, 1000);

$( document ).ready(function() {
    $('#start-game-main').hide();
});


//Method to hide Start Button to begin game.
$('#game-start').click(function () {
    $('#game-start').hide();
    $('#start-game-main').show();

});

function countdown() {
    if (timeStart == 0) {
        clearTimeout(timerId);
        //dosomething
    } else {
        timerElem.innerHTML = timeStart + ' seconds remaining';
        timeStart--;
    }

};