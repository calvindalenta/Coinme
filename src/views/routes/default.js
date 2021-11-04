import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { isLoggedIn } from "../../state/ducks/profile/selectors";

const DefaultRoute = ({ isAuthenticated }) => {
    let path = "/login";
    if (isAuthenticated) path = "/profile"
    return <Navigate to={path} />;
};

const mapStateToProps = state => {
    return {
        isAuthenticated: isLoggedIn(state)
    };
};

export default connect(mapStateToProps)(DefaultRoute);
