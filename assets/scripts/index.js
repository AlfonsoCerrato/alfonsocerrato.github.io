(function() {
	function initParticles() {
		particlesJS.load('particles', 'particles.json')
	}

	function initWOW() {
		new WOW().init();
	}

	/** Fix vh unit issue on mobile browsers where the unit doesn't work properly */
	function setParticlesHeight() {
		const particlesContainer = document.getElementById('particles')

		if (particlesContainer.style.height !== (window.innerHeight - 10 + 'px')) {
			particlesContainer.style.height = window.innerHeight - 10 + 'px'
		}
	}

	function onResize() {
		setParticlesHeight()
	}

	function onContentLoaded() {
		setParticlesHeight()
		initParticles()
		initWOW()
	}

	window.addEventListener('resize', onResize)
	document.addEventListener('DOMContentLoaded', onContentLoaded)
})()