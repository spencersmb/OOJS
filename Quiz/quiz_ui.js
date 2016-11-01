//object literal used because there is only one interface
var QuizUI = {

    //checks first if the quiz.hasended
    displayNext: function(){
      //checks if hasended is true or false
      if(myQuiz.hasEnded()){
        this.displayScore();

      }else{
        this.displayQuestions();
        this.displayChoices();
        this.displayProgress();
      }
    },

    //helper function to get id and then set innnerhtml to text
    populateIdWithHtml: function(id, text){
      var element = document.getElementById(id);
      element.innerHTML = text;
    },

    displayQuestions: function(){

      //must call myquiz.getcurrentquestion to get the question access the questions property using .text
      this.populateIdWithHtml('question', myQuiz.getCurrentQuestion().text);
    },

    displayChoices: function () {

      var choices = myQuiz.getCurrentQuestion().choices;

      for (var i = 0; i < myQuiz.questions.length; i++) {
        this.populateIdWithHtml('choice' + i, choices[i]);

        this.guessHandler('guess' + i, choices[i]);
      }
    },

    displayProgress: function(){

      //add one because its zero based
      var currentQuestion = myQuiz.currentQuestionIndex + 1;

      this.populateIdWithHtml('progress', 'Question ' + currentQuestion + ' of ' + myQuiz.questions.length);

    },

    //assigns click events to the buttons when we call this function in the display choices function
    guessHandler: function(id, guess){
      var button = document.getElementById(id);

      button.onclick = function(){
        //call myquiz to check the answer
        myQuiz.guess(guess);

        //rerender UI
        QuizUI.displayNext();
      }
    },

    displayScore: function(){
      var gameOver = '<h1>Game Over</h1>';
      gameOver += '<h2> Your Score is ' + myQuiz.score; + '</h2>';
      this.populateIdWithHtml('quiz', gameOver);
    }
};