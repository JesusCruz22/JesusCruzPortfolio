const projectsSection = document.getElementById('Projects');
// Get icons from background of the skills-section
const projectsBackgroundIcons = document.getElementsByClassName('projects-background-icon');

// Array to save all the icons to change
let basicCalculatorIconsPaths = [
    "sources/images/plus-icon.svg",
    "sources/images/minus-icon.svg",
    "sources/images/division-icon.svg",
    "sources/images/multiplication-icon.svg"
]

// Set carousel configuration
window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider.projects'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.projects-index',
        dragVelocity: 1.5,
        scrollLock: true,
        arrows: {
            prev: '.left-arrow-button.projects',
            next: '.right-arrow-button.projects'
        }
    });
});

function setProjectsBackground() {
    let visibleProjectArticle = document.querySelector('.project-article.glider-slide.active');

    if (visibleProjectArticle == null) return;

    // remove all card styles applied
    projectsSection.classList.remove('basicCalculator');
    projectsSection.classList.remove('pongClone');
    projectsSection.classList.remove('frutiMath');
    projectsSection.classList.remove('miniStoreOnline');
    projectsSection.classList.remove('snakeClone');
    projectsSection.classList.remove('storeAdmin');
    projectsSection.classList.remove('chromeDinoGameClone');
    projectsSection.classList.remove('infinityBox');

    switch (visibleProjectArticle.id) {
        case 'BasicCalculator':
            projectsSection.classList.add('basicCalculator');

            for (var i = 0; i < basicCalculatorIconsPaths.length; i++) {
                projectsBackgroundIcons[i].src = basicCalculatorIconsPaths[i];
            }

            for (var i = basicCalculatorIconsPaths.length; i < projectsBackgroundIcons.length; i++) {
                projectsBackgroundIcons[i].src = "";
            }

            break;
        case 'PongClone':
            projectsSection.classList.add('pongClone');

            for (var i = 0; i < projectsBackgroundIcons.length; i++) {
                projectsBackgroundIcons[i].src = "sources/images/pong-clone-icon.svg";
            }

            break;
        case 'FrutiMath':
            projectsSection.classList.add('frutiMath');
            break;
        case 'MiniStoreOnline':
            projectsSection.classList.add('miniStoreOnline');
            break;
        case 'SnakeClone':
            projectsSection.classList.add('snakeClone');
            break;
        case 'StoreAdmin':
            projectsSection.classList.add('storeAdmin');
            break;
        case 'ChromeDinoGameClone':
            projectsSection.classList.add('chromeDinoGameClone');
            break;
        case 'InfinityBox':
            projectsSection.classList.add('infinityBox');
            break;
    }
}

