'use strict';
let grade = 0;
let userName = prompt('Welcome to Guess Me Game! Each level you complete successfully you will get 5 points score. Please enter your NICKNAME to START the game.');
let livingPlace = prompt('Hello ' + userName +'! The game is just started.. LEVEL ONE: Do i live in Amman? [yes] or [no]');
if(livingPlace.toLocaleLowerCase()==='no' || livingPlace.toLocaleLowerCase()==='n'){
  grade = grade + 5;
  let married= prompt('Fantastic ' + userName +'! You have completed level one successfully! Your total score now is ' + grade + ' Points. LEVEL TWO: I am a married man? [yes] or [no]');
  if(married.toLocaleLowerCase()==='yes' || married.toLocaleLowerCase()==='y'){
    grade = grade + 5;
    let children = prompt('Fantastic ' + userName +'! You have completed level tow successfully! Your total score now is ' + grade + ' Points. LEVEL THREE: Do i have children? [yes] or [no]');
    if(children.toLocaleLowerCase()==='yes' || children.toLocaleLowerCase()==='y'){
      grade = grade + 5;
      let childName = prompt('Fantastic ' + userName +'! You have completed level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(childName.toLocaleLowerCase()==='yes' || childName.toLocaleLowerCase()==='y'){
        grade = grade + 5;
        let wearingGlasses = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(wearingGlasses.toLocaleLowerCase()==='yes' || wearingGlasses.toLocaleLowerCase()==='y'){
          grade = grade + 5;
          alert('Congratulations ' + userName + '! You have completed all the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }
  }
}
