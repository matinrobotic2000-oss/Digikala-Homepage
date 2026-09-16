'use strict';
const loginBtn = document.querySelector('.login-btn');
const homepageHidden = document.querySelector('#homepage-hidden');
const loginPage = document.querySelector('.login-page');

const openLoginPage = function (e) {
  e.preventDefault();
  console.log('click');
  homepageHidden.style.display = 'none';
  loginPage.style.display = 'flex';
};

loginBtn.addEventListener('click', openLoginPage.bind(this));
