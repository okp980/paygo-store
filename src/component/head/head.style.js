import styled from "styled-components";

export const Header = styled.header`
	z-index: 2;
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.colors.dark100};
	div {
		padding: 0.7rem 1.3rem;
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h3 {
		color: ${({ theme }) => theme.colors.light300};

		@media screen and (max-width: 378px) {
			font-size: 16px;
		}
		@media screen and (max-width: 378px) {
			font-size: 12px;
		}
	}
`;

export const Cart = styled.li`
	cursor: pointer;
	position: relative;

	.counter {
		background-color: ${({ theme }) => theme.colors.light100};
		font-size: 0.6em;
		padding: 0.6em;
		color: ${({ theme }) => theme.colors.dark100};
		position: absolute;
		bottom: 5%;
		right: 0%;
		line-height: 0.75em;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 999px;
		text-align: center;
		min-width: 2em;
		font-weight: bold;
		border-style: solid;
	}
`;

export const NavMenuUser = styled.ul`
	display: flex;
`;

export const UserNavLink = styled.li`
	margin-left: 2.5em;
	span,
	a {
		color: ${({ theme }) => theme.colors.light300};
		padding: 0.2em 0.4em;
		border: 2px solid ${({ theme }) => theme.colors.light300};
		border-radius: 3px;
		text-transform: uppercase;
		cursor: pointer;

		&:hover {
			background-color: ${({ theme }) => theme.colors.light300};
			color: ${({ theme }) => theme.colors.dark200};
		}
		@media screen and (max-width: 378px) {
			font-size: 14px;
		}
		@media screen and (max-width: 378px) {
			font-size: 12px;
			border: none;
		}
	}
`;
