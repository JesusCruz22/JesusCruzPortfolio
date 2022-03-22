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