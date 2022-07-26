const scroller = document.getElementById('Scroller');
scroller.addEventListener('scroll', scrollAction, true);

function scrollAction() {
    videoInViewport();
    setProjectsBackground();
}