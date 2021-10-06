import React from "react";
import styled, { ThemeContext } from "styled-components";
import browserHistory from "../browserHistory";


const Span = styled.span` 
    display: flex;
    justify-content: space-between;
    align-items:center;
    vertical-align: baseline;
    color: ${({ theme }) => theme.text};
    & button {
        border: none;
        background-color: transparent;
        @media only screen and (max-width: 767px) {
            padding: 0.5rem 0.5rem;
        }
    }
    & div {
        width: 1px;
        height: 1rem;
        background-color: ${({ theme }) => theme.text};
    }
`;

const Text = styled.span`
    color: ${({ theme }) => theme.text};
    &:hover {
        font-weight: 900;
    }
`;

const ButtonGroup = () => {
    return (
        <Span>
            <button onClick={() => browserHistory.push('/')}>
                <Text>latest</Text>
            </button>
            <span>|</span>
            <button onClick={() => {
                console.log("browserHistory.push('/starred')")
                browserHistory.push('/starred')
            }}>
                <Text>starred</Text>
            </button>
        </Span>
    );
};

export default ButtonGroup;