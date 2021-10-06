import React from "react";
import styled from "styled-components";
import browserHistory from "../browserHistory";
import { useLocation } from 'react-router-dom'


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
    font-size: 14px;
    color: ${props => props.isActived ? ({ theme }) => theme.orange : ({ theme }) => theme.text};
    font-weight: ${props => props.isActived ? 'bold' : 300};
`;

const ButtonGroup = () => {
    const location = useLocation();

    return (
        <Span>
            <button onClick={() => browserHistory.push('/')}>
                <Text isActived={location.pathname === '/'}>latest</Text>
            </button>
            <span>|</span>
            <button onClick={() => {
                browserHistory.push('/starred')
            }}>
                <Text isActived={location.pathname === '/starred'} >starred</Text>
            </button>
        </Span>
    );
};

export default ButtonGroup;