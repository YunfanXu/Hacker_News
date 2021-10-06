import constants from "./constants";
import api from "../api/getNews";

const NEWS_PER_PAGE = 12;
const URL_POSTFIX = ".json?print=pretty";
const getNewsPerPage = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);


const getTopStoriesByPage = async (id, page) => {
    const { begin, end } = getNewsPerPage(NEWS_PER_PAGE, page);
    const activeIDs = getPageValues({ begin, end, items: id });
    const storyPromises = await Promise.all(activeIDs.map(async (id) => {
        const response = await api.get(`/item/${id}${URL_POSTFIX}`);
        return response.data;
    }));
    return storyPromises;
}


export const fetchNews = (payload = {}) => async dispatch => {
    try {
        dispatch({ type: constants.FETCH_NEWS, payload: payload });
        const { newsIDList, page } = payload;

        // console.log("newsIDList",newsIDList)
        return getTopStoriesByPage(newsIDList, page)
            .then(stories => {
                stories.forEach((story) => {
                    story.isStarred = false;
                });
                // console.log("dispatch:", stories)
                dispatch({ type: constants.FETCH_NEWS_SUCCESS, payload: stories });
            })


    } catch (error) {
        dispatch({ type: constants.FETCH_NEWS_FAILURE, payload: error });
    }
}

export const fetchNewsIdList = (payload = {}) => async dispatch => {
    try {
        dispatch({ type: constants.FETCH_NEWS_ID_LIST, payload: payload });
        const response = await api.get(`/topstories${URL_POSTFIX}`);
        const newsIDList = response.data;
        dispatch({ type: constants.FETCH_NEWS_ID_LIST_SUCCESS, payload: newsIDList });
        dispatch(fetchNews({ newsIDList, page: 0 }));
        return newsIDList;

    } catch (error) {
        dispatch({ type: constants.FETCH_NEWS_ID_LIST_FAILURE, payload: error })
    }
}

export const setStarred = (payload = {}) => {
    const { id, newsDataList, isStarred } = payload;
    newsDataList.forEach(item => {
        if(item.id === id){
            item.isStarred = isStarred;
            return item;
        }
    })

    let newStarredNews = newsDataList.filter(item => item.isStarred);
    return {
        type: constants.SET_STARRED,
        payload: { newsDataList, newStarredNews }
    }
}