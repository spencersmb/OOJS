//Create question object to hold
//Questions - 2 answers - and 1 correct answer

//Question = string

//2 possbile choices is an array of two strings

//answer is a string

var Question = (function() {
  'use strict';

  function Question(text, choices, answer) {
    // enforces new
    if (!(this instanceof Question)) {
        return new Question();
    }

    // constructor body
    this.text = text;
    this.choices = choices;
    this.answer = answer;

  }

  //checks if users answer is true or false
  Question.prototype.isCorrectAnswer = function(choice) {
    // method body
    return this.answer === choice;
  };

  return Question;
}());