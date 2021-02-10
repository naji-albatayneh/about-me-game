'use strict';
let grade = 0;
let answer;
let userName = prompt('Welcome to Guess Me Game! Each level you complete successfully you will get 5 points score. Please enter your NICKNAME to START the game.');
let questions = ['Do i live in Amman?', 'I am a married man?', 'Do i have children?', 'Is Julia my daughter\'s name?', 'Do i wear glasses?'];
//Q1-5
for(let i = 0; i<questions.length;i++){
  answer = prompt('Hello ' + userName +'! LEVEL ( ' + (i+1) + ' ): ' + questions[i] + ' [yes] or [no]');
  if(i===0){
    switch(answer.toLowerCase()){
    case 'no':
    case 'n':
      grade = grade + 5;
      alert('Fantastic ' + userName +'! You have completed level ' + (i+1) + ' successfully! Your total score now is ' + grade + ' Points.');
      //console.log('Correct answer');
      break;

    case 'yes':
    case 'y':
      alert('Oops ' + userName +'! You could not completed level ' + (i+1) + ' successfully! Your total score now is ' + grade + ' Points.');
      //console.log('Incorrect answer');
      break;

    default:
      //console.log('Please keep the answer to: \'yes\' or \'no\' or \'y\' or \'n\' only');
      alert('Please keep the answer to: \'yes\' or \'no\' or \'y\' or \'n\' only');
    }
  }else{
    switch(answer.toLowerCase()){
    case 'yes':
    case 'y':
      grade = grade + 5;
      alert('Fantastic ' + userName +'! You have completed level ' + (i+1) + ' successfully! Your total score now is ' + grade + ' Points.');
      //console.log('Correct answer');
      break;

    case 'no':
    case 'n':
      alert('Oops ' + userName +'! You could not completed level ' + (i+1) + ' successfully! Your total score now is ' + grade + ' Points.');
      //console.log('Incorrect answer');
      break;

    default:
      alert('Please keep the answer to: \'yes\' or \'no\' or \'y\' or \'n\' only');
    }
  }
}
//Q6
//let guessNumber=7;
let j;
for(j = 0; j<4;j++){
  answer = prompt('Hello ' + userName +'! LEVEL ( 6 ): Try to guess my lucky number by picking a number between ( 1 and 10 ), NOTE THAT YOU HAVE ONLY ' + (4-j) + ' ATTEMPS');
  switch(answer){
  case '1':
  case '2':
  case '3':
  case '4':
  case '10':
    //console.log('The number you picked is not even close to my lucky number!');
    alert('The number you picked is not even close to my lucky number!');
    break;

  case '5':
  case '9':
    //console.log('The number you picked is close to my lucky number!');
    alert('The number you picked is close to my lucky number!');
    break;

  case '6':
  case '8':
    //console.log('The number you picked is very close to my lucky number!');
    alert('The number you picked is very close to my lucky number!');
    break;

  case '7':
    grade = grade + 5;
    //console.log('The number you picked is my lucky number (7)!');
    alert('Fantastic ' + userName + '! The number you picked is my lucky number (7)! Your total score now is ' + grade + ' Points.');
    j=5;//To get out of the loop
    break;

  default:
    //console.log('Please pick a number from the range ( 1 to 10 ) only');
    alert('Please pick a number from the range ( 1 to 10 ) only');
  }

}
if(j===4){
  //console.log('You could not guess my lucky number (7)!');
  alert('Oops ' + userName + '! You could not guess my lucky number (7)! Your total score now is ' + grade + ' Points.');
}

//Q7
let k;
let possibleAnswers =['blue', 'gray', 'black', 'red', 'green', 'yellow', 'white'];
for(k = 0; k<6;k++){
  answer = prompt('Hello ' + userName +'! LEVEL ( 7 ): If i would buy a car from my top-10 cars list, what color(s) would i like this car to be?, NOTE THAT YOU HAVE ONLY ' + (6-k) + ' ATTEMPS. Pick color(s) for this list: ' + possibleAnswers);

  switch(answer){
  case 'red':
  case 'green':
  case 'yellow':
  case 'while':
    //console.log('The color you picked is not my fav car color!');
    alert('The color you picked is not my fav car color!');
    break;

  case 'blue':
  case 'gray':
  case 'black':
    grade = grade + 5;
    //console.log('The color you picked is one of my fav car colors (blue, gray and black)!');
    alert('Fantastic ' + userName + '! The color you picked is one of my fav car colors (blue, gray and black)! Your total score now is ' + grade + ' Points.');
    k=7;// To get out the loop
    break;

  default:
    //console.log('Please pick a color from the list only');
    alert('Please pick a color from the list only');
  }

}
if(k===7){
  //console.log('You could not guess any of the colors of my fav car (blue, gray and black)!');
  alert('Oops ' + userName + '! You could not guess any of the colors of my fav car (blue, gray and black)! Your total score now is ' + grade + ' Points.');
}

