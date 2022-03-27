function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function videoInViewport() {
    const projectVideos = document.querySelectorAll('.project-video');

    projectVideos.forEach(element => {
        if(isInViewport(element)) element.play();
        else element.pause();
    });
}


