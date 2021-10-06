import React from "react";
import styled from "styled-components";


const Div = styled.div` 
    background-color: ${p => p.theme.text};
    height: 20px;
    width: 1px;
`;

const Divider = () => {
    return (
        <Div />
    )
}

export default Divider;