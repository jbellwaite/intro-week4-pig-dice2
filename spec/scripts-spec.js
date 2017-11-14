var Player = require('./../js/scripts.js').playerModule;

describe("Player", function() {
  it('should give player total score', function(){
    var player = new Player("newPlayer1");
    expect(player.grandTotal()).toEqual(0);
  });
});

describe("Player", function() {
  it('should return a integer less than 7 and greater than 0', function(){
    var player = new Player("newPlayer1");
    expect(player.getRandomNumber()).toBeGreaterThan(7);
  });
});

describe("Player", function() {
  it('should return a integer less than 7 and greater than 0', function(){
    var player = new Player("newPlayer1");
    expect(player.getRandomNumber()).toBeLessThan(0);
  });
});

describe("Player", function() {
  it('the player\'s total score is now nothing', function(){
    var player = new Player("newPlayer1");
    expect(player.zero()).toEqual([4]);
  });
});

describe("Player", function(){
  it('the player\'s total score is equal to or greater than 5, then player wins', function(){
    var player = new Player("newPlayer1", 6);
    expect(player.win()).toEqual("you win");
  });
});
