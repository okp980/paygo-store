import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
* {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	box-sizing: border-box;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
	overflow-x: hidden;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html {
	scroll-behavior: smooth;
}

:root {
	/* colors */
	--clr-dark: #363537;
	--clr-white: #f5f8e9;
	--clr-primary: #988f2a;
	--clr-secondary: #c4c6e7;
	--clr-accent: #fe5f00;
	--clr-primary-hover: #b6ac3e;
	--clr-accent-hover: #f87a32;

	--trans: all 0.3s ease-in-out;
	--radius: 30px;
	--radius-sm: 3px;
	--shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

	/* font sizs */
	--fs-lg: 2.3rem;
	--fs-900: 2.027rem;
	--fs-800: 1.802rem;
	--fs-700: 1.602rem;
	--fs-600: 1.424rem;
	--fs-500: 1.266rem;
	--fs-400-lg: 1.125rem;
	--fs-400: 1rem;
	--fs-400-sm: 0.889rem;
	--fs-300: 0.79rem;
	--fs-200: 0.702rem;
	--body-font-size: var(--fs-400-sm);
}


@media screen and (min-width: 960px) {
	:root {
		--fs-lg: 2.6rem;
		--body-font-size: var(--fs-400);
	}
}

h1 {
	font-size: var(--fs-900);
	text-transform: capitalize;
}
h2 {
	font-size: var(--fs-800);
	text-transform: capitalize;
}
h3 {
	font-size: var(--fs-700);
	text-transform: capitalize;
}
h4 {
	font-size: var(--fs-600);
	text-transform: capitalize;
}
h5 {
	font-size: var(--fs-500);
	text-transform: capitalize;
}

p,
a {
	font-size: var(--body-font-size);
	text-transform: capitalize;
	text-decoration: none;
    color: var(--clr-dark);
}

small{
    font-size:var(--fs-200);
}

a,
p {
	line-height: 1.75;
}

h1,
h2,
h3,
h4,
h5 {
	margin: 1rem 0 1.38rem;
	line-height: 1.3;
}

body {
	background-color: ${({ theme }) => theme.colors.light100};
	color: ${({ theme }) => theme.colors.light100};
	font-size: var(--body-font-size);
	font-weight: 400;
	font-family: "Open Sans", sans-serif;
}

button{
    font-size: var(--fs-400-sm);
}


	label{
		font-size: var(--fs-300);
		margin-bottom: .5em;
	}

    input{
        border: 1px solid ${({ theme }) => theme.colors.gray400};
	padding: 0.2em;
	border-radius: 3px;
	outline: none;
	margin-bottom: 0.5em;
	color: ${({ theme }) => theme.colors.gray700};

    &:focus{
    outline: none;
    }
    }


    .react--icons {
	font-size: var(--fs-600);
	margin-right: 0.9rem;
	color: ${({ theme }) => theme.colors.light300};
}

@keyframes checkout {
   0% { 
    transform: translateX(50%);
  } 
   
  100% { 
    transform: translateX(0);
  } 
}

`;

export default GlobalStyles;
