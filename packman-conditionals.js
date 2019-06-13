let powerPelletEaten = false;
let ghosts = 4;

while (true) {
    console.log('Ghosts remaning: ' + ghosts);

    if (powerPelletEaten == false) {
        console.log('Pac-Man eats the power pellet.');
        powerPelletEaten = true;
    } else if (ghosts > 0) {
        console.log('Pac-Man eats a ghost.');
        ghosts--;
    } else {
        break;
    };
};

console.log('Pac-Man returns home after a long day in the maze.')


var ghost = 'Blinky';
var colour;

switch (ghost) {
    case 'Inky':
        colour = 'Cyan';
        break;
    case 'Blinky':
        colour = 'Red';
        break
    case 'Pinky':
        colour = 'Pink';
        break;
    case 'Clyde':
        colour = 'Orange';
        break;
}

console.log(`${ghost} is the colour ${colour}`);