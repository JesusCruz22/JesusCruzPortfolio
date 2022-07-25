const scroller = document.getElementById('Scroller');
scroller.addEventListener('scroll', setProjectsSection, true);

function setProjectsSection() {
    videoInViewport();
    setProjectsBackground();
}