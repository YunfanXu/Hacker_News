import constants from "./constants";

export default (state = {}, action) => {
    switch (action.type) {
        case constants.FETCH_NEWS_ID_LIST:
        case constants.FETCH_NEWS_ID_LIST_SUCCESS:
            return {
                ...state,
                newsIDList: action.payload,
            };
        case constants.FETCH_NEWS_ID_LIST_FAILURE:
            return {
                ...state,
                newsIDList: action.payload,
            };

        case constants.FETCH_NEWS:
            return {
                ...state,
                isFetching: true,
            }
        case constants.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                newsDataList: [...state.newsDataList, ...action.payload],
                page: state.page + 1,
                isFetching: false
            }
        case constants.FETCH_NEWS_FAILURE:
            return {
                ...state,
                err: "FETCH_NEWS_FAILURE"
            }
        default:
            return state;
    }
}