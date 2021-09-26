import styled from "styled-components";

export const CounterStyled = styled.div`
	.quantity {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}
	.quantity__minus,
	.quantity__plus {
		display: block;
		width: 22px;
		height: 23px;
		margin: 0;
		background: ${({ theme }) => theme.colors.cartItemHead};
		text-decoration: none;
		text-align: center;
		line-height: 23px;
		color: ${({ theme }) => theme.colors.light100};
	}
	.quantity__minus:hover,
	.quantity__plus:hover {
		background: #575b71;
		color: #fff;
	}
	.quantity__minus {
		border-radius: 3px 0 0 3px;
	}
	.quantity__plus {
		border-radius: 0 3px 3px 0;
	}
	.quantity__input {
		width: 32px;
		height: 23px;
		margin: 0;
		padding: 0;
		text-align: center;
		background: #fff;
		color: ${({ theme }) => theme.colors.cartItemHead};
		border-radius: 0;
	}
	.quantity__minus:link,
	.quantity__plus:link {
		color: #8184a1;
	}
	.quantity__minus:visited,
	.quantity__plus:visited {
		color: #fff;
	}
`;
