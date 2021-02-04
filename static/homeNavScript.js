window.addEventListener('scroll', function() {
	var introPosition = document.querySelector('#intro').getBoundingClientRect();
  var professionalPosition = document.querySelector('#professional').getBoundingClientRect();
  var educationPosition = document.querySelector('#education').getBoundingClientRect();
  var favoritesPosition = document.querySelector('#favorites').getBoundingClientRect();
  var shoutoutsPosition = document.querySelector('#shoutouts').getBoundingClientRect();

  var navIntro = document.querySelector('#nav-intro');
  var navProfessional = document.querySelector('#nav-professional');
  var navEducation = document.querySelector('#nav-education');
  var navFavorites = document.querySelector('#nav-favorites');
  var navShoutouts = document.querySelector('#nav-shoutouts');

  // Intro section is majority of screen
  if (introPosition.top <= window.innerHeight/2 && professionalPosition.bottom >= window.innerHeight/2) {
    navIntro.classList.add("nav-active");
    navProfessional.classList.remove("nav-active");
  }
  if (introPosition.bottom >= window.innerHeight/2) {
    navIntro.classList.add("nav-active");
    navProfessional.classList.remove("nav-active");
  }

  // Professional section is majority of screen
  if (professionalPosition.top <= window.innerHeight/5 && educationPosition.bottom >= window.innerHeight/2) {
    navProfessional.classList.add("nav-active");
    navEducation.classList.remove("nav-active");
    navIntro.classList.remove("nav-active");
  }

  // Education section is majority of screen
  if (educationPosition.top <= window.innerHeight/2 && favoritesPosition.bottom >= window.innerHeight/2) {
    navEducation.classList.add("nav-active");
    navProfessional.classList.remove("nav-active");
    navFavorites.classList.remove("nav-active");
  }

  // Favorites section is majority of screen
  if (favoritesPosition.top <= window.innerHeight/2 && shoutoutsPosition.bottom >= window.innerHeight/2) {
    navFavorites.classList.add("nav-active");
    navEducation.classList.remove("nav-active");
    navShoutouts.classList.remove("nav-active");
  }

  // At bottom of page, always highlight shoutouts
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    navShoutouts.classList.add("nav-active");
    navFavorites.classList.remove("nav-active");
  }
});