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
	align-items: center;
	z-index: 999;
	background-color: ${({ theme }) => theme.colors.gray100};
	padding: 1em;

	form {
		.form-control {
			display: block;

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
