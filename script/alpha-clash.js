// function play(){
// // step 1 : hide the home screen. to hide the screen add the class hidden to the home screen
// const homeScetion =document.getElementById('home-screen');
// homeScetion.classList.add('hidden');

// //Show the playground
// const playGroundSection =document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// // console.log(playGroundSection.classList);

// }

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
