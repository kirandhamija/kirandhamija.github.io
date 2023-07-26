let game = {
    playerOne: {
        health: 100,
        wins: 0,
    },
    playerTwo: {
        health: 100,
        wins: 0,
    },
    round: 1,
    turn: "playerOne"
};

let button = document

const BulletIntensity = () => {
    return Math.round(Math.random() * 100);

}

const playerTurn = () => {
    let selection = Math.round(Math.random() * 1);

    // check if the value is true
    if (selection === 1) {
        return "playerOne";
    } else {
        return "playerTwo";
    }
}

const startRound = () => {
    console.log("Initial state: ", game.playerOne.health, game.playerTwo.health);
    if (game.turn === "playerOne") {
        game.playerTwo.health = game.playerTwo.health - BulletIntensity();
        console.log(game.playerTwo);
        //game.turn = "playerTwo";
    }
    else {
        game.playerOne.health = game.playerOne.health - BulletIntensity();
        console.log(game.playerOne);
        //game.turn = "playerOne";

        console.log("Final state: ", game.playerOne.health, game.playerTwo.health);
    }

}

const roundWinner = () => {
    if (game.playerOne.health > game.playerTwo.health) {
        game.playerOne.wins = game.playerOne.wins + 1;
    } else {
        game.playerTwo.wins = game.playerTwo.wins + 1;
    }
}

do {
    console.log("Round:", game.round);
    console.log("Player Turn :", "playeTurn")

    do {
        startRound();
    }
    while (game.playerOne.health >= 0 && game.playerTwo.health >= 0);
    roundWinner();
    game.round = game.round + 1;
    game.turn = playerTurn();
    game.playerOne.health = 100;
    game.playerTwo.health = 100;
} while (game.round <= 3);

console.log(game);

