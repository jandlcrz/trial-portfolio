import { skills, projects } from './information.js'



/*=============== MOBILE MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
if(navToggle){
    navToggle.addEventListener('click', () =>{navMenu.classList.add('show-menu');})
};
if(navClose){
    navClose.addEventListener('click', () =>{navMenu.classList.remove('show-menu');})
};
const navLink = document.querySelectorAll('.nav__link');
const collapseMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(section => section.addEventListener('click', collapseMenu));



/*=============== HEADER SHADOW ===============*/
const headerShadow = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header'); // 50vh
};
window.addEventListener('scroll', headerShadow);



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendEmail = (event) => {
    event.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_kkhlhdo','template_88tb6id','#contact-form','4R6VKipSOCehuxvZT').then(() => {
        contactMessage.textContent = 'Message sent successfully. ✅';
        setTimeout(() => {contactMessage.textContent = ''}, 5000);
        contactForm.reset();
    }, () => {
        contactMessage.textContent = 'Message not sent (service error). ❌';
    });
};
contactForm.addEventListener('submit', sendEmail);



/*=============== SHOW SCROLL TO TOP BUTTON ===============*/ 
const scrollUp = () => {
	const scrollUpButton = document.getElementById('scroll-up');
	window.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll')
						: scrollUpButton.classList.remove('show-scroll'); // 350vh
};
window.addEventListener('scroll', scrollUp);



/*=============== CURRENT SECTION ===============*/
const sections = document.querySelectorAll('section[id]');
const activeSection = () => {
  	const scrollDown = window.scrollY;
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 58;
		const sectionId = current.getAttribute('id');
		const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		};                                                  
	});
};
window.addEventListener('scroll', activeSection);



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const lightIcon = 'ri-sun-line';
const darkIcon = 'ri-moon-line';
const animation = 'icon-animation';
const selectedTheme = localStorage.getItem('selected-theme');

if (selectedTheme) {
    if (selectedTheme === 'dark') {
        document.body.classList.add(darkTheme);
        themeButton.classList.add(darkIcon);
        themeButton.classList.remove(lightIcon);
    } else {
        document.body.classList.remove(darkTheme);
        themeButton.classList.remove(darkIcon);
        themeButton.classList.add(lightIcon);
    };
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(animation);
    setTimeout(() => {themeButton.classList.toggle(darkIcon)}, 250);
    setTimeout(() => {themeButton.classList.toggle(lightIcon)}, 250);
    setTimeout(() => {themeButton.classList.toggle(animation)}, 500);
    const getNewTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    localStorage.setItem('selected-theme', getNewTheme());
});



/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollAnimation = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});
scrollAnimation.reveal(`.home__profile, .about__image, .home .title__accent, .about .title__accent, .projects .title__accent, .section__title-right, .about__socials, .contact__mail`, {origin: 'right'});
scrollAnimation.reveal(`.home__name, .home__info, .skills .title__accent, .section__title-left, .about__info, .contact__social, .contact__data`, {origin: 'left'});
scrollAnimation.reveal(`.skills__card, .projects__card`, {interval: 100});



/*=============== SKILLS LOGO SWAP ===============*/



/*=============== SKILLS HTML GENERATION ===============*/
/*=============== PROJECTS HTML GENERATION ===============*/