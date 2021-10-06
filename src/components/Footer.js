import React from "react";
import styled from "styled-components";
import ButtonGroup from "./ButtonGroup"

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-item:center;
    justify-contents:center;
    margin-top:2rem;
    margin-left: 4rem;
    box-sizing: border-box;
    width: 85%;
    height: 110px;
    border-top: 2px solid #FE7139;
    @media only screen and (max-width: 600px) {
        height: 60px;
    }

    & h1{
        color: ${({ theme }) => theme.text};
        text-align: center;
        padding-left: 20px;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        @media only screen and (max-width: 767px) {
            padding-left: 10px;
            font-size: 16px;
        }
    }
    & div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Footer = ({ setMode, theme }) => {
    const title = "Hacker News";
    return (
        <StyledFooter>
            <h1>{title}</h1>
            <div><ButtonGroup /></div>
        </StyledFooter>
    );
};

export default Footer;