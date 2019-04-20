<template lang="pug">
	.home
</template>
<script>
	import bg from '../../package/src/demo.bg'
	export default {
		name: 'home',
		components: {},
		data () {
			return {}
		},
		mounted () {
			bg.init(this.$el)
		},
		methods: {
		}
	}
</script>
