import styled, { css } from "styled-components";

const Btn = styled.button`
	background-color: ${({ theme }) => theme.colors.gray900};
	border: 2px solid ${({ theme }) => theme.colors.gray900};
	color: ${({ theme }) => theme.colors.gray100};
	text-transform: capitalize;
	padding: 0.7em 1.8em;
	text-transform: uppercase;
	cursor: pointer;
	transition: var(--trans);
	margin-right: 0.5em;

	&:hover {
		background-color: ${({ theme }) => theme.colors.gray700};
		border: 2px solid ${({ theme }) => theme.colors.gray700};

		:disabled {
			background-color: ${({ theme }) => theme.colors.gray900};
			border: 2px solid ${({ theme }) => theme.colors.gray900};
		}
	}

	:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	${({ secondary }) =>
		secondary &&
		css`
			background-color: transparent;
			border: 2px solid ${({ theme }) => theme.colors.gray900};
			color: ${({ theme }) => theme.colors.gray900};

			&:hover {
				background-color: ${({ theme }) => theme.colors.gray700};
				border: 2px solid ${({ theme }) => theme.colors.gray700};
				color: ${({ theme }) => theme.colors.gray100};
			}
		`}
`;

export default Btn;
