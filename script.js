'use strict';
const loginBtn = document.querySelector('.login-btn');
const homepageHidden = document.querySelector('#homepage-hidden');
const loginPage = document.querySelector('.login-page');
const closeBtn = document.querySelector('.close-btn');

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');

let currentSlide = 0;
const totalSlides = slides.length;

const openLoginPage = function (e) {
  e.preventDefault();
  console.log('click');
  homepageHidden.style.display = 'none';
  loginPage.style.display = 'flex';
};

const closeLoginPage = function (e) {
  e.preventDefault();
  console.log('click');
  homepageHidden.style.display = 'block';
  loginPage.style.display = 'none';
};

loginBtn.addEventListener('click', openLoginPage.bind(this));
closeBtn.addEventListener('click', closeLoginPage.bind(this));

const gotoSlide = function (currentSlide) {
  slides.forEach(s => {
    s.style.transform = `translateX(${100 * currentSlide}%)`;
  });
};

gotoSlide(0);

nextBtn.addEventListener('click', function () {
  if (currentSlide === totalSlides - 1) currentSlide = 0;
  else currentSlide++;
  gotoSlide(currentSlide);
});

backBtn.addEventListener('click', function () {
  if (currentSlide === 0) currentSlide = totalSlides - 1;
  else currentSlide--;
  gotoSlide(currentSlide);
});
