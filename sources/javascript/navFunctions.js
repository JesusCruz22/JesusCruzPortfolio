const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navList = document.getElementsByClassName('nav-list')[0]

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active')
})