

function Player (player) {
  this.playerName = player;
  this.subTotal = [];
  this.grand = 0;
}

Player.prototype.getRandomNumber=function(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Player.prototype.grandTotal = function() {
  var grandTotal = this.grand;
  if (this.subTotal.length > 0) {
    var sum = this.subTotal.reduce((a, b)=> a+b);
    this.grand = (sum + grandTotal);
  }
  return this.grand;
};

Player.prototype.zero = function () {
    this.subTotal=[];
};

Player.prototype.win = function() {
  if (this.grand >= 5) {
    $("#win").show();
    $("#winDisplay").text(this.playerName + " you win!");
    $("#winBanner").show();
    $("#winBanner2").show();
    $("#winBanner3").show();
    $("#winBanner4").show();
  }
};

exports.playerModule = Player;
