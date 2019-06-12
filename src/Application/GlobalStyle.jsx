import { createGlobalStyle } from "styled-components"
import React from "react"
import theme from "~/theme"

const GS = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700|PT+Sans:400,400i,700|Kalam|Faster+One');
	* {
		box-sizing: border-box;
	}

	html, body {
		margin: 0;
		font-family: 'PT Sans', sans-serif;
		font-size: 16px;
		overflow-x: hidden;
		background-color: #F8F8F8;
		min-height: 100vh;
		padding: 0;
	}
	
	body {
		padding-top: 75px;
	}

	blockquote {
		margin: 0;
		padding-left: 16px;
		border-left: 4px solid rgba(217, 217, 217, 1.00);
		color: #000;
		font-style: italic;
		font-weight: bold;
	}
`

const GlobalStyle = () => {
    // TODO make distinction for schul-cloud?
    // TODO include theme?
    return <GS />
}

export default GlobalStyle
