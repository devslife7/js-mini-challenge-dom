/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = 'red'

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

// let playerElement = document.createElement('div')
// console.log(playerElement);
const playerContainer = document.querySelector('div.player-container')

function createPlayer(player) {
    const text = `
        <div class="player" data-number="${player.number}"
            <h3>
                ${player.name} (<em>${player.nickname}</em>)
            </h3><br>
            <img src="${player.photo}" alt="${player.name}">
        </div>
    `
    return text
}

for (let i=0; i<PLAYERS.length; i++){
    playerContainer.innerHTML += createPlayer(PLAYERS[i])
    // console.log(PLAYERS[i]);
}

/***** Deliverable 4 *****/

// console.log(document.querySelector(`div[data-number='7']`))
const manCityPlayer = document.querySelector('div[data-number="7"]')
manCityPlayer.remove()


