var timeStart = 30;
var timerElem = document.getElementById('countdownId');
var timerId = setInterval(countdown, 1000);
var correct = 0;
var incorrect = 0;
var finGame = document.getElementById('finished-game');

$( document ).ready(function() {
    $('#start-game-main').hide();
    // $('#finished-game').hide();
});


//Method to hide Start Button to begin game.
$('#game-start').click(function () {
    $('#game-start').hide();
    $('#start-game-main').show();

});

function countdown() {
    if (timeStart == 20) {
        clearTimeout(timerId);
        finGame.innerHTML = '<h3>Correct</h3> ' + correct + '<br>' + '<h3>Incorrect</h3> ' + incorrect;

    } else {
        timerElem.innerHTML = timeStart + ' seconds remaining';
        timeStart--;

        finGame.innerHTML = '<h3>Correct</h3> ' + correct + '<br>' + '<h3>Incorrect</h3> ' + incorrect;
    }

};

function answers() {
    if (document.getElementById('Austin').checked==true) {
        correct++;
    } else {
        incorrect++;
    }

    if (document.getElementById('Sacramento').checked==true) {
        correct++;
    } else {
        incorrect++;
    }

    if (document.getElementById('SantaFe').checked==true) {
        correct++;
    } else {
        incorrect++
    }

    if (document.getElementById('Tucson').checked==true) {
        correct++;
    } else {
        incorrect++;
    }
}