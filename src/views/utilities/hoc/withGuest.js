import { connect } from "react-redux";
import { Navigate } from "react-router";
import { isLoggedIn } from "../../../state/ducks/profile/selectors";

export default function withGuest(WrappedComponent) {
    const Auth = ({ isAuthenthicated, ...rest }) => {
        return !isAuthenthicated ? <WrappedComponent {...rest} /> : <Navigate to="/" /> 
    }
    const mapStateToProps = (state) => ({ isAuthenthicated: isLoggedIn(state) })
    return connect(mapStateToProps)(Auth);
}