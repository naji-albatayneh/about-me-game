'use strict';
let grade = 0;
let userName = prompt('Welcome to Guess Me Game! Each level you complete successfully you will get 5 points score. Please enter your NICKNAME to START the game.');
let answer = prompt('Hello ' + userName +'! We will make your day! The game is just started.. LEVEL ONE: Do i live in Amman? [yes] or [no]');
if(answer.toLocaleLowerCase()==='no' || answer.toLocaleLowerCase()==='n'){
  //console.log('Correct answer');
  grade = grade + 5;
  answer= prompt('Fantastic ' + userName +'! You have completed level one successfully! Your total score now is ' + grade + ' Points. LEVEL TWO: I am a married man? [yes] or [no]');
  if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
    //console.log('Correct answer');
    grade = grade + 5;
    answer = prompt('Fantastic ' + userName +'! You have completed level tow successfully! Your total score now is ' + grade + ' Points. LEVEL THREE: Do i have children? [yes] or [no]');
    if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
      //console.log('Correct answer');
      grade = grade + 5;
      answer = prompt('Fantastic ' + userName +'! You have completed level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Congratulations ' + userName + '! You have completed all the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }else{
      //console.log('Incorrect answer');
      //grade = grade + 5;
      answer = prompt('Oops ' + userName +'! You could not complete level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed all the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Good ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        //L4
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Not bad ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }
  }else{
    //console.log('Incorrect answer');
    //grade = grade + 5;
    answer = prompt('Well ' + userName +'! You could not complete level tow successfully! Your total score now is ' + grade + ' Points. LEVEL THREE: Do i have children? [yes] or [no]');
    if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
      //console.log('Correct answer');
      grade = grade + 5;
      answer = prompt('Well ' + userName +'! You have completed level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Well ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Congratulations ' + userName + '! You have completed all the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        //L4
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }else{
      //console.log('Correct answer');
      //grade = grade + 5;
      answer = prompt('Well ' + userName +'! You could not complete level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        //L4
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }
  }
}else{
  //console.log('Incorrect answer');
  //grade = grade + 5;
  answer= prompt('Oops ' + userName +'! You could not complete level one successfully! Your total score now is ' + grade + ' Points. LEVEL TWO: I am a married man? [yes] or [no]');
  if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
    //console.log('Correct answer');
    grade = grade + 5;
    answer = prompt('Fantastic ' + userName +'! You have completed level tow successfully! Your total score now is ' + grade + ' Points. LEVEL THREE: Do i have children? [yes] or [no]');
    if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
      //console.log('Correct answer');
      grade = grade + 5;
      answer = prompt('Fantastic ' + userName +'! You have completed level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Good ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        //L4
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }else{
      //console.log('Incorrect answer');
      //grade = grade + 5;
      answer = prompt('Oops ' + userName +'! You could not complete level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Good ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        //L4
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }
  }else{
    //console.log('Incorrect answer');
    //grade = grade + 5;
    answer = prompt('Oops ' + userName +'! You could not complete level tow successfully! Your total score now is ' + grade + ' Points. LEVEL THREE: Do i have children? [yes] or [no]');
    if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
      //console.log('Correct answer');
      grade = grade + 5;
      answer = prompt('Fantastic ' + userName +'! You have completed level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Good ' + userName + '! You have completed some the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        //L4
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well done ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }else{
      //console.log('Incorrect answer');
      //grade = grade + 5;
      answer = prompt('Fantastic ' + userName +'! You have completed level three successfully! Your total score now is ' + grade + ' Points. LEVEL FOUR: Is Julia my daughter\'s name? [yes] or [no]');
      if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
        //console.log('Correct answer');
        grade = grade + 5;
        answer = prompt('Fantastic ' + userName +'! You have completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Good ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }else{
        //L4
        answer = prompt('Oops ' + userName +'! You could not completed level four successfully! Your total score now is ' + grade + ' Points. LEVEL FIVE: Do i wear glasses? [yes] or [no]');
        if(answer.toLocaleLowerCase()==='yes' || answer.toLocaleLowerCase()==='y'){
          //console.log('Correct answer');
          grade = grade + 5;
          alert('Well ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }else{
          //console.log('Incorrect answer');
          alert('Well ' + userName + '! You have completed some of the game levels successfully. Your total score is ' + grade + ' Points.');
        }
      }
    }
  }
}
