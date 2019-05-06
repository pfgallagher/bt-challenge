const dummyData = require("./../components/settingsData/dummyData.json");

// Action Types
const INFINITE_SCROLL = "INFINITE_SCROLL";

// Action Creators
export const infiniteScroll = additionalResults => ({
	type: INFINITE_SCROLL,
	additionalResults,
});

// Reducer
const initialState = {
	results: [...dummyData.data],
};

const dispatchers = {
	[INFINITE_SCROLL]: (state, action) => ({
		...state,
		results: [...state.results, ...action.additionalResults],
	}),
};

export default (state = initialState, action) => {
	if (action.type in dispatchers)
		return dispatchers[action.type](state, action);
	return state;
};
