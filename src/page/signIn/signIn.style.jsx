import styled from "styled-components";

export const Section = styled.section`
    max-width: 400px;
    margin: 5em auto 0;
    padding: 8em 1em;
    background-color: ${({ theme }) => theme.colors.light300};
    display: flex;
    flex-direction:column;

    p{
        margin-bottom:1em;
        text-align: center;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #DB4437;
        border: 2px solid #DB4437;
        color: #fff;
        &:hover{
        background-color: #DB4437;
        border: 2px solid #DB4437;
        }

        .icon{
            color: #fff;
        }
    }
`