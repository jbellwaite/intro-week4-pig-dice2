function Player (player) {
  this.playerName = player;
  this.subTotal = [];
  this.grand = 0;
  this.whoTurn = 0;

}

Player.prototype.getRandomNumber=function(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Player.prototype.grandTotal = function() {
  if (this.subTotal.length > 0) {
  var sum = this.subTotal.reduce((a, b)=> a+b);
  return sum + this.grand;
}else {
  return this.grand;
}
}

  Player.prototype.zero = function () {
    while (this.subTotal.length) {
      this.subTotal.pop();
    }
  }

  // var arrayInt = parseInt(array);
  // for (i = 0, sum = 0; i <= array.length; sum += array[i++]){ write logic }
  // for (i = 0; i <= array.length; i++);
  // return this.grand +=array[i];



$(document).ready(function(){

  var newPlayer1 = new Player("Player 1");

  $("#roll1").click(function(event) {
    event.preventDefault();

    console.log(newPlayer1.playerName);

    var player1Roll = newPlayer1.getRandomNumber();

    if (player1Roll === 1) {
      alert("You rolled a 1, you lose all points this round");
      $("ul#bank1").text("");
      newPlayer1.zero();
    } else {
      $("#bank1").prepend("<li>" + player1Roll + "</li>");
      var player1RollInt = parseInt(player1Roll);
      newPlayer1.subTotal.push(player1RollInt);
      console.log(newPlayer1.subTotal);
    }
    // newPlayer1.grandTotal();
    // newPlayer2.grandTotal();
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    var player1gT = newPlayer1.grandTotal();
    $("#total1").text(player1gT);
    $("#bank1").text("");
  });
});
