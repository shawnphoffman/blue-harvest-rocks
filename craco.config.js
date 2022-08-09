const { loaderByName, getLoader } = require('@craco/craco')
const transformBabelLoader = require('./config/transformBabelLoader')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default

module.exports = {
	webpack: {
		configure: webpackConfig => {
			// console.log(JSON.stringify(webpackConfig.module.rules, null, 2))
			// throw 'test'
			const lm = getLoader(webpackConfig, loaderByName('babel-loader'))
			const loader = lm.match.loader
			webpackConfig.module.rules[1].oneOf[2] = transformBabelLoader(loader)

			// Inline main.css
			webpackConfig.plugins.push(
				new HTMLInlineCSSWebpackPlugin({
					leaveCSSFile: true,
					// 	filter: filename => filename.includes('main'),
				})
			)

			return webpackConfig
		},
	},
	jest: {
		configure: jestConfig => {
			// jestConfig.transform['^.+\\.(js|jsx|ts|tsx)$'] = require.resolve('./config/babelTransform.js')
			return jestConfig
		},
	},
}
