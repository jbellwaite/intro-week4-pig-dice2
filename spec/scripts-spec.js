var Player = require('./../js/scripts.js').playerModule;

describe("Player", function() {
  it('should give player total score', function(){
    var player = new Player("newPlayer1");
    expect(player.grandTotal()).toEqual(1);
  });
});
