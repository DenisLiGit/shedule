import {connect} from "react-redux";
import {SheduleCard} from "./SheduleCard";
import {gettimeStamps} from "../../redux/Selectors/sheduleSelector";

const mapStateToProps = (state, ownProps) => {
    return {
        timeStamps: gettimeStamps(state),
        shedule: ownProps.shedule,
        key: ownProps.key
    }
}

const SheduleCardContainer = connect(mapStateToProps, {})(SheduleCard)

export default SheduleCardContainer