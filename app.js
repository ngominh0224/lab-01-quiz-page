// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';
const quizButton = document.getElementById('quiz-button');
const secretDiv = document.getElementById('secret-div');
// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    alert('Prepare yourself Summoner!');

    const confirmation = confirm('Do you wish to proceed?');


    if (!confirmation) {
        return;
    }

    const firstName = prompt('Choose your Summoner Name! (First Name)');
    const lastName = prompt('Choose your Summoner Name! (Last Name)');

    const firstAnswer = prompt('Was League of Legends inspired by Starcraft?');
    let correctAnswers = 0;
    if (countsAsAYes(firstAnswer)) {

    }
    else {
        correctAnswers++;
    }

    const secondAnswer = prompt('Do you win by destroying your enemys nexus?');
    if (countsAsAYes(secondAnswer)) {
        correctAnswers++;

    }
    else {

    }

    const thirdAnswer = prompt('Did the game regularly peak at 8 million concurrent players in 2019?');
    if (countsAsAYes(thirdAnswer)) {
        correctAnswers++;

    }
    else {

    }

    const resultsString = correctAnswers + '?!' + ' I do not think you are cut out for this, Summoner. ';
    const resultsString1 = ' Only ' + correctAnswers + ' correct? ' + ' Get back to training! ';
    const resultsString2 = correctAnswers + ' correct! ' + ' Meh, you will make do. ';
    const resultsString3 = ' You got ' + correctAnswers + ' correct! Great work Summoner, now onwards to the Rift! ';

    if (correctAnswers === 0) {
        secretDiv.textContent = resultsString;
        console.log(correctAnswers);
    }

    else if (correctAnswers === 1) {
        secretDiv.textContent = resultsString1;
    }
    else if (correctAnswers === 2) {
        secretDiv.textContent = resultsString2;
    }
    else {
        secretDiv.textContent = resultsString3;
        console.log(correctAnswers);
    }



});