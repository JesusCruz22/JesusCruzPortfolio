const menu = document.getElementById('Menu');
const itemIndicator = document.getElementById('ItemIndicator');
const navItems = menu.querySelectorAll('a');
const sections = document.querySelectorAll('.section');

let indexActiveSection;

// Observer
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if(entry.isIntersecting){
			// Obtenemos cual es la seccion que esta entrando en pantalla.
			// console.log(`La entrada ${entrada.target.id} esta intersectando`);

			// Creamos un arreglo con las secciones y luego obtenemos el index del la seccion que esta en pantalla.
			for (let i = 0; i < sections.length; i++) {
                navItems[i].style.color = 'white';

                if (sections[i] == entry.target) {
                    indexActiveSection = i;
                    navItems[indexActiveSection].style.color = '#121637';
                }
            }

			setIndicatorSize(indexActiveSection);
            setIndicatorPosition(indexActiveSection);
		}
	});
}, {
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.5
});

// Asignamos un observador a cada una de las secciones
sections.forEach(section => observer.observe(section));

// Evento para cuando la pantalla cambie de tamaño.
const onResize = () => {
	// Cambiamos el tamaño del indicador.
    setIndicatorSize(indexActiveSection);

	// Volvemos a posicionar el indicador.
	setIndicatorPosition(indexActiveSection);
}

window.addEventListener('resize', onResize);

window.addEventListener('load', function () {
    setIndicatorSize(0);
    setIndicatorPosition(0);
});

function setIndicatorSize(indexActiveItem) {
    let itemSizeWidth = navItems[indexActiveItem].offsetWidth;
    let itemSizeHeight = navItems[indexActiveItem].offsetHeight;

    itemIndicator.style.width = `${itemSizeWidth}px`;
    itemIndicator.style.height = `${itemSizeHeight}px`;
}

function setIndicatorPosition(indexActiveItem) {
    let itemOffsetTop = getOffset(navItems[indexActiveItem]).top;
    let itemOffsetLeft = getOffset(navItems[indexActiveItem]).left;

    itemIndicator.style.top = `${itemOffsetTop}px`;
    itemIndicator.style.left = `${itemOffsetLeft}px`;
}

function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}