// global variable start
let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
let startButton = document.querySelector('#start');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let currentlyPlaying = true;

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

//onclick door
doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
};

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

// button reset
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound()
    }
};

const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

// game over function
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play aagin?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    };
    currentlyPlaying = false;
};


// random door generator
const randomChoreDoorGenerator = () => {
    choreDoor = Math.floor(Math.random() * numClosedDoors)
    if (choreDoor === 1) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 2) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    }
};

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true
    } else {
        return false
    }
};

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false
    } else {
        return true
    }
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door))
        gameOver('lose')
};

// calling function
startRound();