function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const projectVideos = document.querySelectorAll('.project-video');

function videoInViewport() {
    projectVideos.forEach(element => {
        isInViewport(element) ? element.play() : element.pause();
    });
}


