import styled from "styled-components";

export const Header = styled.header`
	z-index: 2;
	position: sticky;
	background-color: var(--clr-dark);
	div {
		padding: 20px;
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		color: var(--clr-white);
	}
`;

export const Nav = styled.div`
	z-index: 9999;
`;

export const MenuItem = styled.li`
	margin: 0 20px;
	cursor: pointer;
`;
export const Cart = styled(MenuItem)`
	margin: 0 20px;
	cursor: pointer;
	position: relative;

	.counter {
		font-size: 0.6em;
		padding: 0.6em;
		color: white;
		position: absolute;
		bottom: 15%;
		right: -80%;
		background-color: #000000;
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
	position: relative;
`;

export const Dropdown = styled.div`
	position: absolute;
	top: 55px;
	div {
		background-color: #222;
		width: 150px;
		display: ${({ toggle }) => (toggle ? "block" : "none")};

		overflow: hidden;

		a {
			display: block;
			padding: 15px 8px;
			text-transform: capitalize;
			text-decoration: none;
			color: #fff;
			font-size: 12px;

			&:hover {
				color: greenyellow;
			}
		}
	}
`;
