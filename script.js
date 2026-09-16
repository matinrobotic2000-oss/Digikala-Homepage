'use strict';
const loginBtn = document.querySelector('.login-btn');
const homepageHidden = document.querySelector('#homepage-hidden');
const loginPage = document.querySelector('.login-page');
const closeBtn = document.querySelector('.close-btn');

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
