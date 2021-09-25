import styled from "styled-components";

export const CounterStyled = styled.div`
	body {
		font-family: "Open Sans", sans-serif;
		font-size: 13px;
		font-weight: 400;
		color: #8184a1;
		line-height: 1.3;
	}
	h4 {
		margin-top: 0;
		margin-bottom: 50px;
	}
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
		background: #dee0ee;
		text-decoration: none;
		text-align: center;
		line-height: 23px;
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
		height: 19px;
		margin: 0;
		padding: 0;
		text-align: center;
		border-top: 2px solid #dee0ee;
		border-bottom: 2px solid #dee0ee;
		border-left: 1px solid #dee0ee;
		border-right: 2px solid #dee0ee;
		background: #fff;
		color: #8184a1;
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
