const initialState = {};

const dispatchers = {
	// [ACTION_TYPE]: (state, action) => result,
};

export default (state = initialState, action) => {
	if (action.type in dispatchers)
		return dispatchers[action.type](state, action);
	return state;
};
