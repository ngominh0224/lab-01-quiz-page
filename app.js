// import functions and grab DOM elements
// import { takeQuiz } from './utils.js';
import { countsAsAYes } from './utils.js';
const quizButton = document.getElementById('quiz-button');
const secretDiv = document.getElementById('secret-div');
// initialize state
let correctAnswers = 0;
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    // alert('Prepare yourself Summoner!');

    // const confirmation = confirm('Do you wish to proceed?');


    // if (!confirmation) {
    //     return;
    // }

    // const firstName = prompt('Choose your Summoner Name! (First Name)');
    // const lastName = prompt('Choose your Summoner Name! (Last Name)');

    // const firstAnswer = prompt('Was League of Legends inspired by Starcraft?');

    // if (countsAsAYes(firstAnswer)) {

    // } else if (countsAsAYes(secondAnswer)) {
    //     correctAnswers++;
    //     const secondAnswer = prompt('Do you win by destroying your enemys nexus?');

    // } else (countsAsAYes(thirdAnswer)) {
    //     correctAnswers++;
    //     const thirdAnswer = prompt('Did the game regularly peak at 8 million concurrent players in 2019?');


    //     if (correctAnswers === 0) {
    //         const resultsString = correctAnswers + '?!' + ' I do not think you are cut out for this,' + ' ' + firstName + ' ' + lastName + ' . ';
    //         secretDiv.textContent = resultsString;
    //         console.log(correctAnswers);

    //     } else if (correctAnswers === 1) {
    //         const resultsString1 = ' Only ' + correctAnswers + ' correct? ' + ' Get back to training ' + firstName + ' ' + lastName + ' ! ';
    //         secretDiv.textContent = resultsString1;

    //     } else if (correctAnswers === 2) {
    //         const resultsString2 = correctAnswers + ' correct! ' + ' Meh, you will make do ' + firstName + ' ' + lastName + ' . ';
    //         secretDiv.textContent = resultsString2;

    //     } else {
    //         const resultsString3 = ' You got ' + correctAnswers + ' correct! Great work ' + firstName + ' ' + lastName + ', now onwards to the Rift! ';
    //         secretDiv.textContent = resultsString3;
    //         console.log(correctAnswers);
    //     }
    // });