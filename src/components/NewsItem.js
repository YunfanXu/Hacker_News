import React from 'react';
import styled from "styled-components";
import * as timeago from 'timeago.js';
import { BsStarFill, BsStar } from "react-icons/bs";

const Item = styled.li`
    background-color: ${({ theme }) => theme.color};
    border-radius: 5px;
    display: flex;
    width: 100%;
    padding: 1rem 0;
    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`;

const ItemContainer = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
`;

const TitleContainer = styled.a`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: row;
    align-items: end;
    text-decoration: none;
    outline: none;
`;

const Title = styled.span`
    color:${({ theme }) => theme.text};
    font-family: Ubuntu Mono;
    font-size: 18px;
    font-weight: bold;
    padding: 0 1rem;
`;
const Index = styled.span`
    width: 1rem;
    font-size: 18px;
    color:${({ theme }) => theme.textGray};
`;
const Text = styled.span`
    color:${({ theme }) => theme.textGray};
    font-size: 10px;
    line-height: 1.4;
`;

const ContentContainer = styled.span`
    color:${({ theme }) => theme.textGray};
    padding-left: 2rem;
    font-size: 10px;
`;

const StarButton = styled.span`
    & button{
        color:${({ theme }) => theme.textGray};
        font-size: 10px;
        border: none;
        background-color: transparent;
    }
  
    & svg {
        vertical-align: bottom;
        font-size: 10px;
        color:${props =>  props.isLiked ? ({ theme }) => theme.orange : ({ theme }) => theme.textGray}

    }
`;

const getSiteName = (url) => {
    let domain = url.split('/')[2];
    return domain.includes("www.") ? domain.slice(4) : domain;
}

const NewsItem = ({ newsItem, index, stories = [], likedStories = [], setLike }) => {

    const { by, kids = [], score, url, title, id, type, time, isLiked } = newsItem;

    console.log("newsItemnewsItemnewsItemnewsItem", newsItem);
    const siteName = getSiteName(url) || 'news.ycombinator.com';
    // const link = getNewsLink({ url, id });
    // const commentUrl = `${HN_ITEM}${id}`;
    // const userUrl = `${HN_USER}${by}`;

    const handleStarButton = (e) =>{

        console.log("starred", e.target.value)
    }
    return (
        <Item>
            <ItemContainer>
                <TitleContainer href={url} target="_blank">
                    <Index>{index + 1}.</Index>
                    <Title>{title}</Title>
                    <Text>({siteName})</Text>
                </TitleContainer>
                <ContentContainer>
                    {score} points by {by} {timeago.format(new Date(time * 1000).toISOString())} | {kids.length} comments |
                    <StarButton isLiked={isLiked}><button onClick={handleStarButton} > {isLiked ? <BsStarFill /> : <BsStar />} save</button></StarButton>
                </ContentContainer>

            </ItemContainer>
        </Item>
    );
};



export default NewsItem;