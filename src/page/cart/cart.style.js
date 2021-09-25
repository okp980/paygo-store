import styled from "styled-components";

export const Section = styled.section`
	background-color: ${({ theme }) => theme.colors.gray100};
	padding: 2em 0.5em;

	@media screen and (min-width: 960px) {
		display: grid;
		grid-template-columns: 1fr 0.5fr;
		grid-gap: 1em;
		grid-template-areas:
			"header header"
			"items summary";
	}
`;

export const Header = styled.div`
	grid-area: header;
	/* border-bottom: 1px solid ${({ theme }) => theme.colors.gray300}; */
	h3 {
		text-align: center;
		padding: 0.2em 0;
	}
`;
export const Items = styled.div`
	grid-area: items;

	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 2.5em;

		thead {
			background-color: ${({ theme }) => theme.colors.gray200};
			tr {
				th {
					padding: 1em 0;
					text-align: center;
					text-transform: uppercase;
					font-weight: 600;
				}
			}
		}

		tbody {
			tr {
				border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
				&:last-of-type {
					border-bottom: none;
				}
				.delete {
					background-color: ${({ theme }) => theme.colors.gray500};
					width: 30px;
					height: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					cursor: pointer;

					&:hover {
						background-color: ${({ theme }) => theme.colors.gray700};
					}
				}

				.delete-icon {
					margin: 0;
					font-size: 15px;
				}
				td {
					text-align: center;
					padding: 1em 0;

					/* &:first-of-type {
						text-align: left;
					} */

					button {
						display: flex;
						align-self: center;
					}

					a {
						display: unset;
						margin-left: 0;
					}
				}
			}
		}
	}

	a {
		display: flex;
		align-items: center;
		margin-left: 1em;
	}

	.icon {
		color: ${({ theme }) => theme.colors.gray700};
	}
`;
export const Summary = styled.div`
	grid-area: summary;

	div {
		background-color: ${({ theme }) => theme.colors.gray300};
		padding: 1em;
		h4 {
			text-align: center;
			text-transform: uppercase;
			font-weight: 600;
		}
		table {
			border-collapse: collapse;
			width: 100%;
			text-transform: capitalize;
			padding: 1em;
			margin-bottom: 1em;

			tr {
				td {
					padding: 1em 0.5em;
					color: ${({ theme }) => theme.colors.gray500};
					font-weight: 600;
					text-transform: uppercase;
				}

				.table {
					background-color: ${({ theme }) => theme.colors.gray400};
				}
			}
		}
	}
`;
