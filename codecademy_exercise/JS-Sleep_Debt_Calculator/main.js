//
function getSleepHours(day) {
    if(day === 'monday') {
      return 8;
    }else if(day === 'tuesday') {
      return 7;
    }else if(day === 'wednesday') {
      return 6;
    }else if(day === 'thursday') {
      return 5;
    }else if(day === 'friday') {
      return 4;
    }else if(day === 'saturday') {
      return 10;
    }else if (day === 'sunday') {
      return 10;
    }else {
      return 'error';
    }
  }
  
  
  //
  function getActualSleepHours() { 
    let sleepHours = 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
    return sleepHours;
  }
  console.log(getActualSleepHours());
  
  
  
  //
  function getIdealSleepHours() {
    let idealHours = 9;
    return idealHours * 7;
  }
  console.log(getIdealSleepHours());
  
  
  //
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      return console.log(`You got perfect amount of sleep.`);
    }else if(actualSleepHours > idealSleepHours){
      return console.log(`You got ${actualSleepHours - idealSleepHours} hours in this week, got more sleep than needed.`);
    }else if(actualSleepHours < idealSleepHours){
      return console.log(`You got ${idealSleepHours - actualSleepHours} hours lees in this week, should get some rest.`);
    }else {
      return 'error'
    }
  }
  
  calculateSleepDebt()