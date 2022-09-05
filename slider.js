 //конфигурация

let width = 370; //ширина картинки
let count = 1; //видимое количество изображений

let list = document.querySelector('.slider__items');
let listElems = document.querySelectorAll('.slider__item');
let bars = document.querySelector('.bar');

let position = 0; // положение ленты прокрутки
                  
document.querySelector('.prev').addEventListener('click', () => {
    // сдвиг влево
    position += width * count;
   
    position = Math.max(position, 1);
    list.style.marginLeft = position + 'px';
  
  });

  document.querySelector('.next').addEventListener('click', () => {
// сдвиг вправо
  position -= width * count;
      
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
  
 
  });


  
    
/* Индекс слайда по умолчанию */
let slideIndex = 2;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.getElementsByClassName("bar");
    let arrow_right = document.getElementsByClassName("next");
    let arrow_left = document.getElementsByClassName("prev");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
        
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
    }
    for (i = 0; i < arrow_right.length; i++) {
      arrow_right[i].className = arrow_right[i].className.replace(" active",  "");
      
    }
    for (i = 0; i > arrow_left.length; i++) {
      arrow_left[i].className = arrow_left[i].className.replace(" active",  "");
      

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    arrow_right[slideIndex - 2].className += " active";
    arrow_left[slideIndex - 2].className += " active";
   
}


 


 

 


