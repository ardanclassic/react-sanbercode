const initialState = {
	country: null,
	tableStatistic: null,
	globalInfo: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GLOBAL_INFO':
			return {
				...state,
				globalInfo: action.value
			}
		case 'COUNTRY_INFO':
			return {
				...state,
				country: action.value
			}
		case 'ALL_STATISTIC':
			return {
				...state,
				tableStatistic: action.value
			}
		default:
			return state;
	}
}

export default reducer;