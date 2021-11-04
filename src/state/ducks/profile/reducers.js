import * as types from "./types";

const initialState = {
    auth: {
        access_token: localStorage.getItem("access_token") || "",
        token_type: localStorage.getItem("token_type") || "",
    },
    profile: {
        "id": "SG0",
        "name": "SG0",
        "level": 0,
        "age": null,
        "birthday": null,
        "gender": null,
        "zodiac": null,
        "hometown": null,
        "bio": null,
        "latlong": "",
        "education": {
            "school_name": null,
            "graduation_time": null
        },
        "career": {
            "company_name": null,
            "starting_from": null,
            "ending_in": null
        },
        "user_pictures": [],
        "user_picture": null,
        "cover_picture": {
            "url": ""
        }
    }
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOG_IN:
            return { ...state, auth: action.payload };
        case types.LOG_OUT:
            return { ...state, auth: initialState.auth };
        case types.LOAD_PROFILE:
            return { ...state, profile: action.payload };
        case types.CLEAR_PROFILE:
            return { ...state, profile: initialState.profile };
        case types.UPDATE_PROFILE:
            return { ...state, profile: action.payload }
        default:
            return state;
    }
}