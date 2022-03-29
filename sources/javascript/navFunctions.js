/*
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navList = document.getElementsByClassName('nav-list')[0]

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active')
})
*/

const scroller = document.getElementById('Scroller');
scroller.addEventListener('scroll', setActiveNavButton, true);

function setActiveNavButton() {
    scrollTop = scroller.scrollTop;
    scrollHeight = scroller.scrollHeight;

    sectionHeight = scrollHeight / 4;

    videoInViewport();

    if (scrollTop == 0) {
        onClickNavButton('AboutMeNavBtn');
        window.location.hash = "AboutMe";
    }
    else if (scrollTop == sectionHeight) {
        onClickNavButton('SkillsNavBtn');
        window.location.hash = "Skills";
    }
    else if (scrollTop == sectionHeight * 2) {
        onClickNavButton('ProjectsNavBtn');
        window.location.hash = "Projects";
    }
    else if (scrollTop == sectionHeight * 3) {
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