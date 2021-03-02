import {connect} from "react-redux";
import {Board} from "./Board";
import {getSheduleThunk} from "../../redux/sheduleReducer";
import {getShedules} from "../../redux/Selectors/boardSelector";
import {getdayOfWeek, gettimeStamps} from "../../redux/Selectors/sheduleSelector";

const mapStateToProps = (state) => {
    return {
        shedules: getShedules(state),
        dayOfWeek: getdayOfWeek(state),
        timeStamps: gettimeStamps(state),
    }
}

const BoardContainer = connect(mapStateToProps, {
    getSheduleThunk,
})(Board)

export default BoardContainer