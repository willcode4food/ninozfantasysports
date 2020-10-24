/* eslint-disable no-undef */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions, stage }) => {
	switch (stage) {
		case `develop`:
			// Improve sourcemaps for Chrome Debugging
			actions.setWebpackConfig({
				devtool: `inline-module-source-map`,
			})
			break
	}
}
