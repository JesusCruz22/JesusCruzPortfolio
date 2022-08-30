const projectVideos = document.querySelectorAll('.project-video');

// Projects videos Observer
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.play();
        else entry.target.pause();
        
        setProjectsBackground();
    });
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

projectVideos.forEach(video => videoObserver.observe(video));

