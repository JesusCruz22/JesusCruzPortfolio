const scroller = document.getElementById('Scroller');
scroller.addEventListener('scroll', setActiveNavButton, true);

const aboutMeSectionElement = document.querySelector('#AboutMe');
const skillsSectionElement = document.querySelector('#Skills');
const projectsSectionElement = document.querySelector('#Projects');
const contactMeSectionElement = document.querySelector('#ContactMe');

function setActiveNavButton() {
    videoInViewport();
    setProjectsBackground();

    if (isInViewport(aboutMeSectionElement)) {
        onClickNavButton('AboutMeNavBtn');
        window.location.hash = "AboutMe";
    }
    else if (isInViewport(skillsSectionElement)) {
        onClickNavButton('SkillsNavBtn');
        window.location.hash = "Skills";
    }
    else if (isInViewport(projectsSectionElement)) {
        onClickNavButton('ProjectsNavBtn');
        window.location.hash = "Projects";
    }
    else if (isInViewport(contactMeSectionElement)) {
        onClickNavButton('ContactMeNavBtn');
        window.location.hash = "ContactMe";
    }

}

function onClickNavButton(id) {
    const activeNavButtons = document.getElementsByClassName('active');
    Array.prototype.forEach.call(activeNavButtons, function (button) {
        button.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}