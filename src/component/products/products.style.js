import styled from "styled-components";

export const Section = styled.section`
	background-color: ${({ theme }) => theme.colors.gray100};
	padding: 2em 0.5em;
	margin: 0.5em 0;
	button {
		display: flex;
		align-items: center;
	}
`;
export const Header = styled.div`
	background-color: ${({ theme }) => theme.colors.gray800};
	h1 {
		text-transform: uppercase;
		text-align: center;
		color: ${({ theme }) => theme.colors.gray100};
	}
`;
export const ProductLIst = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
export const ScrollTop = styled.div`
	background-color: ${({ theme }) => theme.colors.gray800};
	display: flex;
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	position: fixed;
	bottom: 40px;
	right: 50px;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray300};
	}
`;

export const LoadingDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
`;

export const LoadMoreSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1.5em 0;

	p {
		text-align: center;
	}

	button {
		align-self: center;
	}
`;
