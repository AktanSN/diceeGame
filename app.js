var img1= document.querySelector(".img1");
var img2= document.querySelector(".img2");
var h1=document.querySelector("h1");
var btn =document.querySelector("#btn");


img1.setAttribute("src","images/dice6.png");

img2.setAttribute("src","images/dice6.png");


btn.addEventListener("click",function(){
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    img1.setAttribute("src",`images/dice${randomNumber1}.png`);
    
    img2.setAttribute("src",`images/dice${randomNumber2}.png`);

    if(randomNumber1 > randomNumber2){
        h1.textContent = "Oyuncu 1 Kazandı";
    }else if(randomNumber2 > randomNumber1){
        h1.textContent = "Oyuncu 2 Kazandı";
    }else{
        h1.textContent = "Şansa bak! Berabere";
    }
    
});





