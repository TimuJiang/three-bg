<template lang="pug">
	.home
</template>
<script>
	import * as THREE from 'three'
	import DemoShader from '../shader/demo.shader'
	console.log(THREE)
	const SEPARATION = 100
	const AMOUNTX = 50
	const AMOUNTY = 50
	let camera
	let scene
	let particles
	let renderer
	let mouseX = 0
	let mouseY = 0
	let count = 0
	export default {
		name: 'Home',
		components: {},
		data () {
			return {}
		},
		mounted () {
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
			camera.position.z = 3000
			camera.position.y = 300
			camera.position.x = 300

			scene = new THREE.Scene()
			camera.lookAt(scene.position)
			let numParticles = AMOUNTX * AMOUNTY
			let positions = new Float32Array(numParticles * 3)
			let scales = new Float32Array(numParticles)
			let i = 0
			let j = 0
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2) // x
					positions[i + 1] = 0 // y
					positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2) // z
					scales[j] = 1
					i += 3
					j++
				}
			}
			let geometry = new THREE.BufferGeometry()
			geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3))
			geometry.addAttribute('scale', new THREE.BufferAttribute(scales, 1))
			let material = new THREE.ShaderMaterial({
				uniforms: {
					color: { value: new THREE.Color(0xffffff) }
				},
				vertexShader: DemoShader.vertexShader,
				fragmentShader: DemoShader.fragmentShader
			})

			particles = new THREE.Points(geometry, material)
			scene.add(particles)
			renderer = new THREE.WebGLRenderer({ antialias: true })
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(window.innerWidth, window.innerHeight)
			this.$el.appendChild(renderer.domElement)

			window.addEventListener('resize', this.onWindowResize, false)
			// this.render()
			this.animate()
		},
		methods: {
			onWindowResize () {
				camera.aspect = window.innerWidth / window.innerHeight
				camera.updateProjectionMatrix()
				renderer.setSize(window.innerWidth, window.innerHeight)
			},
			render () {
				// camera.position.x += (mouseX - camera.position.x) * 0.05
				// camera.position.y += (-mouseY - camera.position.y) * 0.05

				let positions = particles.geometry.attributes.position.array
				let scales = particles.geometry.attributes.scale.array
				let i = 0
				let j = 0
				for (let ix = 0; ix < AMOUNTX; ix++) {
					for (let iy = 0; iy < AMOUNTY; iy++) {
						positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
							(Math.sin((iy + count) * 0.5) * 50)
						scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 8 +
							(Math.sin((iy + count) * 0.5) + 1) * 8
						i += 3
						j++
					}
				}
				particles.geometry.attributes.position.needsUpdate = true
				particles.geometry.attributes.scale.needsUpdate = true
				renderer.render(scene, camera)
				count += 0.1
			},
			animate () {
				requestAnimationFrame(this.animate)
				this.render()
			}
		}
	}
</script>
