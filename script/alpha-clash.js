// function play(){
// // step 1 : hide the home screen. to hide the screen add the class hidden to the home screen
// const homeScetion =document.getElementById('home-screen');
// homeScetion.classList.add('hidden');

// //Show the playground
// const playGroundSection =document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// // console.log(playGroundSection.classList);

// }

function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key;
    // console.log('Player Pressed', playerPressed);

    // stop the game if player pressed Esc
    if(playerPressed==='Escape'){
        gameOver();
    }
    // key player is expected to press;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    console.log(playerPressed, expectedAlphabet);
    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);




        // ------------------------------------
        // update score
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);



        // console.log(currentScore);
        // // 2. increase the score by One
        // const newScore = currentScore + 1;

        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // start a new round 
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed. you lost a life')


        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if (updatedLife === 0) {
            gameOver();
        }

        // ----------------------------------------
        // step 1: get the current life number 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step 2: reduce the life count 
        // const newLife = currentLife - 1;
        // // step 3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}
// capture keyboard button capture
document.addEventListener('keyup', handleKeyBoardButtonPress)


function continueGame() {
    // step-1 : generate a random alphabet 
    const alphabet = getARandomAlphabet();
    // step-2 : set randomly generated alphabet to the screen 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // step-3 : set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // Update final game score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    // 2. clear the last selected alphabet highlight
    const currentAlphabet = getTextElementById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}
