window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider.skills'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.skills-index',
		dragVelocity: 1.5,
		arrows: {
			prev: '.left-arrow-button',
			next: '.right-arrow-button'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 1000,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2.5,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 1500,
			  settings: {
				slidesToShow: 3.5,
				slidesToScroll: 1
			  }
			}
		]
	});
});