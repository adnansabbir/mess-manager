import USER_ACTION_TYPES from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    authStateFetched: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        case USER_ACTION_TYPES.SET_AUTH_STATE_FETCHED:
            return {
                ...state,
                authStateFetched: true
            };

        default:
            return state
    }
};

export default userReducer;