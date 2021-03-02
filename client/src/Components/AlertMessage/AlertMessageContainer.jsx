import {connect} from "react-redux";
import {getErrorMessage, getInfoMessage} from "../../redux/Selectors/sheduleSelector";
import {AlertMessage} from "./AlertMessage";
import {sheduleErrorMessage, sheduleInfoMessage} from "../../redux/sheduleReducer";

const mapStateToProps = (state) => {
    return {
        infoMessage: getInfoMessage(state),
        errorMessage: getErrorMessage(state),
    }
}

const AlertMessageContainer = connect(mapStateToProps, {
    sheduleErrorMessage,
    sheduleInfoMessage
})(AlertMessage)

export default AlertMessageContainer