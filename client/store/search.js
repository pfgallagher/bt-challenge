const dummyData = require("./../components/settingsData/dummyData.json");

// Action Types
const GET_RESULTS = "GET_RESULTS";
const CLEAR_RESULTS = "CLEAR_RESULTS";

// Action Creators
export const getResults = additionalResults => ({
	type: GET_RESULTS,
	additionalResults,
});

export const clearResults = () => ({
	type: CLEAR_RESULTS,
});

// Thunks

// Reducer
const initialState = {
	results: [...dummyData.data],
};

const dispatchers = {
	[GET_RESULTS]: (state, action) => ({
		...state,
		results: [...state.results, ...action.additionalResults],
	}),
	[CLEAR_RESULTS]: state => ({ ...state, results: [] }),
};

export default (state = initialState, action) => {
	if (action.type in dispatchers)
		return dispatchers[action.type](state, action);
	return state;
};
