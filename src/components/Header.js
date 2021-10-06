import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Toggle from "./Toggle"
import ButtonGroup from "./ButtonGroup"

const StyledHeader = styled.header`
    border-top:4px solid #FE7139;
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.5rem 4rem;

    @media only screen and (max-width: 767px) {
        min-height: 3rem;
        padding: 0.25rem 2rem;
    }
    & button svg {
        font-size: 1.1rem;
        @media only screen and (max-width: 767px) {
            font-size: 1rem;
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
    padding-right: 2rem;
    @media only screen and (max-width: 767px) {
        padding-right: 0.5rem;
    }
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

const GroupContainer = styled.div`
    display:flex
`;
const Header = ({ setMode, theme }) => {
    const title = "Hacker News";
    return (
        <StyledHeader>
            <GroupContainer>
                <StyledLink to="/">
                    <div>
                        <Logo />
                        <h1>{title}</h1>
                    </div>
                </StyledLink>
                <ButtonGroup />
            </GroupContainer>
            <div>
                <Toggle isLight={theme === 'light'} onToggle={setMode} />
            </div>
        </StyledHeader>
    );
};

export default Header;