const HEADER_BORDER_WIDTH = 10
const BACKGROUND_COLOR = '#22313F'
const TEXT_COLOR = '#BFCAD1'
const PRIMARY_COLOR = '#6BCCEF'

document.documentElement.style.setProperty('--header-border-width', HEADER_BORDER_WIDTH + 'px')
document.documentElement.style.setProperty('--background-color', BACKGROUND_COLOR)
document.documentElement.style.setProperty('--text-color', TEXT_COLOR)
document.documentElement.style.setProperty('--primary-color', PRIMARY_COLOR)

function setParticlesHeight() {
	document.getElementById('particles').style.height = window.innerHeight - HEADER_BORDER_WIDTH + 'px'
}

document.addEventListener('DOMContentLoaded', function() {
	setParticlesHeight()

	window.addEventListener('resize', setParticlesHeight)

	particlesJS('particles', {
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": PRIMARY_COLOR
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 30,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});

	new WOW().init();
});
