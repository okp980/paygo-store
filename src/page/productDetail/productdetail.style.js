import styled from "styled-components";

export const Section = styled.section`
	background-color: ${({ theme }) => theme.colors.gray100};
	@media screen and (min-width: 960px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"header header"
			"imageDisplay imageDescription"
			"similarProducts similarProducts";
	}
`;
export const Header = styled.div`
	grid-area: header;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
	h3 {
		text-align: center;
		padding: 0.2em 0;
	}
`;
export const ImageDisplay = styled.div`
	grid-area: imageDisplay;

	.image {
		height: 500px;
	}
`;
export const ImageDescription = styled.div`
	grid-area: imageDescription;

	padding: 1em;

	p {
		padding-bottom: 1.5em;
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
	}

	h4 {
		text-transform: uppercase;
	}
`;
export const SimilarProducts = styled.div`
	grid-area: similarProducts;
	background-color: yellow;
`;
