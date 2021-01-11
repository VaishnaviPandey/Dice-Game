var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var ranImg1 = "dice" + randomNumber1 + ".png";
var ranImgSrc1 = ranImg1;
document.querySelectorAll("img")[0].setAttribute("src" , ranImgSrc1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var ranImg2 = "dice" + randomNumber2 + ".png";
var ranImgSrc2 = ranImg2;
document.querySelectorAll("img")[1].setAttribute("src" , ranImgSrc2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else{
  document.querySelector("h1").innerHTML = "Its a Draw!!";
}
