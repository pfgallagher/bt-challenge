const dummyData = require("./../components/settingsData/dummyData.json");
import axios from "axios";

// Action Types
const ADD_RESULTS = "ADD_RESULTS";
const CLEAR_RESULTS = "CLEAR_RESULTS";
const UPDATE_SEARCH_TYPE = "UPDATE_SEARCH_TYPE";
const UPDATE_OFFSET = "UPDATE_OFFSET";
const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";
const TOGGLE_LOADING_ON = "TOGGLE_LOADING_ON";
const TOGGLE_LOADING_OFF = "TOGGLE_LOADING_OFF";

// Action Creators
export const addResults = additionalResults => ({
	type: ADD_RESULTS,
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

export const toggleLoadingOn = () => ({
	type: TOGGLE_LOADING_ON,
});
export const toggleLoadingOff = () => ({
	type: TOGGLE_LOADING_OFF,
});

// Thunks

const buildSearchString = (
	searchType,
	searchQuery,
	notRandom,
	limit,
	offset,
	rating,
	language,
) =>
	`/api/search/${searchType}?api_key=APIKEY${
		searchQuery ? `&q=${searchQuery}` : ""
	}${notRandom ? `&limit=${limit}&offset=${offset}` : ""}&rating=${rating}${
		searchType === "search" ? `&lang=${language}` : ""
	}`;

export const initialSearch = (type, query) => async (dispatch, getState) => {
	try {
		dispatch(toggleLoadingOn());
		dispatch(clearResults());
		dispatch(updateSearchType(type));
		if (query) dispatch(updateSearchQuery(query));

		const { search, settings } = getState();
		const { searchType, searchQuery } = search;
		const { rating, language } = settings;
		const notRandom = searchType === "search" || searchType === "trending";
		const searchString = buildSearchString(
			searchType,
			searchQuery,
			notRandom,
			48,
			0,
			rating,
			language,
		);
		console.log(searchString);
		const { data: gifs } = await axios.get(searchString);
		const results = Array.isArray(gifs.data) ? gifs.data : [gifs.data];
		dispatch(addResults(results));
		if (notRandom) dispatch(updateOffset(49));
		dispatch(toggleLoadingOff());
	} catch (error) {
		console.log(error);
	}
};

export const infiniteScroll = () => async (dispatch, getState) => {
	try {
		dispatch(toggleLoadingOn());
		const { search, settings } = getState();
		const { searchType, offset, searchQuery } = search;
		const { rating, language } = settings;
		const notRandom = searchType === "search" || searchType === "trending";
		if (notRandom) {
			const searchString = buildSearchString(
				searchType,
				searchQuery,
				notRandom,
				48,
				offset,
				rating,
				language,
			);
			console.log(searchString);
			const { data: gifs } = await axios.get(searchString);
			dispatch(addResults(gifs.data));
			dispatch(updateOffset(49));
			dispatch(toggleLoadingOff());
		}
	} catch (error) {
		console.log(error);
	}
};

// Reducer
const initialState = {
	results: [],
	searchType: "",
	offset: 0,
	searchQuery: "",
	loading: false,
};

const dispatchers = {
	[ADD_RESULTS]: (state, action) => ({
		...state,
		results: [...state.results, ...action.additionalResults],
	}),
	[CLEAR_RESULTS]: (state, action) => ({
		...initialState,
		loading: state.loading,
	}),
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
	[TOGGLE_LOADING_ON]: (state, action) => ({
		...state,
		loading: true,
	}),
	[TOGGLE_LOADING_OFF]: (state, action) => ({
		...state,
		loading: false,
	}),
};

export default (state = initialState, action) => {
	if (action.type in dispatchers)
		return dispatchers[action.type](state, action);
	return state;
};
