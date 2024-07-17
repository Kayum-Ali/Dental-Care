const mySliders = document.querySelectorAll('.mySlider');
let dot = document.querySelectorAll('.dot');

let counter = 1;
sliderfun(counter);
let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    sliderfun(counter);
}
function plusslides(n) {
    counter += n;
    sliderfun(counter);
    resetTimer()
   
}
function currentSlide(n){
    counter = n;
    sliderfun(counter);
    resetTimer()
} 
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}





function sliderfun(n){
    let i;
    for (i = 0; i < mySliders.length; i++){
        mySliders[i].style.display = 'none';
    }
    for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
    }
    if(n > mySliders.length){
        counter = 1;
        }
     if(n < 1){
        counter = mySliders.length;
        }
     mySliders[counter - 1].style.display = "block";
     dot[counter - 1].className += " active";

}