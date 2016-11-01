//Quiz prototype
//Quiz will need to take in an array of questions
//will need to keep track of current question
//will need to keep current score

//will need a next method to check if user input is correct or not

//method to get current question

//method to determine if quiz is over

var Quiz = (function() {
  'use strict';

  function Quiz(questions) {
    // enforces new
    if (!(this instanceof Quiz)) {
        return new Quiz();
    }

    // constructor body
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  Quiz.prototype.guess = function(answer) {
    //check if the answer is correct
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
      this.score ++;
    }

    //after the guess move to the next question
    this.currentQuestionIndex++;
  };

  Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];
  };

  //returns true or false
  Quiz.prototype.hasEnded = function(){
      console.log(this.questions.length <= this.currentQuestionIndex);
      return this.questions.length <= this.currentQuestionIndex;
  };

  return Quiz;
}());