import {connect} from "react-redux";
import {Auth} from "./Auth";
import {loginThunk, registerThunk} from "../../redux/userReducer";
import {compose} from "redux";
import {SheduleRedirect} from "../../Hoc/AuthRedirect";
import {getErrorMessage, isAuth} from "../../redux/Selectors/userSelector";

const mapStateToProps = (state) => {
    return {
        isAuth: isAuth(state),
        errorMessage: getErrorMessage(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        registerThunk,
        loginThunk,
    }),
    SheduleRedirect
)(Auth)