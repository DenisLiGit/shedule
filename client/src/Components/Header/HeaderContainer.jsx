import {connect} from "react-redux";
import {Header} from "./Header";
import {isAuth} from "../../redux/Selectors/userSelector";
import {userLogOutThunk} from "../../redux/userReducer";

const mapStateToProps = (state) => {
    return {
        isAuth: isAuth(state)
    }
}

const HeaderContainer = connect(mapStateToProps, {
    userLogOutThunk
})(Header)

export default HeaderContainer