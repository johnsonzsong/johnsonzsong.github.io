window.addEventListener('scroll', function() {
	var positionOne = document.querySelector('#section-one').getBoundingClientRect();
  var positionTwo = document.querySelector('#section-two').getBoundingClientRect();
  var positionThree = document.querySelector('#section-three').getBoundingClientRect();
  var positionFour = document.querySelector('#section-four').getBoundingClientRect();
  var positionFive = document.querySelector('#section-five').getBoundingClientRect();

  var navOne = document.querySelector('#nav-one');
  var navTwo = document.querySelector('#nav-two');
  var navThree = document.querySelector('#nav-three');
  var navFour = document.querySelector('#nav-four');
  var navFive = document.querySelector('#nav-five');

  // Intro section is majority of screen
  if (positionOne.top <= window.innerHeight/2 && positionTwo.bottom >= window.innerHeight/2) {
    navOne.classList.add("nav-active");
    navTwo.classList.remove("nav-active");
  }
  if (positionOne.bottom >= window.innerHeight/2) {
    navOne.classList.add("nav-active");
    navTwo.classList.remove("nav-active");
  }

  // Professional section is majority of screen
  if (positionTwo.top <= window.innerHeight/5 && positionThree.bottom >= window.innerHeight/2) {
    navTwo.classList.add("nav-active");
    navThree.classList.remove("nav-active");
    navOne.classList.remove("nav-active");
  }

  // Education section is majority of screen
  if (positionThree.top <= window.innerHeight/2 && positionFour.bottom >= window.innerHeight/2) {
    navThree.classList.add("nav-active");
    navTwo.classList.remove("nav-active");
    navFour.classList.remove("nav-active");
  }

  // Favorites section is majority of screen
  if (positionFour.top <= window.innerHeight/2 && positionFive.bottom >= window.innerHeight/2) {
    navFour.classList.add("nav-active");
    navThree.classList.remove("nav-active");
    navFive.classList.remove("nav-active");
  }

  // At bottom of page, always highlight shoutouts
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    navFive.classList.add("nav-active");
    navFour.classList.remove("nav-active");
  }
});