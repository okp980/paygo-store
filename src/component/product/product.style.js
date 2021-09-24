import styled from "styled-components";

export const ProductCard = styled.li`
	div {
		padding: 0;
		.image {
			width: 100%;
			overflow: hidden;
			height: 450px;
			img {
				width: 100%;
				display: block;
				object-fit: cover;
			}
		}
		.card-details {
			/* background-color: ${({ theme }) => theme.colors.gray200}; */
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
				color: ${({ theme }) => theme.colors.gray600};
			}
			.btn-group {
				display: flex;
			}
		}
	}
`;
