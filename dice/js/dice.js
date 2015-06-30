

//var dice = new Dice(6);


//object literal example

var diceObjectLiteral = {
  sides: 6,
  roll: function (){
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };


//constructor function example
function Dice(sides){

  this.sides = sides;

}

//create new instance
var dice = new Dice(6);

//methods with prototypes
Dice.prototype.roll = function(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
};