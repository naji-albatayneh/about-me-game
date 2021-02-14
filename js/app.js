'use strict';
let grade = 0;
let answer;
let userName = prompt('Welcome to Guess Me Game! Each level you complete successfully you will get 5 points score. Please enter your NICKNAME to START the game.');
let questions = ['Do i live in Amman?', 'I am a married man?', 'Do i have children?', 'Is Julia my daughter\'s name?', 'Do i wear glasses?'];
let correct1 = ['yes', 'y'];
let uncorrected = ['no', 'n'];

//Q1-5
function questionnum1() {
  for (let i = 0; i < questions.length; i++) {
    answer = prompt('Hello ' + userName + '! LEVEL ( ' + (i + 1) + ' ): ' + questions[i] + ' [yes] or [no]');
    if (i === 0) {
      switch (answer.toLowerCase()) {
      case uncorrected[0]:
      case uncorrected[1]:
        grade = grade + 5;
        alert('Fantastic ' + userName + '! You have completed level ' + (i + 1) + ' successfully! Your total score now is ' + grade + ' Points.');
        break;

      case correct1[0]:
      case correct1[1]:
        alert('Oops ' + userName + '! You could not completed level ' + (i + 1) + ' successfully! Your total score now is ' + grade + ' Points.');
        break;

      default:
        alert('Please keep the answer to: \'yes\' or \'no\' or \'y\' or \'n\' only');
      }
    } else {
      switch (answer.toLowerCase()) {
      case correct1[0]:
      case correct1[1]:
        grade = grade + 5;
        alert('Fantastic ' + userName + '! You have completed level ' + (i + 1) + ' successfully! Your total score now is ' + grade + ' Points.');
        break;

      case uncorrected[0]:
      case uncorrected[1]:
        alert('Oops ' + userName + '! You could not completed level ' + (i + 1) + ' successfully! Your total score now is ' + grade + ' Points.');
        break;

      default:
        alert('Please keep the answer to: \'yes\' or \'no\' or \'y\' or \'n\' only');
      }
    }
  }
}
questionnum1();

//Q6
let questionsArray = ['Try to guess my lucky number by picking a number between ( 1 and 10 )', 'If i would buy a car from my top-10 cars list, what color(s) would i like this car to be?'];

function questionnum6() {
  let j;
  for (j = 0; j < 4; j++) {
    answer = prompt('Hello ' + userName + '! LEVEL ( 6 ): ' + questionsArray[0] + ', NOTE THAT YOU HAVE ONLY ' + (4 - j) + 'ATTEMPS ');
    switch (answer) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '10':
      alert('The number you picked is not even close to my lucky number!');
      break;

    case '5':
    case '9':
      alert('The number you picked is close to my lucky number!');
      break;

    case '6':
    case '8':
      alert('The number you picked is very close to my lucky number!');
      break;

    case '7':
      grade = grade + 5;
      alert('Fantastic ' + userName + '! The number you picked is my lucky number (7)! Your total score now is ' + grade + ' Points.');
      j = 5;
      break;

    default:
      //console.log('Please pick a number from the range ( 1 to 10 ) only');
      alert('Please pick a number from the range ( 1 to 10 ) only');
    }

  }
  if (j === 4) {
    alert('Oops ' + userName + '! You could not guess my lucky number (7)! Your total score now is ' + grade + ' Points.');
  }
}
questionnum6();

//Q7
let possibleAnswers = ['blue', 'gray', 'black', 'red', 'green', 'yellow', 'white'];
let correctAnswers = ['blue', 'gray', 'black'];

function questionnum7() {
  let k;
  for (k = 0; k < 6; k++) {
    answer = prompt('Hello ' + userName + '! LEVEL ( 7 ): ' + questionsArray[1] + ' , NOTE THAT YOU HAVE ONLY ' + (6 - k) + ' ATTEMPS. Pick color(s) for this list: ( ' + possibleAnswers + ' )');

    switch (answer.toLowerCase()) {
    case possibleAnswers[3]:
    case possibleAnswers[4]:
    case possibleAnswers[5]:
    case possibleAnswers[6]:
      alert('The color you picked is not my fav car color!');
      break;

    case correctAnswers[0]:
    case correctAnswers[1]:
    case correctAnswers[2]:
      grade = grade + 5;
      alert('Fantastic ' + userName + '! The color you picked is one of my fav car colors ( ' + correctAnswers + ' )! Your total score now is ' + grade + ' Points.');
      k = 7;
      break;

    default:
      alert('Please pick a color from the list of possible answers only ( ' + possibleAnswers + ' )');
    }

  }
  if (k === 7) {
    alert('Oops ' + userName + '! You could not guess any of the colors of my fav car ( ' + correctAnswers + ' )! Your total score now is ' + grade + ' Points.');
  }
}
questionnum7();
