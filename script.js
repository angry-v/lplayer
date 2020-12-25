function main () {
    var players = document.getElementsByTagName('td');
    for (let player of players) {
        if (player.innerText.match('L')) {
            player.classList.add('player_l');
        } else if (player.innerText.match('A')) {
            player.classList.add('player_a');
        } else if (player.innerText.match('G')) {
            player.classList.add('player_g');
        } else if (player.innerText.match('R')) {
            player.classList.add('player_r');
        } else if (player.innerText.match('M')) {
            player.classList.add('player_m');
        }
    }
}

window.onload = main;