//add Questions
var questions = [
  new Question('This is the first question',
    ['choice A', 'Choice B'],
    'choice A'
  ),
  new Question('This is the second question',
    ['choice A2', 'Choice B2'],
    'Choice B2'
  )
];

var myQuiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();