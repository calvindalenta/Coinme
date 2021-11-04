import * as types from "./types"
import { getToken, getUserProfile } from "./selectors";

export const updateProfile = (newProfile) => {
    return {
        type: types.UPDATE_PROFILE,
        payload: newProfile
    }
}

export const clearProfile = () => {
    return {
        type: types.CLEAR_PROFILE
    }
}

export const logout = () => (dispatch, getState, api) => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");

    dispatch({
        type: types.LOG_OUT
    })
    dispatch(clearProfile())
}

export const login = (phoneNumber, password) => async (dispatch, getState, api) => {
    const { access_token, token_type } = await api.login(phoneNumber, password)
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("token_type", token_type);

    dispatch({
        type: types.LOG_IN,
        payload: {access_token, token_type}
    })
}

export const register = (phoneNumber, password) => async (dispatch, getState, api) => {
    const { success } = await api.register(phoneNumber, password)
    if (success); // push history and show notification
}

export const loadProfile = () => async (dispatch, getState, api) => {
    const token = getToken(getState())
    const profile = await api.getProfile(token)

    dispatch({
        type: types.LOAD_PROFILE,
        payload: profile
    })
}

export const postProfile = (token, name, gender, birthday, hometown, bio) => async (dispatch, getState, api) => {
    const { newProfile } = await api.postProfile(getUserProfile(getState), token, name, gender, birthday, hometown, bio)
    dispatch(updateProfile(newProfile))
}

export const postProfilePicture = (token, imageUrl) => async (dispatch, getState, api) => {
    const { newProfile } = await api.postProfilePicture(getUserProfile(getState), token, imageUrl)
    dispatch(updateProfile(newProfile))
}

export const postCoverImage = (token, imageUrl) => async (dispatch, getState, api) => {
    const { newProfile } = await api.postCoverImage(getUserProfile(getState), token, imageUrl)
    dispatch(updateProfile(newProfile))
}

export const postCareer = (token, companyName, startingFrom, endingIn) => async (dispatch, getState, api) => {
    const { newProfile } = await api.postCareer(getUserProfile(getState), token, companyName, startingFrom, endingIn)
    dispatch(updateProfile(newProfile))
}

export const postEducation = (token, schoolName, graduationTime) => async (dispatch, getState, api) => {
    const { newProfile } = await api.postEducation(getUserProfile(getState), token, schoolName, graduationTime)
    dispatch(updateProfile(newProfile))
}