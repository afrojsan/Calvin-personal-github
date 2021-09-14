const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const fieldMakeUp = [hat];
let position = 0;
let fieldSize = 0;
let gameOver = false;

class Field {
    constructor(gameField, rows, columns) {
        this.gameField = gameField;
        this.rows = rows;
        this.columns = columns;
    }
    static generateField(rows, columns, holePerCent) {
        fieldSize = (rows * columns);
        const numberOfHoles = Math.round(fieldSize * holePerCent / 100);
        const numberOfGrass = fieldSize - numberOfHoles - 2;

        //add the correct number of grass spaces and holes to the field
        function pushToArray(number, characterType) {
            let counter = 0;
            do {
                fieldMakeUp.push(characterType);
                counter++;
            }
            while (counter < number);
            return fieldMakeUp;
        }

        //shuffle the grass spaces, holes, and hat into randomised order using Fischer Yates
        function shuffleArray(fieldMakeUp) {
            let i = fieldMakeUp.length - 1;
            for (i; i > 0; i--) {
                const j = Math.floor(Math.random() * i);
                const temp = fieldMakeUp[i];
                fieldMakeUp[i] = fieldMakeUp[j];
                fieldMakeUp[j] = temp;
            }
            return fieldMakeUp;
        }
        pushToArray(numberOfHoles, hole);
        pushToArray(numberOfGrass, fieldCharacter);
        shuffleArray(fieldMakeUp);

        // add the starting position
        fieldMakeUp.unshift(pathCharacter);
        return fieldMakeUp;

    }
    print(gameField, gameOver) {
        let start = 0;
        let end = this.columns;
        for (let i = 0; i < this.rows; i++) {
            console.log(gameField.slice(start, end).join(" "));
            start += this.columns;
            end += this.columns;
        }
        if (gameOver === false) {
            this.playGame();
        }
    }
    instructions() {
        let instructions = prompt("\nWELCOME TO THE FIND YOUR HAT GAME \nYour aim is to get the hat ^ but don't fall down a hole or you'll explode!\n \nW is UP, A is LEFT, D is RIGHT, S is DOWN. Press enter to play. ")
    }
    playGame() {
        let direction = prompt('Which way now? ');
        switch (direction) {
            case 's':
                position += this.columns;
                break;
            case 'w':
                position -= this.columns;
                break;
            case 'a':
                if (position % this.columns === 0) {
                    position = -1;
                } else {
                    position--;
                }
                break;
            case 'd':
                position++
                if (position % this.columns === 0) {
                    position = -1;
                }
                break;
            default:
                prompt('You can only enter W is UP, A is LEFT, D is RIGHT, S is DOWN');

        }

        const nextMove = () => {
            if (position > fieldSize || position < 0) {
                this.print(gameField, true);
                prompt('*** You have gone outside of the field. Game Over! ***');

            } else if (gameField[position] === hole) {
                gameField[position] = "#";
                this.print(gameField, true);
                prompt('*** You have exploded - GAME OVER! ****');

            } else if (gameField[position] === hat) {
                gameField[position] = "@";
                this.print(gameField, true);
                prompt('*** Winner Winner - CONGRATULATIONS! ****');
            } else {
                (gameField[position] === fieldCharacter || pathCharacter)
                gameField[position] = "*";
                this.print(gameField, false);
            }

        }
        nextMove();
    }
}
const rows = parseInt(prompt('How many rows would you like in your game? '))
const columns = parseInt(prompt('How many columns would you like in your game? '))
const holePerCent = parseInt(prompt('What percentage of holes would you like? '))
const gameField = Field.generateField(rows, columns, holePerCent);

const myField = new Field(gameField, rows, columns);
myField.instructions();
myField.print(gameField, gameOver);