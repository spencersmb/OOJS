//var dice = new Dice(6);


//object literal example

var diceObjectLiteral = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
};


//constructor function example
function Dice2(sides) {

  this.sides = sides;

}



//methods with prototypes
Dice2.prototype.roll = function() {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
};


//new constructor snippet example
var Dice = (function() {
  'use strict';

  function Dice(sides) {
    this.sides = sides;
    // enforces new
    if (!(this instanceof Dice)) {
      return new Dice();
    }

    // constructor body
  }

  Dice.prototype.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  };

  return Dice;
}());

//create new instance
var dice = new Dice(6);
