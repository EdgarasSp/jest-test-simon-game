
// let game = {          FIRST LESSON
//     currentGame: [],
//     score: 0,
// };


// module.exports = { game }; //use curly braces, when exporting more than one object and function from this file. 


// let game = {          SECOND LESSON
//     currentGame: [],
//     playerMoves: [],
//     score: 0,
//     choices: ["button1", "button2", "button3", "button4"] // later will be linked to newGame()
// };


// module.exports = { game };


let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };