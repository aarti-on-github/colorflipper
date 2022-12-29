const colors=[ "green", "red", "rgba(133,122,200)", "#f15025","pink","yellow","rgb(100,120,120)","#f23691"]
const color=document.querySelector(".color")
const btn=document.getElementById("btn")


btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber()
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }
