import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    input{
        border: 1px solid ${({ theme }) => theme.colors.gray400};
	/* padding: 0.8em; */
	outline: none;
	margin-bottom: 0.5em;
	color: ${({ theme }) => theme.colors.gray700};

    &:focus{
    outline: none;
    }
    }
`;

export default GlobalStyles;
