let input = 'how are you today?';
let vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArry = [];

for (let i = 0; i < input.length; i++){
  //console.log(i);
  for(let v =0; v < vowels.length; v++){
    //console.log(v);
    if(input[i] === vowels[v]) {
      if(input[i] === 'e'){
        resultArry.push('ee');
      }else if(input[i] === 'u') {
        resultArry.push('uu');
      }else {
        resultArry.push(input[i]);
      }
    }
  }
  
}
console.log(resultArry);
console.log(resultArry.join('').toUpperCase());