import styled from "styled-components";
export const Overlay = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	max-width: 500px;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 999;
	animation: checkout 1s ease-in-out forwards;
	background-color: ${({ theme }) => theme.colors.dark300};
	padding: 1em;

	.info {
		background-color: ${({ theme }) => theme.colors.light300};
		border: 3px solid ${({ theme }) => theme.colors.light100};
		padding: 1em;
		border-radius: 5px;

		p {
			span {
				font-weight: 600;
				margin-right: 0.5em;
			}
		}
	}

	form {
		border: 1px solid ${({ theme }) => theme.colors.light300};
		padding: 3em 0.5em;
		width: 350px;
		.form-control {
			display: block;
			margin-bottom: 1em;

			label {
				display: block;
				text-transform: capitalize;
			}

			input {
				width: 100%;
			}
		}
	}
`;
