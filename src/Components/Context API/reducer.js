//... this is what the Data Layer initally looks like ...//
//... when we start off, user is "null"
export const initialState = {
	user: null,
};

//... Dispatching actions into the Data Layer
export const actionTypes = {
	SET_USER: "SET_USER",
};

//... Listen to the reducer: if you receiced a SET_USER action, return the Data Layer with the new User
const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
