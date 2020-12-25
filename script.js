function main () {

    var albumData = jQuery.getJSON('album.json');

    var players = document.getElementsByTagName('td');
    for (let player of players) {
        var name = players.innerHTML.split('<br>')[0];
        name = name.replace('*','');
        if (name.match('L')) {
            player.classList.add('player_l');
        } else if (name.match('A')) {
            player.classList.add('player_a');
        } else if (name.match('G')) {
            player.classList.add('player_g');
        } else if (name.match('R')) {
            player.classList.add('player_r');
        } else if (name.match('M')) {
            player.classList.add('player_m');
        } else if (name.match('K')) {
            player.classList.add('player_k');
        } else if (name.match('T')) {
            player.classList.add('player_t');
        }

        for (let album of albumData) {
            if (album.players.filter(plr => plr == name).length) {
                player.classList.add('album');
                break;
            }
        }
    }
}

window.onload = main;