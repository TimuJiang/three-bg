module.exports = {
	chainWebpack: config => {
		config.module
			.rule('glsl')
			.test(/\.glsl$/)
			.use('navinfo-webpack-glsl-loader')
			.loader('navinfo-webpack-glsl-loader')
			.end()
	}
}
