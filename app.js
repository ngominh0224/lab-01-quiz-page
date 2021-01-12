// import functions and grab DOM elements
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
    if (firstAnswer.charAt(0).toUpperCase() === 'Y') {

    }
    else {

    }


});