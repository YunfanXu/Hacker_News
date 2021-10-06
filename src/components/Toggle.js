import React from "react";
import styled from "styled-components";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const ToggleSpan = styled.span`
    & button {
            vertical-align: middle;
            font-size: 2rem;
        }
        @media only screen and (max-width: 767px) {
            font-size: 1rem;
        }
       
`;

const Toggle = ({ isLight, onToggle }) => {
    return (
        <ToggleSpan>
            <button onClick={onToggle}>{isLight ? <BsMoonFill /> : <BsFillSunFill />}</button>
        </ToggleSpan>
    )
};

export default Toggle;