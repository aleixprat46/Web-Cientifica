//Música

window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",posarMusica);
	document.getElementById("stop").addEventListener("click",treureMusica);			
});

function posarMusica(){
	var so = document.createElement("iframe");
	so.setAttribute("src","audio/music.mp3");
	document.body.appendChild(so);
	document.getElementById("play").removeEventListener("click",posarMusica);
}

function treureMusica(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",posarMusica);
	}
}



//Carousel

const carouselSlide = document.querySelector('.image-slide');
const carouselImages = document.querySelectorAll('.image-slide img');

//Buttons

const backButton = document.querySelector('#backButton');
const nextButton = document.querySelector('#nextButton');

//Counter

counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextButton.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';   
});

backButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';   
       
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
    }

});






