import styled from "styled-components";

export const Section = styled.section`
	background-color: ${({ theme }) => theme.colors.cartItemBody};
	@media screen and (min-width: 960px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"header header"
			"imageDisplay imageDescription";
	}
`;
export const Header = styled.div`
	grid-area: header;
	border-bottom: 1px solid ${({ theme }) => theme.colors.light100};
	h3 {
		text-align: center;
		padding: 0.2em 0;
	}
`;
export const ImageDisplay = styled.div`
	grid-area: imageDisplay;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5em 0;

	.image {
		width: 250px;
		height: 250px;

		img {
			width: 100%;
			height: 100%;
		}
	}
`;
export const ImageDescription = styled.div`
	grid-area: imageDescription;

	padding: 1em;

	p {
		padding-bottom: 1.5em;
		border-bottom: 1px solid ${({ theme }) => theme.colors.light100};
		text-align: justify;
		color: ${({ theme }) => theme.colors.light100};
	}

	h4 {
		text-transform: uppercase;
	}

	.counter {
		display: flex;
		margin-bottom: 1em;
	}
`;

export const LoadingDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
`;
