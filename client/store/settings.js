// Action Types
const SET_LANGUAGE = "SET_LANGUAGE";
const SET_RATING = "SET_RATING";

// Action Creators
export const setLanguage = language => ({
	type: SET_LANGUAGE,
	language,
});

export const setRating = rating => ({
	type: SET_RATING,
	rating,
});

// Reducer
const initialState = {
	language: "en",
	rating: "pg-13",
};

const dispatchers = {
	[SET_LANGUAGE]: (state, action) => ({ ...state, language: action.language }),
	[SET_RATING]: (state, action) => ({ ...state, rating: action.rating }),
};

export default (state = initialState, action) => {
	if (action.type in dispatchers)
		return dispatchers[action.type](state, action);
	return state;
};
