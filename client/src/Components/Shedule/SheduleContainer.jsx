import {connect} from "react-redux";
import {Shedule} from "./Shedule";
import {compose} from "redux";
import {AuthRedirect} from "../../Hoc/AuthRedirect";
import {isAuth} from "../../redux/Selectors/userSelector";
import {
    getColors,
    getdayOfWeek,
    getIcons,
    getInitialValues,
    gettimeStamps
} from "../../redux/Selectors/sheduleSelector";
import {setSheduleThunk, sheduleErrorMessage} from "../../redux/sheduleReducer";
import {getShedules} from "../../redux/Selectors/boardSelector";

const mapStateToProps = (state) => {
    return {
        isAuth: isAuth(state),
        colors: getColors(state),
        icons: getIcons(state),
        shedules: getShedules(state),
        dayOfWeek: getdayOfWeek(state),
        timeStamps: gettimeStamps(state),
        initialValues: getInitialValues(state),
    }
}

export default compose(
    connect(mapStateToProps, {setSheduleThunk, sheduleErrorMessage}),
    AuthRedirect
)(Shedule)