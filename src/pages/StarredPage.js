import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from 'react-redux';
import NewsList from "../components/NewsList";
import styled from "styled-components";


const Hints = styled.div`
    text-align:center;

    color: ${({ theme }) => theme.text};
    font-size:20px;
    border:none;
`;


const StarredPage = () => {

    const starredNews = useSelector((state) => state.starredNews);
    return (
        <main>
            {starredNews.length > 0 ?
                (<InfiniteScroll
                    dataLength={starredNews.length}
                    hasMore={false}
                    style={{
                        height: '100%',
                        overflow: 'visible',
                    }}
                >
                    <NewsList news={starredNews} />
                </InfiniteScroll>)
                : <Hints>No starred news...</Hints>
            }

        </main>
    );
};



export default StarredPage;