const team = {
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'lakers',
            teamPoints: 50,
            opponentPoints: 10
        },
        {
            opponent: 'rocket',
            teamPoints: 67,
            opponentPoints: 76
        }

    ],
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Timmy',
            lastName: 'Love',
            age: 13
        },
        {
            firstName: 'Calvin',
            lastName: 'Chung',
            age: 15
        }
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    addGame(opponentName, teamPoints, opponentPoints) {
        const game = {
            opponent: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);

    }
}

team.addPlayer('Curry', 'Steph', 28);
team.addPlayer('Leslie', 'Lisa', 28);
team.addPlayer('Bunny', 'Bugs', 28);

team.addGame('Sun', 48, 52);

console.log(team.players);
console.log(team.games);
// console.log(team);