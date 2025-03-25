import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #8C11BE;
	box-sizing: border-box;
	font-family: 'Raleway', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*{
	box-sizing: border-box;
	text-decoration: none;
}

form{
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 13px;
}

input{
	width: 326px;
	height: 58px;
	border-radius: 5px;
	background-color: #FFFFFF;
	padding: 18px ;
	border: none;
	font-size: 20px;
	cursor: pointer;

	&:focus{
		outline: 3px solid #A328D6;
	}

	&::placeholder{
		color: #000000;
	}
}

button{
	width: 326px;
    height: 46px;
    margin: auto;
    background: #A328D6;
    border-radius: 5px;
    border: none;
	cursor: pointer;

    font-weight: 700;
	line-height: 23px;
    font-size: 20px;
    color: #FFFFFF;
}
`
export default GlobalStyle