import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/react'
import { COLORS, FONT_FAMILY } from 'utils/styleHelpers'

export default function HTML(props) {
    return (
        <html lang="en" {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes} className="light">
                <Global
                    styles={css`
                        body {
                            font-family: ${FONT_FAMILY};
                            background-color: ${COLORS.PRIMARY};
                            transition: all 0.5s;
                            margin: 0px;
                        }

                        body.dark {
                            font-family: ${FONT_FAMILY};
                            background-color: ${COLORS.SECONDARY_DARK};
                            color: ${COLORS.PRIMARY};
                            margin: 0px;
                        }
                        a {
                            color: ${COLORS.SECONDARY};
                            text-decoration: none;
                        }
                    `}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
								(function() {
									window.__onThemeChange = function() {};
									function setTheme(newTheme) {
									window.__theme = newTheme;
									preferredTheme = newTheme;
									document.body.className = newTheme;
									window.__onThemeChange(newTheme);
									}

									var preferredTheme;
									try {
									preferredTheme = localStorage.getItem('theme');
									} catch (err) { }

									window.__setPreferredTheme = function(newTheme) {
									setTheme(newTheme);
									try {
										localStorage.setItem('theme', newTheme);
									} catch (err) {}
									}

									var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
									darkQuery.addListener(function(e) {
									window.__setPreferredTheme(e.matches ? 'dark' : 'light')
									});

									setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
								})();
            `,
                    }}
                />
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
