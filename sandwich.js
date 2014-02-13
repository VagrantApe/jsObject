function Sandwich( bread, meats, cheeses ) {
  this.bread = bread;
  this.meats = meats;
  this.cheeses = cheeses;
}

checkArray = function(x) {
  if (x instanceof Array) {
    return x.join();
  }
  else {
    return x;
  }
};

Sandwich.prototype.toString = function () {
  return 'The sandwich is on ' + this.bread + ' bread with ' + checkArray(this.meats) + ' for meat and ' + checkArray(this.cheeses) + ' for cheese.';
};

var beefAndCheddar = new Sandwich( 'wheat', 'beef' , 'cheddar' );
var club = new Sandwich( 'White', ['turkey', 'beef'] , ['cheddar', 'swiss'] );

console.log( beefAndCheddar.toString());
console.log( club.toString());
