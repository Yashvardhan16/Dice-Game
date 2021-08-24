//Yashvardhan
var number1 = Math.floor(Math.random()*6)+1;
var randomdiceimg="dice"+number1+".png";
var randomimgsrc="images/"+randomdiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsrc);

var number2 = Math.floor(Math.random()*6)+1;
var randomdiceimg2="dice"+number2+".png";
var randomimgsrc2="images/"+randomdiceimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsrc2);

if(number1>number2){
  document.querySelector("h4").innerHTML = "Player 1 Wins!"
}
else if(number1<number2){
  document.querySelector("h4").innerHTML = "Player 2 Wins!"
}
else{
    document.querySelector("h4").innerHTML = "The Game is TieD!"
  }
