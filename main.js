const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const imagesId = document.querySelector('#imagesId');
let imageSlidesIndex = 0;

const imageSlides = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg',];

const createNavigation = () => {
    imageSlides.forEach((element, index) => {
        const dot = document.createElement('span');
        if (index === imageSlidesIndex) {
            dot.classList.add('active_nav'); 
        }

        dot.addEventListener('click', () => {
            imageSlidesIndex = index;
            imagesId.src = imageSlides[imageSlidesIndex]; 
            updateNavigation(); 
            checkButtons(); 
        });
        sliderNavigation.appendChild(dot); 
    });
};

createNavigation();

const updateNavigation = () => {
    const dots = document.querySelectorAll('span');

    dots.forEach((dot, index) => {
        if (index === imageSlidesIndex) {
            dot.classList.add('active_nav');
        } else {
            dot.classList.remove('active_nav');
        }
    });
};

const checkButtonsActive = () => {
    if (imageSlidesIndex === 0) {
        prevBtn.classList.add('active'); 
    } else {
        prevBtn.classList.remove('active'); 
    }
    if (imageSlidesIndex === imageSlides.length - 1) {
        nextBtn.classList.add('active'); 
    } else {
        nextBtn.classList.remove('active');
    }
};

checkButtonsActive();

prevBtn.addEventListener('click', () => {
    if (imageSlidesIndex > 0) {
        imageSlidesIndex--;
        imagesId.src = imageSlides[imageSlidesIndex]; 
        updateNavigation(); 
        checkButtonsActive(); 
    }
});

nextBtn.addEventListener('click', () => {
    if (imageSlidesIndex < imageSlides.length - 1) {
        imageSlidesIndex++;
        imagesId.src = imageSlides[imageSlidesIndex]; 
        updateNavigation(); 
        checkButtonsActive(); 
    }
});
