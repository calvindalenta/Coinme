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
export const getToken = createSelector(
    profileState,
    getUserAuth,
    (state, auth) => auth.access_token
)