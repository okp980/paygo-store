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
			}
			background-color: ${({ theme }) => theme.colors.gray300};
			padding: 0.5em;
			h5 {
				span {
					color: ${({ theme }) => theme.colors.gray400};
					text-decoration: line-through;
					margin-left: 0.5em;
				}
			}
			small {
				font-weight: 600;
				color: ${({ theme }) => theme.colors.gray500};
				text-transform: uppercase;
			}
			.btn-group {
				display: flex;
			}
		}
	}
`;
