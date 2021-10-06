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
        const { storyIds, page } = payload;

        return getTopStoriesByPage(storyIds, page)
            .then(stories => {
                stories.forEach((story) => {
                    story.isLiked = false;
                });
                console.log("dispatch:",stories)
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
        const storyIds = response.data;
        dispatch({ type: constants.FETCH_NEWS_ID_LIST_SUCCESS, payload: storyIds });
        dispatch(fetchNews({ storyIds, page: 0 }));
        return storyIds;

    } catch (error) {
        dispatch({ type: constants.FETCH_NEWS_ID_LIST_FAILURE, payload: error })
    }
}
