const leftArea = document.querySelector('#left')
const rightArea = document.querySelector('#right')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.querySelector('input');
    let numPlayers = input.value;

    let players = [];
    for (let i = 0; i < numPlayers; i++) {
        players.push("Player " + (i + 1));
    }

    // Shuffle the array of players
    for (let i = players.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }

    let team1 = players.splice(0, numPlayers / 2);
    let team2 = players;

    console.log("Team 1: " + team1);
    console.log("Team 2: " + team2);

    while (leftArea.hasChildNodes()) {
        leftArea.removeChild(
            leftArea.firstChild
        );
    }
    team1.forEach((player) => {

        let left = document.createElement('li');
        left.innerText = player;
        leftArea.appendChild(left);
    })

    while (rightArea.hasChildNodes()) {
        rightArea.removeChild(
            rightArea.firstChild
        );
    }
    team2.forEach((player) => {

        let right = document.createElement('li');
        right.innerText = player;
        rightArea.appendChild(right);

    })



})

// let numPlayers = prompt("Enter the number of players:");

// let players = [];
// for (let i = 0; i < numPlayers; i++) {
//   players.push("Player " + (i+1));
// }

// Shuffle the array of players
// for (let i = players.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   [players[i], players[j]] = [players[j], players[i]];
// }

// let team1 = players.splice(0, numPlayers / 2);
// let team2 = players;

// team1.forEach((player) => {
//     let left = document.createElement('li');
//     left.innerText = player;
//     leftArea.appendChild(left);
// })

// team2.forEach((player) => {
//     let right = document.createElement('li');
//     right.innerText = player;
//     rightArea.appendChild(right);
// })

// console.log("Team 1: " + team1);
// console.log("Team 2: " + team2);
