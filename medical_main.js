function hide()
{
    document.getElementById("input-search").style.backgroundColor="black";
    document.getElementById("input-search").style.color="white";

    

}
const card1=document.getElementById('card-1');
const card2=document.getElementById('card-2');
const card3=document.getElementById('card-3');
const cardPara=document.getElementById("card-para");
const cardPara1=document.getElementById("card-para1");
const cardPara2=document.getElementById("card-para2");
card1.addEventListener("mouseover",function(){
      cardPara.style.color="white";
      document.querySelector(".fa-stethoscope").style.color="white"
})
card1.addEventListener("mouseout",function(){
      cardPara.style.color="hotpink";
      document.querySelector(".fa-stethoscope").style.color="black"
})
card2.addEventListener("mouseover",function(){
      cardPara1.style.color="white";
      document.querySelector(".fa-tooth").style.color="white"
})
card2.addEventListener("mouseout",function(){
      cardPara1.style.color="hotpink";
      document.querySelector(".fa-tooth").style.color="black"
})
card3.addEventListener("mouseover",function(){
      cardPara2.style.color="white";
      document.querySelector(".fa-bone").style.color="white"
})
card3.addEventListener("mouseout",function(){
      cardPara2.style.color="hotpink";
      document.querySelector(".fa-bone").style.color="black"
})

const navToggle=document.querySelector(".nav-toggle");
const linksSlide=document.querySelector(".links_slide")
const linksSlide1=document.querySelector(".links_slide1")
const rotate90=document.getElementById("rotated")
const dropBouns=document.getElementById("droping")

let i=1;
navToggle.addEventListener('click',function(){

if(i%2==0)
    {
        i++;
        dropBouns.classList.remove("up")
        rotate90.classList.remove("rotates1")
        rotate90.style.transition="1s"
       
    }
    else
    {
        i++;
       dropBouns.classList.add("up")
        rotate90.classList.add("rotates1")



    }

})