import styled from "styled-components";

export const Header = styled.header`
	z-index: 2;
	position: relative;
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
