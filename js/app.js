var timeStart = 30;
var timerElem = document.getElementById('countdownId');
var correct = 0;
var incorrect = 0;
var timerId;
var finGame = document.getElementById('finished-game');

$( document ).ready(function() {
    $('#start-game-main').hide();
    $('#finished-game').hide();
});


//Method to hide Start Button to begin game.
$('#game-start').click(function () {
    $('#game-start').hide();
    $('#start-game-main').show();
    timerId = setInterval(countdown, 1000);

});

function countdown() {

    if (timeStart == 0) {
        timerElem.innerHTML = 'Times up!';
        clearTimeout(timerId);
        finGame.innerHTML = '<h3>Correct</h3> ' + correct + '<br>' + '<h3>Incorrect</h3> ' + incorrect;
        $('#finished-game').show();


    } else {
        timerElem.innerHTML = timeStart + ' seconds remaining';
        timeStart--;

    }

};

function answers(question) {
    if (question == 1) {

        if (document.getElementById('Austin').checked == true) {
            correct++;
        } else {
            incorrect++;
        }
    }

    if (question == 2) {

        if (document.getElementById('SantaFe').checked == true) {
            correct++;
        } else {
            incorrect++;
        }
    }

    if (question == 3) {

        if (document.getElementById('Phoenix').checked == true) {
            correct++;
        } else {
            incorrect++;
        }
    }

    if (question == 4) {

        if (document.getElementById('Sacramento').checked == true) {
            correct++;
        } else {
            incorrect++;
        }
    }

}