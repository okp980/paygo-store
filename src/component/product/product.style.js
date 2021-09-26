import styled from "styled-components";

export const ProductCard = styled.li`
	margin: 0 1em 1em 0;
	div {
		padding: 0;
		.image {
			width: 250px;
			overflow: hidden;
			height: 250px;
			background-color: #fff;
			img {
				width: 100%;
				display: block;
				object-fit: contain;
			}
		}
		.card-details {
			width: 250px;
			a {
				display: block;
				color: ${({ theme }) => theme.colors.light100};

				&:hover {
					text-decoration: underline;
				}
			}
			background-color: ${({ theme }) => theme.colors.dark300};
			padding: 0.5em;
			h5 {
			}
			small {
				font-weight: 600;
				color: ${({ theme }) => theme.colors.light300};
				text-transform: uppercase;
			}
		}
	}
`;
