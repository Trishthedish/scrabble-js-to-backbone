// player.js

import Scrabble from 'scrabble';

import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(options){
    this.set("name", options.name);
    this.set("plays", []);

    // scrabble is never going to change. Thus, 
    this.scrabble = new Scrabble();
  }

}); // end of Backbone model extend.


Player.prototype.hasWon = function() {
  return this.totalScore() > 100;
};

Player.prototype.totalScore = function() {
  var total = 0;
  for (var i = 0; i < this.plays.length; i++){
    total += this.scrabble.score(this.plays[i]);
  }
  return total;
};

Player.prototype.highestScoringWord = function() {
  return this.scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  return this.scrabble.score(this.scrabble.highestScoreFrom(this.plays));
};

Player.prototype.play = function(word) {
  if (this.hasWon()){
    return false;
  } else {
    this.plays.push(word);
  }
};

export default Player;
