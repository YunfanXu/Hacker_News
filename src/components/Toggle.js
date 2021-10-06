import React from "react";
import styled from "styled-components";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const ToggleSpan = styled.span`
    & button {
            vertical-align: middle;
            color:${({ theme }) => theme.text};
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