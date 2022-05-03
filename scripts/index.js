const themeSwitch = document.querySelectorAll('.theme-switcher__checkbox');
const headerMenuItems = document.querySelectorAll('.header__menu-item');
const hamburgerButton = document.querySelector('.header__hamburger-button');


//тумблер темы
themeSwitch.forEach(item => item.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';
  
    if (currentTheme === 'light') {
      targetTheme = 'dark'
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
  }));

  //открытие и закрытие габургера по кнопке
  hamburgerButton.addEventListener('click', () => {
      hamburgerButton.classList.toggle('header__hamburger-button_status_active');
  })

  //закрытие габургера с переходом по ссылке пункта меню
  headerMenuItems.forEach(item => item.addEventListener('click', () => {
    hamburgerButton.classList.remove('header__hamburger-button_status_active');
}))


//слайдер

let slideIndex = 1;
let slides = document.querySelectorAll('.slider__item');
const prevButtons = document.querySelectorAll('.slider__button_type_previous');
const nextButtons = document.querySelectorAll('.slider__button_type_next');
const hiddenPhotos = document.querySelectorAll('.slider__image_mobile_hidden');

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'grid';
  if (window.innerWidth < 798) {
    hiddenPhotos.forEach(item => item.style.display = 'none');
  }
}

showSlides();
prevButtons.forEach(item => item.addEventListener('click', previousSlide));
nextButtons.forEach(item => item.addEventListener('click', nextSlide));

//велосипеды

let activeBikeLink = document.querySelector('.bikes__item-link_type_active');
let bikesMap = new Map();
const bikesLinks = document.querySelectorAll('.bikes__item-link');
const bikesGallery = document.querySelectorAll('.bikes__gallery');
const select = document.querySelector('.bikes__select-mobile');
const selectTitle = document.querySelector('.bikes__select-title');
const selectLabels = document.querySelectorAll('.bikes__select-label');
const sliderDots = document.querySelectorAll('.bikes__slider-dot');

for (let i = 0; i < bikesGallery.length; i++) {
  bikesMap.set(bikesLinks[i], bikesGallery[i]);
}

function showGallery(activeLink) {
  bikesGallery.forEach(item => item.style.display = 'none');
  bikesMap.get(activeLink).style.display = 'flex';
}

function makeNewActiveLink(newLink) {
  if (newLink !== activeBikeLink) {
    newLink.classList.add('bikes__item-link_type_active');
    activeBikeLink.classList.remove('bikes__item-link_type_active');
    activeBikeLink = newLink;
  }
}

showGallery(activeBikeLink);

bikesLinks.forEach(link => link.addEventListener('click', evt => {
  makeNewActiveLink(evt.target);
  showGallery(activeBikeLink);
}));

//Поле выбора для МП
selectTitle.addEventListener('click', () => {
  if ('active' === select.getAttribute('data-state')) {
    select.setAttribute('data-state', '');
  } else {
    select.setAttribute('data-state', 'active');
}})

for(let i=0; i<selectLabels.length; i++) {
  selectLabels[i].addEventListener('click', evt => {
    console.log(evt.target.textContent);
    selectTitle.textContent = evt.target.textContent;
    bikesGallery.forEach(item => item.style.display = 'none');
    bikesGallery[i].style.display = 'flex';
    sliderDots.forEach(item => item.classList.remove('bikes__slider-dot_type_active'));
    sliderDots[i].classList.add('bikes__slider-dot_type_active');
    select.setAttribute('data-state', '');
  })
}

//форма
const form = document.querySelector('.footer__form');
const email = document.querySelector('.footer__email');
const submitButton = document.querySelector('.footer__email-submit');

//форма в фокусе

function hideButton() {
  submitButton.style.display = 'none';
}

email.addEventListener('focus', () => {
  email.setAttribute('placeholder', '');
  submitButton.style.display = 'block';
})

email.addEventListener('blur', () => {
  email.setAttribute('placeholder', 'Ваш e-mail');
  if (emailForm.value === '') {
    hideButton();
  }
})

//Обработка формы
form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (email.value !== '') {
    email.value = 'Круто!';
    email.setAttribute('disabled', 'true');
  }
  hideButton();
})