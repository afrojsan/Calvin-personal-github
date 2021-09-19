//user calvin
let userName = 'Calvin';
if (userName) {
  console.log('Hello, Calvin');
} else {
  console.log(Hello);
}

//user question
let userQuestion = 'will you go out tonight?';
console.log(`The user ${userName} ask ${userQuestion}`);

//a randomNumer between 0-7
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

//eightball is empty
let eightBall = '';

//
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`Magic Eight Ball answer:${eightBall}`)