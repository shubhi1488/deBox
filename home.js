
// const menu=document.querySelector(".dots");
//  let side_bar=document.querySelector("aside");
// let menuState=false;
// let x=window.matchMedia("(max-width:700px)");
// menu.addEventListener('click',showhideMenu);
// function showhideMenu(){
//     if(!menuState){
//         menu.classList.add("active");
//         side_bar.classList.add("active");
//         menuState=true;
//     }else{
//         menu.classList.remove("active");
//         side_bar.classList.remove("active");
//         menuState=false;
//     }
// }
// function myFunction(x){
//     if(x.matches){
//         menu.classList.add("active");
//         side_bar.classList.add("active");

//     }else{
//         menu.classList.remove("active");
//         side_bar.classList.remove("active");
//     }
// }
// myFunction(x);
// x.addListener(myFunction);
var slideIndex=1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex+=n);
}
function currentSlide(n){
    showSlides(slideIndex=n);
}
function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");
    if(n>slides.length){slideIndex=1};
    if(n<1){slideIndex=slides.length};
    for(i=0;i<slides.length;i++){
        slides[i].getElementsByClassName.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].replace(" active"," ");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className="active";
}
var slideIndex=0;
showSlides();
function showSlides()
    {
    var i;
    var slides=document.getElementsByClassName("mySlides");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";

    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,2000);
}