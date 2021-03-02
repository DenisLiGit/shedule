import {connect} from "react-redux";
import {CardActions} from "./CardActions";
import {deleteSheduleThunk, editSheduleThunk, updateSheduleThunk} from "../../redux/sheduleReducer";

const mapStateToProps = (state, ownProps) => {
    return {
        shedule: ownProps.shedule
    }
}

const CardActionsContainer = connect(mapStateToProps, {
    updateSheduleThunk,
    editSheduleThunk,
    deleteSheduleThunk
})(CardActions)

export default CardActionsContainer