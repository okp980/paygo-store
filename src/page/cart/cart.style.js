import styled from "styled-components";

export const Section = styled.section`
	background-color: ${({ theme }) => theme.colors.light200};
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
	h3 {
		text-align: center;
		padding: 0.2em 0;
		color: ${({ theme }) => theme.colors.dark200};
		text-transform: uppercase;
	}
`;
export const Items = styled.div`
	grid-area: items;

	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 2.5em;

		thead {
			background-color: ${({ theme }) => theme.colors.cartItemHead};
			tr {
				th {
					padding: 1em 0;
					text-align: center;
					text-transform: uppercase;
					font-weight: 600;
					&:first-of-type {
						text-align: left;
						padding-left: 0.8em;
					}
				}
			}
		}

		tbody {
			background-color: ${({ theme }) => theme.colors.cartItemBody};
			tr {
				border-bottom: 1px solid ${({ theme }) => theme.colors.light200};
				&:last-of-type {
					border-bottom: none;
				}
				.delete {
					background-color: #db4437;
					width: 30px;
					height: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					cursor: pointer;

					&:hover {
						background-color: ${({ theme }) => theme.colors.dark300};
					}
				}

				.delete-icon {
					margin: 0;
					font-size: 15px;
				}
				td {
					text-align: center;
					padding: 1em 0;

					&:first-of-type {
						text-align: left;
						padding-left: 0.8em;
					}

					button {
						display: flex;
						align-self: center;
					}

					a {
						color: ${({ theme }) => theme.colors.light100};
						display: unset;
						margin-left: 0;
						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}

	a {
		padding-left: 1em;
	}

	@media screen and (max-width: 960px) {
		display: none;
	}
`;
export const Summary = styled.div`
	grid-area: summary;

	div {
		background-color: ${({ theme }) => theme.colors.dark300};
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
					font-weight: 600;
					text-transform: uppercase;
				}
			}
		}
	}
`;

export const SmallerScreenItems = styled.div`
	margin-bottom: 2em;
	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 2.5em;
		tbody {
			background-color: ${({ theme }) => theme.colors.cartItemBody};
			tr {
				display: flex;
				border-bottom: 1px solid ${({ theme }) => theme.colors.light200};

				&:last-of-type {
					border-bottom: none;
				}
				.delete {
					background-color: #db4437;
					width: 30px;
					height: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					cursor: pointer;

					&:hover {
						background-color: ${({ theme }) => theme.colors.dark300};
					}
				}

				.delete-icon {
					margin: 0;
					font-size: 15px;
				}
				.small-screen--details {
					text-align: left;
					padding-left: 0.8em;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-start;
					flex: 1;

					p {
						color: ${({ theme }) => theme.colors.light200};
						text-transform: uppercase;

						span {
							font-weight: 600;
						}
					}
				}
				.small-screen--delete {
					display: flex;
					align-items: center;
					justify-content: center;
					flex: 0.2;
				}
				td {
					padding: 1em 0;

					button {
						display: flex;
						align-self: center;
					}

					a {
						color: ${({ theme }) => theme.colors.light100};
						display: unset;
						margin-left: 0;
						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}

	@media screen and (min-width: 960px) {
		display: none;
	}
`;
