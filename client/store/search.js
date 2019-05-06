const dummyData = require("./../components/settingsData/dummyData.json");
import axios from "axios";
// Action Types
const GET_RESULTS = "GET_RESULTS";
const CLEAR_RESULTS = "CLEAR_RESULTS";
const UPDATE_SEARCH_TYPE = "UPDATE_SEARCH_TYPE";
const UPDATE_OFFSET = "UPDATE_OFFSET";
const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";

// Action Creators
export const getResults = additionalResults => ({
	type: GET_RESULTS,
	additionalResults,
});

export const clearResults = () => ({
	type: CLEAR_RESULTS,
});

export const updateOffset = offsetSize => ({
	type: UPDATE_OFFSET,
	offsetSize,
});

export const updateSearchType = searchType => ({
	type: UPDATE_SEARCH_TYPE,
	searchType,
});

export const updateSearchQuery = searchQuery => ({
	type: UPDATE_SEARCH_QUERY,
	searchQuery,
});

// Thunks

export const initialSearch = (type, query) => async (dispatch, getState) => {
	try {
		dispatch(clearResults());
		dispatch(updateSearchType(type));
		if (query) dispatch(updateSearchQuery(query));

		const { search, settings } = getState();
		const { searchType, searchQuery } = search;
		const { rating, language } = settings;
		const notRandom = searchType === "search" || searchType === "trending";

		const searchString = `/api/search/${searchType}?api_key=APIKEY${
			searchQuery ? `&q=${searchQuery}` : ""
		}${notRandom ? "&limit=24&offset=0" : ""}&rating=${rating}${
			searchType === "search" ? `&lang=${language}` : ""
		}`;
		console.log(searchString);
		// Axios request goes here
		// Add result dispatch goes here
		if (notRandom) dispatch(updateOffset(24));
	} catch (error) {
		console.log(error);
	}
};

export const trendingSearch = () => {};
export const randomSearch = () => {};

export const regularSearch = () => {};

// Reducer
const initialState = {
	results: [...dummyData.data],
	searchType: "",
	offset: 0,
	searchQuery: "",
};

const dispatchers = {
	[GET_RESULTS]: (state, action) => ({
		...state,
		results: [...state.results, ...action.additionalResults],
	}),
	[CLEAR_RESULTS]: (state, action) => initialState,
	[UPDATE_SEARCH_TYPE]: (state, action) => ({
		...state,
		searchType: action.searchType,
	}),
	[UPDATE_OFFSET]: (state, action) => ({
		...state,
		offset: state.offset + action.offsetSize,
	}),
	[UPDATE_SEARCH_QUERY]: (state, action) => ({
		...state,
		searchQuery: action.searchQuery,
	}),
};

export default (state = initialState, action) => {
	if (action.type in dispatchers)
		return dispatchers[action.type](state, action);
	return state;
};
