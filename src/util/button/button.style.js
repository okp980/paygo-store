import styled, { css } from "styled-components";

const Btn = styled.button`
	background-color: ${({ theme }) => theme.colors.dark100};
	border: 2px solid ${({ theme }) => theme.colors.dark100};
	color: ${({ theme }) => theme.colors.light200};
	text-transform: capitalize;
	padding: 0.7em 1.8em;
	text-transform: uppercase;
	cursor: pointer;
	transition: var(--trans);
	margin-right: 0.5em;

	&:hover {
		background-color: ${({ theme }) => theme.colors.dark300};
		border: 2px solid ${({ theme }) => theme.colors.dark300};

		:disabled {
			background-color: ${({ theme }) => theme.colors.light200};
			border: 2px solid ${({ theme }) => theme.colors.light200};
		}
	}

	:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	${({ secondary }) =>
		secondary &&
		css`
			background-color: ${({ theme }) => theme.colors.light100};
			border: 2px solid ${({ theme }) => theme.colors.light100};
			color: ${({ theme }) => theme.colors.dark300};

			&:hover {
				background-color: ${({ theme }) => theme.colors.light300};
				border: 2px solid ${({ theme }) => theme.colors.light300};
			}
		`}
`;

export default Btn;
