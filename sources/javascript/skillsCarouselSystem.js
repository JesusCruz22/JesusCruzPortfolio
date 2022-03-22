// Variables
// Array to save all the icons to change
let iconsPaths = [
	"sources/images/html-icon-gris.svg",
	"sources/images/css3-icon-gris.svg",
	"sources/images/js-icon-gris.svg",
	"sources/images/react-icon-gris.svg",
	"sources/images/csharp-icon-gris.svg",
	"sources/images/unity-icon-gris.svg",
	"sources/images/java-icon-gris.svg",
	"sources/images/database-icon-gris.svg"
]
// Get skills-section elemento to change its background later
const skillsSection = document.getElementById('Skills');
// Get icons from background of the skills-section
const backgroundIcons = document.getElementsByClassName('skills-background-icon');

// Set carousel configuration
window.addEventListener('load', function () {
	new Glider(document.querySelector('.glider.skills'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.skills-index',
		dragVelocity: 1.5,
		scrollLock: true,
		arrows: {
			prev: '.left-arrow-button.skills',
			next: '.right-arrow-button.skills'
		},
		responsive: [
			{
				// screens greater than >= 425px
				breakpoint: 425,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 1.5,
					slidesToScroll: 1
				}
			}, {
				// screens greater than >= 625px
				breakpoint: 575,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 2
				}
			}, {
				// screens greater than >= 825px
				breakpoint: 875,
				settings: {
					slidesToShow: 3.5,
					slidesToScroll: 3
				}
			}
		]
	});
});

// Evaluate card id and define the background icons and background style
function setBackgroundStyle(card) {
	// Evaluate card id
	switch (card) {
		case "htmlCard":
			skillsSection.classList.add('html');

			Array.prototype.forEach.call(backgroundIcons, function (icon) {
				icon.src = "sources/images/html-icon-gris.svg";
			});
			break;
		case "cssCard":
			skillsSection.classList.add('css');

			Array.prototype.forEach.call(backgroundIcons, function (icon) {
				icon.src = "sources/images/css3-icon-gris.svg";
			});
			break;
		case "jsCard":
			skillsSection.classList.add('js');

			Array.prototype.forEach.call(backgroundIcons, function (icon) {
				icon.src = "sources/images/js-icon-gris.svg";
			});
			break;
		case "reactCard":
			skillsSection.classList.add('react');

			Array.prototype.forEach.call(backgroundIcons, function (icon) {
				icon.src = "sources/images/react-icon-gris.svg";
			});
			break;
		case "csharpCard":
			skillsSection.classList.add('csharp');

			Array.prototype.forEach.call(backgroundIcons, function (icon) {
				icon.src = "sources/images/csharp-icon-gris.svg";
			});
			break;
		case "unityCard":
			skillsSection.classList.add('unity');

			Array.prototype.forEach.call(backgroundIcons, function (icon) {
				icon.src = "sources/images/unity-icon-gris.svg";
			});
			break;
		case "javaCard":
			skillsSection.classList.add('java');

			Array.prototype.forEach.call(backgroundIcons, function (icon) {
				icon.src = "sources/images/java-icon-gris.svg";
			});
			break;
	}
	//skillsSection.style.background = 'radial-gradient(circle, #FF5722, #E64C1E, #BF4019, #802A11, #BF4019, #E64C1E, #FF5722)';
}

// Set the initial and default style of the skills-section background
function setDefaultBackground() {
	// remove all card styles applied
	skillsSection.classList.remove('html');
	skillsSection.classList.remove('css');
	skillsSection.classList.remove('js');
	skillsSection.classList.remove('react');
	skillsSection.classList.remove('csharp');
	skillsSection.classList.remove('unity');
	skillsSection.classList.remove('java');

	// Shuffle iconsPath array
	shuffleArray(iconsPaths);

	// Replace old icons with new random icons from iconsPaths array
	for (var i = 0; i < iconsPaths.length; i++) {
		backgroundIcons[i].src = iconsPaths[i];
	}
}

// Shuffle any array
function shuffleArray(inputArray) {
	inputArray.sort(() => Math.random() - 0.5);
}

//alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 