import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.jpg";

const ImageSpan = styled.span`
    & img {
        width: 18px;

        @media only screen and (max-width: 600px) {
            width: 16px;
        }

        @media only screen and (max-width: 600px) {
            width: 16px;
        }
    }
`;

const Logo = (props) => {
    return (
        <ImageSpan>
            <img
                src={logo}
                alt='logo'
            />
        </ImageSpan>
    );
};

export default Logo;