/**
 * @jest-environment jsdom
 */

// FIRST LESSON

//  const { game } = require("../game"); // this imports variable from game.js


//  beforeAll(() => { // This is to be used as boiler plate
//      let fs = require("fs");
//      let fileContents = fs.readFileSync("index.html", "utf-8");
//      document.open();
//      document.write(fileContents);
//      document.close();
//  });
 
//  describe("game object contains correct keys", () => {
//      test("score key exists", () => {
//          expect("score" in game).toBe(true);  // game is variable in game.js and score is array in game variable
//      });
//      test("currentGame key exists", () => {
//          expect("currentGame" in game).toBe(true); // game is variable in game.js and currentGame is array in game variable
//      });
//  });


// SECOND LESSON


// const { game } = require("../game");


// beforeAll(() => {
//     let fs = require("fs");
//     let fileContents = fs.readFileSync("index.html", "utf-8");
//     document.open();
//     document.write(fileContents);
//     document.close();
// });

// describe("game object contains correct keys", () => {
//     test("score key exists", () => {
//         expect("score" in game).toBe(true);
//     });
//     test("currentGame key exists", () => {
//         expect("currentGame" in game).toBe(true);
//     });
//     test("playerMoves key exists", () => {
//         expect("playerMoves" in game).toBe(true);
//     });
//     test("choices key exists", () => {
//         expect("choices" in game).toBe(true);
//     });
//     test("choices contain correct ids", () => {
//         expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]); // game.choices is variable.key inside
//     });
// });

const { game, newGame, showScore, addTurn, lightsOn } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should add one move to the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
});