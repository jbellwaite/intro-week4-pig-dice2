var Player = require('./../js/scripts.js').playerModule;

$(document).ready(function(){

  var newPlayer1 = new Player("Player 1");
  var newPlayer2 = new Player("Player 2");
  $("#roll2, #hold2, #p2turn").hide();

//Code for Player 1
  $("#roll1").click(function(event) {
    event.preventDefault();

    console.log(newPlayer1.playerName);

    var player1Roll = newPlayer1.getRandomNumber();

    if (player1Roll === 1) {
      alert("Player 1, you rolled a 1, you lose all points this round and it's Player 2's turn.");
      $("ul#bank1").text("");
      newPlayer1.zero();
      newPlayer1.grandTotal();
      $("#roll1, #hold1, #p1turn").hide();
      $("#roll2, #hold2, #p2turn").show();
    } else {
      $("#bank1").prepend("<li>" + player1Roll + "</li>");
      var player1RollInt = parseInt(player1Roll);
      newPlayer1.subTotal.push(player1RollInt);
      console.log(newPlayer1.subTotal);
    }
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    newPlayer1.grandTotal();
    $("#total1").text(newPlayer1.grand);
    $("#bank1").text("");
    newPlayer1.zero();
    $("#roll1, #hold1, #p1turn").hide();
    $("#roll2, #hold2, #p2turn").show();
    newPlayer1.win();
  });

//Code for Player 2
  $("#roll2").click(function(event) {
    event.preventDefault();

    console.log(newPlayer2.playerName);

    var player2Roll = newPlayer2.getRandomNumber();

    if (player2Roll === 1) {
      alert("Player 2, you rolled a 1, you lose all points this round and it's Player 1's turn.");
      $("ul#bank2").text("");
      newPlayer2.zero();
      newPlayer2.grandTotal();
      $("#roll1, #hold1, #p1turn").show();
      $("#roll2, #hold2, #p2turn").hide();

    } else {
      $("#bank2").prepend("<li>" + player2Roll + "</li>");
      var player2RollInt = parseInt(player2Roll);
      newPlayer2.subTotal.push(player2RollInt);
      console.log(newPlayer2.subTotal);
    }
  });

  $("#hold2").click(function(event) {
    event.preventDefault();
    newPlayer2.grandTotal();
    $("#total2").text(newPlayer2.grand);
    $("#bank2").text("");
    newPlayer2.zero();
    $("#roll1, #hold1, #p1turn").show();
    $("#roll2, #hold2, #p2turn").hide();
    newPlayer2.win();
  });
});
