//Slider 390px
const countryImg = document.querySelector('.country-img');
const arrowLeft = document.querySelector('.prev');
const arrowRight = document.querySelector('.next');

const swetchSpain = document.querySelector('.slide__1');
const swetchJapan = document.querySelector('.slide__2');
const swetchUsa = document.querySelector('.slide__3');

arrowLeft.addEventListener('click', (event) => {
    if(event.path[3].children[1].classList.contains('sliderCenter')) {
        countryImg.classList.add('sliderStart');
        countryImg.classList.remove('sliderCenter');
        countryImg.classList.remove('sliderEnd');
        swetchSpain.classList.add('showCollor');
        swetchJapan.classList.remove('showCollor');
        swetchUsa.classList.remove('showCollor');
    }
    else if (event.path[3].children[1].classList.contains('sliderEnd')) {
        countryImg.classList.add('sliderCenter');
        countryImg.classList.remove('sliderStart');
        countryImg.classList.remove('sliderEnd');
        swetchSpain.classList.remove('showCollor');
        swetchJapan.classList.add('showCollor');
        swetchUsa.classList.remove('showCollor');
      }
});

arrowRight.addEventListener('click', (event) => {
    if (event.path[3].children[1].classList.contains('sliderStart')) {
      countryImg.classList.add('sliderCenter')
      countryImg.classList.remove('sliderStart')
      countryImg.classList.remove('sliderEnd')
      swetchSpain.classList.remove('showCollor')
      swetchJapan.classList.add('showCollor')
      swetchUsa.classList.remove('showCollor')
    }   
    else if (event.path[3].children[1].classList.contains('sliderCenter')) {
      countryImg.classList.add('sliderEnd')
      countryImg.classList.remove('sliderStart')
      countryImg.classList.remove('sliderCenter')
      swetchSpain.classList.remove('showCollor')
      swetchJapan.classList.remove('showCollor')
      swetchUsa.classList.add('showCollor')
    }
  });

  arrowLeft.addEventListener('click', (event) => {
    if (event.path[3].children[1].classList.contains('sliderCenter')) {
      imageRight.classList.remove('img-vector-right')
    }   
    else if (event.path[3].children[1].classList.contains('sliderStart')) {
      imageLeft.classList.remove('img-vector-left')
    }
  })
  
  arrowRight.addEventListener('click', (event) => {
    if (event.path[3].children[1].classList.contains('sliderEnd')) {
      imageRight.classList.add('img-vector-right')
    }   
    else if (event.path[3].children[1].classList.contains('sliderCenter')) {
      imageLeft.classList.add('img-vector-left')
    }
  })