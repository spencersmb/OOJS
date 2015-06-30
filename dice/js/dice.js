//function Dice(sides) {
//  this.sides = sides;
//  this.roll = function () {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}

//var dice = new Dice(6);

var dice = {
  roll: function diceRoll(){
    var sides = 6;
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };
