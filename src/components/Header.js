import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Toggle from "./Toggle"
import ButtonGroup from "./ButtonGroup"

const StyledHeader = styled.header` 
    min-height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.5rem 6rem;

    @media only screen and (max-width: 767px) {
        min-height: 3rem;
        padding: 0.25rem 2rem;
    }
    & button svg {
        font-size: 2rem;
        @media only screen and (max-width: 767px) {
            font-size: 1.2rem;
        }
    }
    & button {
        border: none;
        background-color: transparent;
    }
    & a {
        outline: none;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
  & div{
    display: flex;
    align-items: center;
    width: auto;
    height: 32px;
  }


  & h1 {
    color: ${({ theme }) => theme.text};
    padding-left: 20px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    @media only screen and (max-width: 767px) {
        padding-left: 10px;
        font-size: 16px;
    }
    }
   
`;

const Header = ({ setMode, theme }) => {
    const title = "Hacker News";
    return (
        <StyledHeader>
            <StyledLink to="/">
                <div>
                    <Logo />
                    <h1>{title}</h1>
                    <ButtonGroup />
                </div>
            </StyledLink>

            <div>
                <Toggle isLight={theme === 'light'} onToggle={setMode} />
            </div>
        </StyledHeader>
    );
};

export default Header;