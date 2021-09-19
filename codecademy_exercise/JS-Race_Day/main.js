let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerage = 20;

if (runnerage => 18 && registeredEarly) {
  raceNumber += 1000;
}

//race early adults
if (runnerage > 18 && registeredEarly) {
  console.log(`You will race at 9:30am.This is your race Number:${raceNumber}.`);
}else if (runnerage > 18 && !registeredEarly){
  console.log(`You will race at 11:00am.This is your race Number:${raceNumber}.`);
}else if (runnerage < 18) {
  console.log(`You will race at 11:00am.This is your race Number:${raceNumber}`);
}else {
  console.log('please go to the registration desk');
}