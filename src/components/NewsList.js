import React from 'react';
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsContainer = styled.ul`
    padding: 0.5rem 4rem;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 500px) {
        padding: 0.5rem 1rem;
    }
`

const NewsList = ({ news }) => {
    return (
        <NewsContainer>
            {news.map((newsItem, index) => <NewsItem newsItem={newsItem} key={newsItem.id} index={index} />)}
        </NewsContainer>
    );
};

export default NewsList;