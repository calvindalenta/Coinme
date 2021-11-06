import { createSelector } from "reselect";

export const profileState = state => state.profile;
export const getUserProfile = createSelector(
    profileState,
    profileState => profileState.profile
)
export const getUserAuth = createSelector(
    profileState,
    profileState => profileState.auth
)
export const isLoggedIn = createSelector(
    profileState,
    getUserAuth,
    (state, auth) => Boolean(auth.access_token) 
)
export const isLoaded = createSelector(
    profileState,
    profileState => profileState.loaded
)
export const getToken = createSelector(
    profileState,
    getUserAuth,
    (state, auth) => auth.access_token
)
export const getUsername = createSelector(
    profileState,
    getUserProfile,
    (state, profile) => profile.name
)
export const getUserID = createSelector(
    profileState,
    getUserProfile,
    (state, profile) => profile.id
)
export const getUserLevel = createSelector(
    profileState,
    getUserProfile,
    (state, profile) => profile.level
)
export const getUserCoverImageUrl = createSelector(
    profileState,
    getUserProfile,
    (state, profile) => profile.cover_picture.url
)
export const getUserCareer = createSelector(
    profileState,
    getUserProfile,
    (state, profile) => profile.career
)
export const getUserEducation = createSelector(
    profileState,
    getUserProfile,
    (state, profile) => profile.education
)
export const getUserPictures = createSelector(
    profileState,
    getUserProfile,
    (state, profile) => profile.user_pictures
)