
var randomNo1 = Math.random();
randomNo1 = Math.floor(randomNo1*6+1);

var randomDiceImage1 = "dice" + randomNo1 + ".png"
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var randomNo2 = Math.random();
randomNo2 = Math.floor(randomNo2*6+1);

var randomDiceImage2 = "dice" + randomNo2 + ".png"
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if(randomNo1>randomNo2)
{
  document.querySelectorAll("h1")[0].innerHTML = "🚩Player 1 wins!";
}
if(randomNo1<randomNo2)
{
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins!🚩";
}
if(randomNo1===randomNo2)
{
  document.querySelectorAll("h1")[0].innerHTML = "Draw!";
}
