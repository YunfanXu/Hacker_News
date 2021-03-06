import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from 'react-redux';
import { fetchNewsIdList, fetchNews } from "../state/actions";
import NewsList from "../components/NewsList";
import styled from "styled-components";

const mapStateToProps = (state) => {

    return {
        isFetching: state.isFetching,
        newsDataList: state.newsDataList,
        newsIDList: state.newsIDList,
        page: state.page,
    }
};

const Button = styled.button`
    width: 100px;
    height: 34px;
    background-color: ${({ theme }) => theme.orange};
    color: white;
    font-size:14px;
    margin-left:6rem;
    border:none;
    @media only screen and (max-width: 600px) {
        margin-left:3rem;
    }
`;
const HomePage = ({ fetchNewsIdList, fetchNews, isFetching, newsDataList, newsIDList, page }) => {

    const fetchStory = () => {
        if (!isFetching) {
            fetchNews({ newsIDList, page });
        }
    }

    useEffect(() => {
        if ( newsDataList.length === 0) {
            fetchNewsIdList();
        }
    }, [newsDataList.length, fetchNewsIdList]);

    return (
        <main>
            <InfiniteScroll
                dataLength={newsDataList.length}
                next={fetchStory}
                hasMore={false}
                style={{
                    height: '100%',
                    overflow: 'visible',
                }}
            >
                <NewsList news={newsDataList} />
            </InfiniteScroll>
            <Button onClick={fetchStory}>show more</Button>
        </main>
    );
};



export default connect(mapStateToProps, { fetchNewsIdList, fetchNews })(HomePage);