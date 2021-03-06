const resolve = require('path').resolve

export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Smartiful',
		// title: process.env.npm_package_name || '卖更多，新零售开创者',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: ['swiper/dist/css/swiper.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [{ src: '@/plugins/swiper', ssr: false }, { src: '@/plugins/icon', ssr: true }],
	/*
	 ** Nuxt.js modules
	 */
	modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
	// axios: {
	// 	prefix: '/api/',
	// 	proxy: true // Can be also an object with default options
	// },
	// proxy: {
	// 	'/api/': { target: 'https://k8riju8wvk.execute-api.ap-northeast-1.amazonaws.com/prod', pathRewrite: {'^/api/': ''}, changeOrigin: true }
	// },
	styleResources: {
		less: './assets/**/*.less'
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
			svgRule.exclude = [resolve(__dirname, 'assets/svg')]

			// Includes /assets/icons/svg for svg-sprite-loader
			config.module.rules.push({
				test: /\.svg$/,
				include: [resolve(__dirname, 'assets/svg')],
				loader: 'svg-sprite-loader',
				options: {
					symbolId: 'icon-[name]'
				}
			})
		}
	}
}
