// navbar buttons 
const brandBtn = document.querySelector('.brand');
const aboutBtn = document.querySelector('#about');
const projectBtn = document.querySelector('#projects');
const howBtn = document.querySelector('#how');

// container sections 
const welcome = document.querySelector('.welcome');
const about = document.querySelector('.about');
const how = document.querySelector('.how');
const project = document.querySelector('.project');


brandBtn.addEventListener('click', () => {
    welcome.classList.add('displayWelcome');
    project.classList.remove('displayProject');
    about.classList.remove('displayAbout');
    how.classList.remove('displayHow');
})

projectBtn.addEventListener('click', DisplayProject)

function DisplayProject(){
    project.classList.add('displayProject');
    how.classList.remove('displayHow');
    about.classList.remove('displayAbout');
    welcome.classList.remove('displayWelcome');
}

howBtn.addEventListener('click', () => {
    how.classList.add('displayHow');
    project.classList.remove('displayProject');
    about.classList.remove('displayAbout');
    welcome.classList.remove('displayWelcome');
})

aboutBtn.addEventListener('click', () => {
    about.classList.add('displayAbout');
    project.classList.remove('displayProject');
    welcome.classList.remove('displayWelcome');
    how.classList.remove('displayHow');
})


//Toggle Hamburger Menu Icon
const toggleMenuButton = document.querySelector('#toggleMenu');
const menu = document.querySelector('.menu');

toggleMenuButton.addEventListener('click', () => {
    toggleMenuButton.classList.toggle('menuClicked');
    menu.classList.toggle('showMenu');
})

