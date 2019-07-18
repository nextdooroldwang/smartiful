export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: '卖更多，新零售开创者',
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
	css: ['ant-design-vue/dist/antd.css', 'video.js/dist/video-js.css', 'swiper/dist/css/swiper.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['@/plugins/antd-ui', { src: '@/plugins/vue-vedio', ssr: false }, { src: '@/plugins/swiper', ssr: false }],
	/*
	 ** Nuxt.js modules
	 */
	modules: ['@nuxtjs/style-resources'],
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
		extend(config, ctx) {}
	}
}
